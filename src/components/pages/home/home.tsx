import { State } from "@fireenjin/components/dist/types/stencil-public-runtime";
import { Build, Component, Listen, h } from "@stencil/core";

import { AuthService } from "../../../helpers/auth";
import { DatabaseService } from "../../../helpers/database";
import env from "../../../helpers/env";
import getParameter from "../../../helpers/getParameter";

@Component({
  tag: "page-home",
  styleUrl: "home.css",
})
export class PageHome {
  config = env();
  auth = Build.isBrowser
    ? new AuthService({
        ...this.config,
        tokenLocalStorageKey: "madnessclub:token",
        authLocalStorageKey: "madnessclub:session",
        emulate: env("emulate", false),
      })
    : null;
  db = Build.isBrowser
    ? new DatabaseService({
        emulate: env("emulate", false),
      })
    : null;

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
  @State() emailSent = false;

  @Listen("fireenjinSubmit")
  async onSubmit(event) {
    if (!event?.detail?.data?.email)
      return alert("A valid email is required to join this club.");
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
    this.emailSent = true;
  }

  @Listen("ionChange")
  onChange(event) {
    if (event?.target?.name !== "interests" || !this.session?.uid) return;
    this.db.update("users", this.session.uid, {
      interests: event?.target?.value || [],
    });
  }

  async getUser(id) {
    return (await this.db.getDocument("users", id)).data();
  }

  async createNewUser(session) {
    this.db.add(
      "users",
      {
        email: session?.email || null,
        photo: session?.photoURL || null,
        id: session?.uid || null,
        displayName: session?.displayName || null,
      },
      session.uid
    );

    return this.getUser(session?.uid);
  }

  async logout() {
    await this.auth.goOffline();
    await this.auth.logout();
    await this.db.clearWatchers();
    localStorage.clear();
    window.location.href = "/";
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
              displayName: session?.displayName || null,
            });
          }
          this.db.watchDocument("users", session.uid, ({ data }) => {
            this.user = data;
          });
        }
      });
    }

    if (getParameter("code")) {
      setTimeout(async () => {
        try {
          this.db.call("connectUserToStripe")({
            userId: this.session?.uid,
            code: getParameter("code"),
          });
        } catch (error) {
          alert(
            `There was an error setting up your Stripe connection: ${error?.message}`
          );
        }
      }, 3000);
    }
  }

  render() {
    return (
      <article
        class="ion-padding green-screen crt"
        style={{
          display: "block",
          width: "100vw",
          maxHeight: "100vh",
          overflowY: "auto",
        }}
      >
        <h1 class="title">
          <img
            style={{
              display: "block",
              margin: "-10px auto",
              zIndex: "2",
              position: "relative",
            }}
            src="./assets/images/Madness.png"
            alt="MADNESS"
            height="75"
            width="260"
          />
          <i style={{ fontSize: "40px" }}>👊</i>CɭUɃ<b>❚</b>
        </h1>
        {this.session?.uid && (
          <ion-button
            style={{ position: "absolute", top: "20px", right: "20px" }}
            color="danger"
            fill="clear"
            onClick={() => this.logout()}
          >
            Logout
            <ion-icon slot="end" name="power" />
          </ion-button>
        )}
        {this.session?.uid ? (
          <div class="dashboard ion-padding">
            <h2>Welcome to the Club</h2>
            <p style={{ color: "#ffffff" }}>
              Well done, you are in the roster, consider joining your bretheren
              on our Discord, while we wait for our orders.
            </p>
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
              options={[
                {
                  label: "Software Engineering (Coding / Programming)",
                  value: "software",
                },
                {
                  label: "Graphic Engineering (Design / UI / UX)",
                  value: "design",
                },
              ]}
            />
            {this.user?.isEnrolled && !this.user?.isPayable && (
              <div>
                <h2>Setup your Payment Method</h2>
                <p>
                  Get paid to complete missions by creating a Stripe account.
                </p>
                <ion-button
                  color="success"
                  href={`https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${env(
                    "stripe.clientId"
                  )}&scope=read_write`}
                >
                  <ion-icon slot="start" name="logo-usd" />
                  Connect to Stripe
                </ion-button>
              </div>
            )}
            {this.user?.isPayable && (
              <div>
                <h1>Setup Complete</h1>
                <p>You are setup to be paid for Missions!</p>
              </div>
            )}
          </div>
        ) : (
          <div class="landing ion-padding">
            <ion-card>
              <ion-card-header>
                <ion-card-title>
                  Welcome... We've Been Wating...
                  <span class="terminal-buttons" />
                </ion-card-title>
              </ion-card-header>
              <ion-card-content class="ion-padding">
                <ion-grid>
                  <ion-row>
                    <ion-col>
                      <div id="join-us" class="ion-padding">
                        <h1>
                          <ion-text color="success">
                            Enter your Email<b>❚</b>
                          </ion-text>
                        </h1>
                        <p>
                          Engineering is our tool, our weapon, to take control
                          of our lives and bring about, The Reboot...☠
                        </p>
                        {this.emailSent ? (
                          <div>
                            <ion-icon
                              color="primary"
                              name="mail-unread"
                              style={{
                                height: "150px",
                                width: "150px",
                                display: "block",
                                margin: "20px auto",
                              }}
                            />
                            <h2 class="ion-text-center ion-no-padding">
                              Email Sent!
                            </h2>
                            <ion-text
                              color="medium"
                              class="ion-text-center"
                              style={{ display: "block" }}
                            >
                              Check your spam if you don't see it after a few.
                            </ion-text>
                          </div>
                        ) : (
                          <fireenjin-form
                            name="signup"
                            resetButton={"Reset"}
                            resetButtonColor="light"
                            submitButton="Send"
                            submitButtonColor="success"
                          >
                            <p style={{ color: "#ffffff" }}>
                              Enter & confirm your email below to join us.
                            </p>
                            <fireenjin-input
                              type="email"
                              name="email"
                              placeholder="Email Address"
                              required
                            />
                          </fireenjin-form>
                        )}
                      </div>
                    </ion-col>
                    <ion-col>
                      <p
                        class="ion-padding"
                        style={{
                          border: "1px dashed rgba(255, 255, 255, 0.3)",
                          borderRadius: "4px",
                        }}
                      >
                        I see all this potential, and I see it squandered. God
                        damn it, an entire generation pumping gas, waiting
                        tables - slaves with white collars. Advertising has us
                        chasing cars and clothes, working jobs we hate so we can
                        buy shit we don't need. We're the middle children of
                        history, man. No purpose or place. We have no Great War.
                        No Great Depression. Our great war is a spiritual war...
                        Our great depression is our lives. We've all been raised
                        on television to believe that one day we'd all be
                        millionaires, and movie gods, and rock stars, but we
                        won't. We're slowly learning that fact. And we're very,
                        very pissed off. <br />
                        <ion-text color="dark" class="ion-padding">
                          -Tlyer Durden
                        </ion-text>
                      </p>
                    </ion-col>
                  </ion-row>
                </ion-grid>
              </ion-card-content>
            </ion-card>
          </div>
        )}
      </article>
    );
  }
}
