import React, { Component } from 'react';
import animations from '../StyleModules/Animations.module.css';
import styles from './TraumaTeam.module.css';
import FadeInPicture from '../Common/FadeInPicture';

class TTDeath extends Component<{}> {

	public render() {
		return (
			<div className={animations.FadeInFast + " " + styles.TTIntroduction}>
				<div className={styles.TTIntroductionText}>
					<h1>Death:</h1>
					<FadeInPicture mobile="100% 30%" title="" alt="Don't die please." src="/CyberpunkRPG/assets/Visuals/TraumaTeamDeath.webp"/>
                    <p>Whenever a character’s Wound State drops to MORTAL, he has a pretty good chance of dying. But when?</p>
                    <p>In Cyberpunk, each time you are at a MORTAL wound state, you must make a Death Save to avoid dying.</p>
                    <p>To make the Save, roll a 1D10 value lower than your character’s Body Type, subtracting the level of Mortality from your base chance to save.</p>
                    <p>Each turn, you must make another death save to see if the character makes it through another turn. On a successful roll, you make it; on a failed roll, you will die at the end of the turn in which the roll was made.</p>
                    <div className={styles.ExampleBorder}>
                        <p>For example, say Savage has a Body Type of 10 (Very Strong) and takes a Mortal 4 wound. He must roll lower than (10-4)=6 to stay alive.</p>
                        <p>The first turn he rolls a 5. Whew. The next turn, he rolls a 7 and expires. Immediately, his mates start fighting over who gets his boots.</p>
                    </div>
                    <p>Get the point? Sooner or later, you'll fail a roll and die. The only way out is stabilization. (see Death Saves under Friday Night Firefight)</p>
                    <p>But let’s say your ripperdoc had a Medical Tech Skill of 2... </p>
                    <p>We can do some pretty amazing things these days. We can grow skin, blood, organs, limbs and muscle tissue in collagen-saccharide tissue tanks. </p>
                    <p>Other parts, like toes, fingers, eyes and internal organs can also be purchased from the local Body Bank and grafted on with advanced micro surgery.</p>
                    <p>What we can’t do is regrow souls; Once you're dead, you’re dead.</p>
                    <p>Let’s amend that: once you're DEAD 10, you're dead. </p>
                    <p>Because twenty-first century medicine is so good at reviving the clinically dead, TraumaTeam™ Inc. (the world’s largest paramedical service, with offices worldwide), has established ten levels of death, each succeeding level a measure of how difficult it will be to revive the patient.</p>
                    <p>This measuring system is called Death State, and for every minute (six turns) that you are clinically dead, your death state increases by two levels. </p>
                    <h3>This is of critical importance to the dead Cyberpunk character:</h3>
                    <p>When the Trauma Team arrives, a roll must be made to determine if the patient can be revived.</p>
                    <div className={styles.ExampleBorder}>
                        <p>This roll, on 1D10, must be higher than the current Death State number, or the patient is a candidate for the Body Bank.</p>
                    </div>
                    <p>On a successful roll, the patient is stabilized at his last Wound State and the process of healing can begin.</p>
				</div>
				<div className={styles.TTIntroductionPicture}>
					<FadeInPicture title="Don't die please..." alt="Don't die please." src="/CyberpunkRPG/assets/Visuals/TraumaTeamDeath.webp"/>
				</div>
			</div>
		);
	}
}

export default TTDeath;
