import React, { Component } from 'react';
import pictureAnimation from '../StyleModules/Pictures.module.css';
import styles from './NightCity.module.css';

class NightCityStartingOut extends Component<{}> {

	public render() {
		return (
			<div className={styles.NightCityIntroduction}>
				<div className={styles.NightCityIntroductionText}>
					<h1>The First Session:</h1>
					<img className={styles.FirstSessionPictureMobile + " " + pictureAnimation.PictureMobileOnly} alt="Let's get started." src="assets/Visuals/FirstSession.jpg"/>
                    <p>Like when we've been learning other systems - We'll start off by having the first session dedicated to character creation, filling out character sheets and an introduction.</p>
                    <p>The intro will not be individual like in the World of Darkness games. This time, we'll do it as a team.</p>
                    <p>As you might have surmised, you're currently at Zetatech. A wetware and computer hardware and software design megacorporation.</p>
                    <p>They have wiped your memory. You cannot remember your past.</p>
                    <h2>Think about the following:</h2>
                    <p>> Choose a class you want to play.</p>
                    <p>> Think about your character; Who are you, and why are you at Zetatech?</p>
                    <p>> What chain of events happened that ended with you being there, trapped inside wild simulations?</p>
                    <p>> Were you living in Night City? Somewhere else?</p>
                    <p>> How old are you? Are you 20, 30 or maybe you were cryofrozen and revived into the year of 2020?</p>
                    <p>There are so many ways you can do this. But the information above is something to keep in mind. </p>
                    <h2>Lifepath:</h2>
                    <p>We'll be doing details of your character through the Lifepath system (see Interlock System), however it should be <i>your</i> character, the Lifepath system is only a guide for fleshing out the backstory.</p>
                    <p>So if you have firm knowledge of your character, run with it and don't use everything the Lifepath system spits out.</p>
                    <p>If you have a loose knowledge of your character, maybe it'll help you.</p>
                    <p>I highly recommend you look at how the Lifepath system works and its options before fleshing out your character completely.</p>

				</div>
				<div className={styles.NightCityIntroductionPicture}>
					<img className={pictureAnimation.InterlacedPicture} alt="Let's get started." src="assets/Visuals/FirstSession.jpg"/>
				</div>
			</div>
		);
	}
}

export default NightCityStartingOut;
