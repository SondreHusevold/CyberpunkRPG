import React, { Component } from 'react';
import animations from '../StyleModules/Animations.module.css';
import styles from './FNFFIntroduction.module.css';
import FadeInPicture from '../Common/FadeInPicture';

class FNFFDamage extends Component<{}> {

	public render() {
		return (
			<div className={animations.FadeInFast + " " + styles.FNFFIntroduction}>
				<div className={styles.FNFFIntroductionText}>
					<h1>Damage:</h1>
                    <p>Damage in combat is determined by rolling groups of six-sided dice.</p> 
                    <p>If a rule says, “roll 2D6", for example, you would roll two six sided dice, total the results, and apply the total to the target you were attacking.</p>
                    <p>If the rule said “roll 2D6+1", you would roll as above, then add 1 to the total.</p> 
                    <h1>Hit Location</h1>
                    <img className={styles.FNFFHitLocationMobile} alt="Friday Night Firefight" src="../../assets/Visuals/HitLocations.webp"/>
                    <p>The first step in applying damage Is to figure out where to apply it.</p>
                    <p>Most combat attacks are just barely aimed; you're looking for an opening, your opponent slips up, and you take it.</p>
                    <p>This means that unless you attempt to aim your shot at a specific location (and take the -4 penalty for this), you will have to determine where you hit on a random basis.</p>
                    <p>The Location section of your Hardcopy Form is designed for this; it lists all body areas with a value from 1 to 10 written underneath.</p>
                    <p>When your character is hit, roll 1D10 and compare the chart number to the roll to determine where he has been hit.</p>
                    <div className={styles.ExampleBorder}>
                        <p>Use some common sense with this rule; for example, if a character is standing behind a low wall, a roll of 7-8 (R.Leg) is pretty silly.</p>
                        <p>Ignore it and re-roll.</p>
                    </div>
				</div>
				<div className={styles.FNFFIntroductionPicture}>
					<FadeInPicture title="Hit locations" alt="Friday Night Firefight" src="../../assets/Visuals/HitLocations.webp"/>
				</div>
			</div>
		);
	}
}

export default FNFFDamage;
