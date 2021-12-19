import { Component, h } from '@stencil/core';


@Component({
    tag: 'page-home',
    styleUrl: 'home.css'
})
export class PageHome {

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
                <article class="ion-padding">
                    <h2>👊Madness Club</h2>
                    <p>I see all this potential, and I see it squandered. God damn it, an entire generation pumping gas, waiting tables - slaves with white collars. Advertising has us chasing cars and clothes, working jobs we hate so we can buy shit we don't need. We're the middle children of history, man. No purpose or place. We have no Great War. No Great Depression. Our great war is a spiritual war... Our great depression is our lives. We've all been raised on television to believe that one day we'd all be millionaires, and movie gods, and rock stars, but we won't. We're slowly learning that fact. And we're very, very pissed off. <br /><ion-text color="medium" class="ion-padding">-Tlyer Durden</ion-text></p>
                    <p>Engineering is our tool, our weapon, to take control of our lives and bring about, The Change....</p>
                    <h1>Join the Madness...</h1>
                    <fireenjin-form name="signup">
                        <ion-grid>
                            <ion-row>
                                <ion-col>
                                    <fireenjin-input name="email" placeholder="Email Address" />
                                </ion-col>
                                <ion-col>
                                    <fireenjin-select interfaceOptions={{ header: "Interested In" }} name="interests" multiple placeholder="Interests" options={[{
                                        label: "Software Engineering (Coding / Programming)",
                                        value: "software"
                                    },
                                    {
                                        label: "Graphic Engineering (Design / UI / UX)",
                                        value: "design"
                                    }]} />
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                    </fireenjin-form>
                </article>
            </div >
        );
    }
}