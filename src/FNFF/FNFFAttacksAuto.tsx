
import React, { Component } from 'react';
import styles from './FNFFAttacks.module.css';

class FNFFAttacksAuto extends Component<{}, {}> {
	public render() {
		return (
			<div>
				<h1>Automatic Weapon attacks:</h1>
				<p>There are three ways to use automatic weapons.</p>
				<ul>
					<li>The three round burst is used to put multiple shots on a single target at any range.</li>
					<li>Full Auto is used to deliver a lot of builets at close range to one or more targets.</li>
					<li> Suppressive fire is used to force an opponent to keep his head down or risk taking a slug.</li>
				</ul>
				<p>Each form has its own advantages and disadvantages in combat, and the smart street warrior knows when to use the right technique for the right job.</p>
				<h2>Three round burst:</h2>
				<p>The three round burst is a setting used on most automatic weapons to conserve ammunition and improve accuracy.</p>
				<p>The three round burst gives you an automatic +3 to hit advantage at certain ranges. The attack is made as one action. If successful, roll 1D6/2 to see how many rounds actually hit the target. This technique may only be used against single targets.</p>
				<div className={styles.ExampleBorder}>
					<span>3 ROUND BURST = +3 HIT, CLOSE / MEDIUM ONLY!</span>
				</div>

				<h2>Full auto:</h2>
				<div className={styles.SplitIntoTwo}>
					<div>
						<p>This attack is best used to cover a wide range of targets or to make sure a single target is dead, dead, dead.</p>
						<p>A weapon on full auto is a bucking bronco; hard to hold on a target more than a few meters away.</p>
						<p>Using a scope or taking aim is also impossible. Therefore, range is critical in the full auto technique.</p>
						<p>The full auto option is based on the rate of fire (ROF) of the weapon. If attacking more than one target, you must divide the ROF of the weapon by the total number of targets (round down), then roll for each target individually.</p>
					</div>
					<div className={styles.ExampleBorder + " " + styles.OverrideMaxContent}>
						<h3>Full auto rules:</h3>
						<p>At close range:</p>
						<p>For every 10 rounds fired at Close range, add 1 to your Attack Total.</p>
						<br/>
						<p>At Medium, Long and Extreme Ranges:</p>
						<p>For every 10 rounds fired at Medium, Long and Extreme ranges, subtract 1 from your Attack Total.</p>
					</div>
				</div>
				<p>For every point of success over the required to Hit roll, one round hits the target, up to the maximum ROF for the weapon.</p>
				<div className={styles.ExampleBorder}>
					<span>NUMBER OF HITS = # POINTS > THAN TO HIT NUMBER</span>
				</div>

				<h2>Suppressive fire:</h2>
				<p>Suppressive fire is used to cover an area (called a fire zone) with bullets, making the area hazardous to pass through. </p>
				<p>All targets entering or crossing the fire zone during this attack must make a “save” against taking a bullet by rolling their 
					Athletics Skill + REF + 1D10 and beating a save number. A failed save means the target takes 1D6 rounds, each randomly focated.
				</p>
				<p>This save number is determined by dividing the total number of bullets fired by the width of the fire zone.</p>
				<p>Example: 64 rounds into a 2 meter area would require a save of 32 or higher. 64 rounds into a 5 meter area would require a save of 12 or greater.</p>
				<div className={styles.ExampleBorder}>
					<span>SAVE = NUMBER OF ROUNDS DIVIDED BY THE WIDTH OF THE FIRE ZONE IN METERS</span>
				</div>
				<p>You may overlap the fire zones of more than one weapon, dividing the total number of shots to determine the save number.</p>
				<p>For example, two Uzis with an ROF of 32 would place 64 bullets into the fire zone.</p>
				<p>Two rules are immediately apparent with suppressive fire. First, it's only useful when you can fire a LOT of rounds into a small space. This means teams should coordinate their actions and fire at the same time, placing the maximum number of rounds into thefire zone.</p>
				<p>Also, the fire zone should be a tight as possible (the minimum width of a fire zone is two meters).</p>
			</div>
		);
	}
}

export default FNFFAttacksAuto;