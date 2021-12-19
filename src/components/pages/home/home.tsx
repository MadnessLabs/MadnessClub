import { State } from '@fireenjin/components/dist/types/stencil-public-runtime';
import { Build, Component, Listen, h } from '@stencil/core';

import { AuthService } from '../../../helpers/auth';
import { DatabaseService } from '../../../helpers/database';
import env from '../../../helpers/env';
import getParameter from '../../../helpers/getParameter';


@Component({
    tag: 'page-home',
    styleUrl: 'home.css'
})
export class PageHome {
    config = env();
    auth = Build.isBrowser ? new AuthService({
        ...this.config,
        tokenLocalStorageKey: "madnessclub:token",
        authLocalStorageKey: "madnessclub:session",
        emulate: env("emulate", false),
    }) : null;
    db = Build.isBrowser ? new DatabaseService({
        emulate: env("emulate", false)
    }) : null;

    @State() session: any;
    @State() user: {
        email?: string;
        id?: string;
        photo?: string;
        interests?: string[];
        displayName?: string;
        isEnrolled?: boolean;
        isPayable?: boolean;
    };

    @Listen("fireenjinSubmit")
    async onSubmit(event) {
        if (!event?.detail?.data?.email) return alert("A valid email is required to join this club.");
        this.auth.withEmailLink(event.detail.data.email, {
            url: env("url"),
            dynamicLinkDomain: env("dynamicLinkDomain"),
            iOS: {
                bundleId: "com.fireenjin.madnessclub",
            },
            android: {
                packageName: "com.fireenjin.madnessclub",
                installApp: false,
                minimumVersion: "12",
            },
            handleCodeInApp: true,
        });
    }

    @Listen("ionChange")
    onChange(event) {
        if (event?.target?.name !== "interests" || !this.session?.uid) return;
        this.db.update("users", this.session.uid, {
            interests: event?.target?.value || []
        });
    }

    async getUser(id) {
        return (await this.db.getDocument("users", id)).data()
    }

    async createNewUser(session) {
        this.db.add("users", {
            email: session?.email || null,
            photo: session?.photoURL || null,
            id: session?.uid || null,
            displayName: session?.displayName || null
        }, session.uid);

        return this.getUser(session?.uid);
    }

    async componentDidLoad() {
        if (Build.isBrowser) {
            this.auth.onAuthChanged(async (session) => {
                if (session?.uid) {
                    this.session = session;
                    this.user = await this.getUser(session.uid);
                    if (!this.user) {
                        this.user = await this.createNewUser(session);
                    } else {
                        this.db.update("users", this.session.uid, {
                            email: session?.email || null,
                            photo: session?.photoURL || null,
                            id: session?.uid || null,
                            displayName: session?.displayName || null
                        });
                    }
                }
            });
        }

        if (getParameter("code")) {
            setTimeout(async () => {
                const response = this.db.call("connectUserToStripe")({
                    userId: this.session?.uid,
                    code: getParameter("code")
                });
                console.log(response);
            }, 3000);
        }
    }

    render() {
        return (
            <div>
                <video
                    src="./assets/videos/background.mov"
                    style={{
                        minHeight: "100vh",
                        minWidth: "100vw",
                        position: "absolute",
                        top: "0",
                        bottom: "0",
                        left: "50%",
                        transform: "translate(-50%)",
                        zIndex: "-1",
                        pointerEvents: "none"
                    }}
                    autoplay
                    muted
                    loop
                />
                <article class="ion-padding" style={{ display: "block", width: "100vw" }}>
                    <h2>👊Madness Club</h2>
                    {this.session?.uid ? <div class="dashboard ion-padding">
                        <h1>Welcome to the Club</h1>
                        <p>Well done, you are in the roster, consider joining your bretheren on our Discord, while we wait for our orders.</p>
                        <ion-button href="https://discord.gg/kMXXNNSzuu" target="_blank">
                            <ion-icon name="logo-discord" slot="start" />
                            Join the Discord
                        </ion-button>
                        <h2>What are you interested in learning?</h2>
                        <fireenjin-select
                            interfaceOptions={{ header: "Interested In" }}
                            name="interests"
                            multiple
                            value={this.user?.interests || []}
                            placeholder="Interests"
                            options={[{
                                label: "Software Engineering (Coding / Programming)",
                                value: "software"
                            },
                            {
                                label: "Graphic Engineering (Design / UI / UX)",
                                value: "design"
                            }]}
                        />
                        {this.user?.isEnrolled && !this.user?.isPayable && <div>
                            <h2>Setup your Payment Method</h2>
                            <p>Get paid to complete missions by creating a Stripe account.</p>
                            <ion-button color="success" href={`https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${env("stripe.clientId")}&scope=read_write`}>
                                <ion-icon slot="start" name="logo-usd" />
                                Connect to Stripe
                            </ion-button>
                        </div>}
                        {this.user?.isPayable && <div>
                            <h1>Setup Complete</h1>
                            <p>You are setup to be paid for Missions!</p>
                        </div>}
                    </div> : <div class="landing ion-padding">
                        <p>I see all this potential, and I see it squandered. God damn it, an entire generation pumping gas, waiting tables - slaves with white collars. Advertising has us chasing cars and clothes, working jobs we hate so we can buy shit we don't need. We're the middle children of history, man. No purpose or place. We have no Great War. No Great Depression. Our great war is a spiritual war... Our great depression is our lives. We've all been raised on television to believe that one day we'd all be millionaires, and movie gods, and rock stars, but we won't. We're slowly learning that fact. And we're very, very pissed off. <br /><ion-text color="medium" class="ion-padding">-Tlyer Durden</ion-text></p>
                        <p>Engineering is our tool, our weapon, to take control of our lives and bring about, The Change....</p>
                        <h1>Join the Madness...</h1>
                        <fireenjin-form name="signup">
                            <fireenjin-input type="email" name="email" placeholder="Email Address" required />
                        </fireenjin-form>
                    </div>}
                </article>
            </div >
        );
    }
}