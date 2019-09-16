import React, { Component } from 'react';
import pictureAnimation from '../StyleModules/Pictures.module.css';
import styles from './Interlock.module.css';

class InterlockIntroduction extends Component<{}> {

	public render() {
		return (
			<div className={styles.InterlockIntroduction}>
				<div className={styles.InterlockIntroductionText}>
					<h1>Introduction:</h1>
					<p>The interlock system is a simple die + bonus system using a D10. Cyberpunk 2020 is using a polished version of Interlock named "Standard Interlock".</p> 
					<p>It is highly skilled-based where characters choose skills for them and advance those skills individually rather than choosing a character package to play.</p> 
					<p>Stats and skills are both rated on a scale of 0-10 with zero representing no ability/no training while 10 being the maximum ability possible for a human being.</p>
					<p>A typical skill roll will range from 12-20 for most tasks, thus a skill 10 plus stat 10 will succeed at virtually any task barring a critical mishap.</p>
					<p>Cyberpunk 2020's combat system is named Friday Night Firefight and is a modern weapons combat system for using futuristic and archaic firearms. </p>
					<p>It is designed to cover all major elements of weapons combat in an easy to use format, allowing realistic firefight action without resorting to a lot of tables and charts.</p>
				</div>
				<div className={styles.InterlockIntroductionPicture}>
					<img className={pictureAnimation.InterlacedPicture} alt="Interlock system" src="/assets/Visuals/InterlockSystem.png"/>
				</div>
			</div>
		);
	}
}

export default InterlockIntroduction;
