import React, { Component } from 'react';
import styles from './NightCity.module.css';
import animations from '../StyleModules/Animations.module.css';


const FadeInPicture = React.lazy(() => import('../Common/FadeInPicture'));

class NightCityTheEdge extends Component<{}> {

	public render() {
		return (
			<div className={animations.FadeInFast + " " + styles.NightCityLivingOnTheEdge}>
                <div className={styles.NightCityOnTheEdgeSplitter}>
                    <h1>Living on the Edge:</h1>
                    <FadeInPicture mobile="100% 15%" alt="Living on the Edge" title="Living on the Edge" src="/CyberpunkRPG/assets/Visuals/OnTheEdgeSide.webp"/>
                    <p>To achieve the essence of the 2000's, you need to master three concepts.</p>
                    <div className={styles.NightCityEdgeRules}>
                        <div className={styles.ExampleBorder}>
                            <h2>1) Style over Substance:</h2>
                            <p>It doesn’t matter how well you do something, as long as you look good doing it.</p>
                            <p>If you're going to blow it, make sure you look like you planned it that way.</p>
                            <p>Normally, clothes and looks don’t matter in an adventure - in this world, having a leather armor jacket and mirrorshades is a serious consideration.</p>
                            
                            <h2>2) Attitude is Everything</h2>
                            <p>Think dangerous; be dangerous. Think weak; be weak. Remember, everyone in the 2000's is carrying lots of lethal hardware and high-tech enhancements.</p>
                            <p>{"They won’t be impressed by your new H&K smartgun unless you swagger into the club looking like you know how to use it - and are just itching for an excuse."}</p>
                            <p>Never walk into a room when you can stride in. Never look at someone unless you can make it your best "killer" look. Use your best "I'm bad and you aren't.” smile. Don't sit around the flat or cube waiting for the next job.</p>
                            <p>Get on out and hit the clubs and hangouts.</p>
                            <p>Make sure you're where the party starts.</p>

                            <h2>3) Live on the Edge</h2>
                            <p>The Edge is that nebulous zone where risk takers and highriders go. On the Edge, you'll risk your cash, your rep, even your life on something as vague as a principle or a big score. </p>
                            <p>As a cyberpunk, you want to be the action, start the rebellion, light the fire. Join great causes and fight for big issues. Never drive slow when you can drive fast. Throw yourself up against danger and take it head on. Never play it too safe.</p>
                            <p>Stay committed to the Edge.</p>
                        </div>
                        <div className={styles.NightCityIntroductionPicture}>
                            <FadeInPicture title="Living on the Edge"  alt="Living on the Edge" src="/CyberpunkRPG/assets/Visuals/OnTheEdgeSide.webp"/>
                        </div>
                    </div>
				</div>
				<div className={styles.NightCityIntroductionText}>
                    <h1>Okay, so you're ready?</h1>

                    <p>As a cyberpunk, you grab technology by the throat and hang on. You're not afraid to check out the newest in "enhancements", cybertech and bio-engineering.</p>
                    <p>You got interface plugs in your wrists, weapon in your arms, lasers in your eyes, biochip programs in your brain.</p>
                    <p>You become the car you drive, the gyro you fly, the guns you shoot.</p>
                    <p>You dive headfirst into the Net, using your mind to hurtle at lightspeed all over a vast network of Data Fortresses and Artifical Intelligences.</p>
                    <p>With cyborged fingers you pick computer locks; with enhanced senses, you see into the Future.</p>
                    { /* Not happy with this. Shouldn't be an extra picture. */ }
                    <FadeInPicture mobile="100% 0%" alt="Living on the Edge" title="Let's go." src="/CyberpunkRPG/assets/Visuals/OnTheEdge.webp" />
                    <div className={styles.NightCityOnTheEdgePicture}>
                        <FadeInPicture alt="Living on the Edge" title="Let's go." src="/CyberpunkRPG/assets/Visuals/OnTheEdge.webp" />
                    </div>
                    <p>Cyberpunk is also an attitude.</p>
                    <p>You wear the most in clothes, know the right people and follow the right crowds.</p>
                    <p>You plan your crimes in the most select clubs and bars. Your enemies are Corporate armies, cyborg bike gangs, power-armored assassins and computer-wired Netheads.</p>
                    <p>Your weapons are nerve, streetsmarts, bravado and the Minami 10 smartgun on your hip.</p>
                    <p>Are you ready now? Of course you are.</p>
                    <h2><u>Now</u> you're Cyberpunk.</h2>
				</div>
				
			</div>
		);
	}
}

export default NightCityTheEdge;
