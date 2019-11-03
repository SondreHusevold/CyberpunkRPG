
import React, { Component } from 'react';
import styles from './FNFFAttacks.module.css';

class FNFFAttacksRanged extends Component<{}, {}> {
	public render() {
		return (
			<div>
				<h1>Ranged attacks:</h1>
				<p>Ranged weapons are anything that is shot or thrown over a distance at the target.</p>
				<p>To make a ranged weapon attack (guns, bows, thrown objects, etc.) you must roll a combination of your:</p>
				<div className={styles.ExampleBorder}>
					<span>REF STAT + WEAPON SKILL + 1D10</span>
				</div>
				<p>equal to or greater than a specific hit number. The hit number is determined by the range between you and your target.</p>
				<div className={styles.SplitIntoTwo}>
					<div>
						<h2>Range definitions:</h2>
						<ul className={styles.liPadding}>
							<li><b>Point blank:</b> The weapon is very close to or in actual physical contact with the target. It will almost always hit, doing maximum damage.</li>
							<li><b>Close:</b> The weapon is attacking at one quarter of the listed range.</li>
							<li><b>Medium:</b> The weapon is attacking at one half of the listed range for its type.</li>
							<li><b>Long:</b>  The weapon is attacking at the listed range for its type.</li>
							<li><b>Extreme:</b> The weapon is attacking at twice the listed range for its type.</li>
						</ul>
					</div>

					<div>
						<div className={styles.ExampleBorder}>
							<h3>Range Hit Numbers</h3>
							<p>Point blank .................................. 10</p>
							<p>Close ................................................ 15</p>
							<p>Medium ......................................... 20</p>
							<p>Long ................................................ 25</p>
							<p>Extreme ....................................... 30</p>
						</div>
					</div>
				</div>

				<h2>Modifiers:</h2>
				<p>When making your roll, you must add any and all modifiers that apply to the combat situation to your final Attack Roll. There are modifiers for Target, Aiming, Weapon Type, Type of Firing, Position and Movement, all listed on pg. 99.</p>

				<h2>Aiming:</h2>
				<p>One way to improve your chance to hit is to aim.</p>
				<p>Each turn of aiming adds +1 to your Attack, up to three rounds. Aiming assumes steady position, no movement, and a clear chance to track your target.</p>

				<h2>Critical success:</h2>
				<p>On a natural roll of 10, you have had a critical success. Roll an additional 1D10 and add it to your original roll.</p>

				<h2>Fumbles:</h2>
				<p>On a natural die roll of 1, you have fumbled. You must roll an additional 1D10 and check the result against the Fumble Table to see what happens. </p>
				<p>Fumbles can encompass a wide variety of effects. Most weapon fumbles include jamming or misfires.</p>

				<div className={styles.SplitIntoTwo}>
					<div>
						<h2>Reliability:</h2>
						<p>Automatic weapons have the highest chance of fumbling, and will jam based on the Reliability of the weapon:</p>
						<p>When a fumbile is rolled while using an automatic weapon, ignore the table and roll a value on 1D10 higher 
							than the Reliability value for the weapon.
						</p>
						<p>In total it takes 1D6 turns to unjam the weapon.</p>
					</div>
					<div>
						<div className={styles.ExampleBorder}>
							<h3>Reliability table:</h3>
							<table className={styles.ATable}>
								<tr>
									<th>Weapon:</th>
									<th>Jams:</th>
								</tr>
								<td>
									<tr>Very Reliable</tr>
									<tr>Standard</tr>
									<tr>Unreliable</tr>
								</td>
								<td>
	
									<tr>3 or lower.</tr>
									<tr>5 or lower.</tr>
									<tr>8 or lower.</tr>
								</td>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FNFFAttacksRanged;