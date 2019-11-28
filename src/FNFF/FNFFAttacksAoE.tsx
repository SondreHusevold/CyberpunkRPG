
import React, { Component } from 'react';
import styles from './FNFFAttacks.module.css';

class FNFFAttacksAoE extends Component<{}, {}> {
	public render() {
		return (
			<div className={styles.FNFFAttacks}>
				<h1>Area of Effect attacks:</h1>
				<p>Area Effect weapons are fired just like any other type of ranged weapon. However, they are capable of covering more than one target at a time with a cloud of pellets, flame, explosive force or gas. </p>
				<p>Area effect weapons include shotguns, grenades and explosives, flamethrowers, missiles and rockets, mines and rocket powered grenades (RPGs).</p>
				<p>Attacks are made as with other ranged weapons, with the center of the area effect falling on the designated target, and anything within the area of effect taking damage as well. If the target is missed, the true center of the attack must be determined. </p>
				<p>When calculating where agrenade or other Area weapon has hit, roll 1D10 to determine the directrion on the Grenade Table, then roll a second D10 to see how many meters away it hit.</p>
				<h2>Shotguns:</h2>
				<div className={styles.SplitIntoTwo}>
					<div>
						<p>Shotguns fire a cloud of small metal pellets called a “pattern”. The width of the pattern is based on the distance between the attacker and the defender. Any target in a straight path between attacker and intended target is also considered to be in the area of effect. </p>
						<p>Note: if something is between the path of the shotgun and its intended target, the intervening spaces behind that object are considered to be exempt from the effects of fire.</p>
						<p>Any target within the pattern will take damage based on the range (damage listed on the Weapons Table on pg. 51 in the rulebook is based on maximum damage).</p>
					</div>
					<div>
						<h3>Shotgun Table:</h3>
						<table>
								<tr>
									<th>Range</th>
									<th>Size of Pattern</th>
									<th>Damage</th>
								</tr>
								<tr>
									<td>Close,PB</td>
									<td>1 meter</td>
									<td>4D6</td>
								</tr>
								<tr>
									<td>Medium</td>
									<td>2 meters</td>
									<td>3D6</td>
								</tr>
								<tr>
									<td>Long</td>
									<td>3 meters</td>
									<td>2D6</td>
								</tr>
						</table>
					</div>
				</div>
				<p>Example: Ripperjack opens up his shotgun on two boosters at medium range (pattern width = 2m). He hits the first booster dead on. However, the second booster is within 1 meter of the first— the pattern overlaps him as well. Both take damage.</p>
				<p>Shotguns are a very effective weapon in situations where aiming isn’t critical. For instance, in six foot hallways, there would be no way for a target to escape taking wounds no matter how much his reflexes were boosted. However, shotguns are also limited to relatively short ranges and don’t do a lot of damage on the individual peliet level.</p>
				<h3>Autoshotguns:</h3>
				<p>One of the nastiest house to house weapons is the autoshotgun. In combat, you may make as many attacks as your weapon's rate of fire on Full auto. All shots must be within 1 meter of each other.</p>
				<p>Each attack has a -2 penalty for every additional shot past the first. However, when this meansyou can putfive two-meter clouds of lead all over an area, a -4 or -6 penalty is a small price to pay.</p>
				<p>Autoshotguns are slow, bulky and have lousy range, but they are hell on wheels when it comes to house to house, short range combat.</p>
				<p>Example: Ripperjack opens up with a CAWS, firing 5 shots. He takes a -8 penalty to his attack roll to do this. He targets a 5 meter hallway, spacing his shots in 1 meter intervals. The hallway becomes Hamburger Heaven.</p>
				<h3>The Armor-Piercing Effects of Shotgun Slugs:</h3>
				<p>These projectiles have normal AP ability vs. all armors.</p>
				<p>Damage that penetrates Hard armor is not halved. Damage that penetrates Soft armor is halved as normal. This represents the concussive results of mass and impact by finned/saboted slugs.</p>
				<ul>
					<li>10ga. slugs: 5D6+3</li>
					<li>12ga. slugs: 4D6+2</li>
					<li>20ga. slugs: 3D6+1</li>
				</ul>
				<h2>Grenades:</h2>
				<p>Grenades come in fragmentation, incendiary, stun, dazzle, sonic, concusslon and gas varieties. </p>
				<p>Each type hasits own area of effect, usually between 2 to 5 meters. Grenades and explosives can be detonated using timers, radio controls, tripwires or remote detonators. </p>
				<p>All grenade types are available in hand or rifle-propelled versions, and are described in the Area Effect Weapons and Grenade Table, pg. 89 in the rulebook.</p>
				<p>Grenades may be thrown up to 10x the character's Body Type in meters (-10m for every extra kg. past the initial 1), or launched to a range of 225 meters.</p>
				<p>Look at the rulebook for further information about the different grenade variations.</p>

				<h2>Other AoE weapons:</h2>
				<p>There are many more descriptions of weapons in the rulebook that are not written here. Mines, flamethrowers, explosives, rocket powered grenades, missiles and so on.</p>
				<p>Please look in the rulebook for further explanations.</p>
			</div>
		);
	}
}

export default FNFFAttacksAoE;