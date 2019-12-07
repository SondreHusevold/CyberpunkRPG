import React, { Component } from 'react';
import pictureAnimation from '../StyleModules/Pictures.module.css';
import styles from './Interlock.module.css';

class InterlockDice extends Component<{}, {}> {

	public render() {
		return (
			<div className={styles.InterlockIntroduction}>
				<div className={styles.InterlockIntroductionText}>
					<h1>Dice:</h1>
                    <p>All systems in Cyberpunk use two types of dice; the common, garden variety six sided die (found in most popular games and in Las Vegas), and the more esoteric ten sided die (used excluslvely by the japanese Imperial Navy and in many roleplaying games).</p>
                    <p>D6 is primarily used for damage, while the D10 is used for everything else.</p>
                    <p>There are a number of ways in which dice can be used such as: </p>
					<div style={{ border: "1px solid red", padding: "30px" }}>
						<p><li>Rolling a group of dice together and adding the results (roll 3D6 would mean roll 3 six sided dice to get a value from 3 to 18).</li></p>
						<p><li>Rolling one or more dice together and adding another value called a modifier to get a final value, expressed as 1D6+1, or 2D10 -2</li></p>
						<p><li>Rolling two ten sided dice together, designating one to mark the tens place and the other to mark the ones place (rolling a percentage).</li></p>
					</div>
					<p>In Cyberpunk, if you are asked to divide something and you come up with a decimal value, you will automatically round the result down to the nearest whole number (such as 2.65352 becoming 2).</p>
					<p>If a modified value (such as 1D6-4) comes out equal to, or below zero, It is automatically equal to 1 unless otherwise specified.</p>
				</div>
				<div className={styles.InterlockIntroductionPicture}>
					<img className={pictureAnimation.InterlacedPicture} alt="D6 and D10" src="assets/Visuals/D10.png"/>
				</div>
			</div>
		);
	}
}

export default InterlockDice;
