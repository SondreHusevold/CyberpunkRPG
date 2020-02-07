import React, { Component } from 'react';
import styles from './NightCity.module.css';
import FadeInPicture from '../Common/FadeInPicture';
import animations from '../StyleModules/Animations.module.css';
import splitter from '../StyleModules/Splitter.module.css';

class NightCityStartingOut extends Component<{}> {

	public render() {
		return (
			<div className={animations.FadeInFast + " " + styles.NightCityIntroduction}>
				<div className={styles.NightCityIntroductionText}>
					<h1>The First Session:</h1>
					<FadeInPicture mobile="100% 15%" title="Let's get started." alt="Let's get started." src="/CyberpunkRPG/assets/Visuals/FirstSession.webp"/>
                    <p>Like when we've been learning other systems - We'll start off by having the first session dedicated to character creation, filling out character sheets and an introduction.</p>
                    <p>The intro will not be individual like in the World of Darkness games. This time, we'll do it as a team.</p>
                    <p>As you might have surmised, you're currently at Zetatech. A wetware and computer hardware and software design megacorporation.</p>
                    <p>They have wiped your memory. You cannot remember your past... For now.</p>
                    <h2>Think about the following:</h2>
                    <p>> Choose a class you want to play.</p>
                    <p>> Think about your character; Who are you, and why are you at Zetatech?</p>
                    <p>> What chain of events happened that ended with you being there, trapped inside wild simulations?</p>
                    <p>> Were you living in Night City? Somewhere else?</p>
                    <p>> How old are you? Are you 20, 30 or maybe you were cryofrozen and revived into the year of 2020?</p>
                    <p>There are so many ways you can do this. But the information above is something to keep in mind. </p>
                    <h2>Lifepath:</h2>
                    <p>We'll be doing details of your character through the Lifepath system (see Interlock System), however it should be <i>your</i> character. The Lifepath system is only a guide for fleshing out the backstory..</p>
                    <p>So if you have firm knowledge of your character, run with it and don't use everything the Lifepath system gives you.</p>
                    <p>Look at how the Lifepath system works and its options before fleshing out your character completely.</p>
                    <h2>Get in the mood</h2>
                    <p>How about immersing yourself in cyberpunk movies, games and books to get the feeling and/or inspiration going?</p>
                    <div className={splitter.TwoColumnSplit}>
                        <div>
                            <h4>Movies and series:</h4>
                            <ul>
                                <li>Blade Runner</li>
                                <li>Akira</li>
                                <li>Dredd (2012)</li>
                                <li>Ghost in the Shell</li>
                                <li>Altered Carbon</li>
                                <li>Total Recall</li>
                                <li>Serial Experiments Lain</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Books:</h4>
                            <ul>
                                <li>The Cyberpunk 2020 books!</li>
                                <li>Neuromancer</li>
                                <li>Count Zero</li>
                                <li>Mona Lisa Overdrive</li>
                                <li>Burning Chrome</li>
                                <li>Altered Carbon</li>
                                <li>Akira</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Games:</h4>
                            <ul>
                                <li>Far Cry 3: Blood Dragon</li>
                                <li>Deus Ex</li>
                                <li>Ruiner</li>
                                <li>VA-11 HALL-A</li>
                                <li>Shadowrun</li>
                            </ul>
                        </div>
                        <div>
                            <p>Keep in mind most of these might be far more technologically advanced than Cyberpunk's setting.</p>
                            <p>Ghost in the Shell is a prime example of a world vastly more advanced than Cyberpunk 2020 and is often considered "post-cyberpunk".</p>
                        </div>
                    </div>

				</div>
				<div className={styles.NightCityIntroductionPicture}>
					<FadeInPicture title="Let's get started." alt="Let's get started." src="/CyberpunkRPG/assets/Visuals/FirstSession.webp"/>
				</div>
			</div>
		);
	}
}

export default NightCityStartingOut;
