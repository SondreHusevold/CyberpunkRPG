import React, { Component } from 'react';

class FNFFAttacksLaser extends Component<{}, {}> {
	public render() {
		return (
			<div>
				<h1>Laser attacks:</h1>
				<p>Beam Weapons include lasers and microwave weapons.</p>
				<p>Powerful beam weapons are extremely rare in the Cyberpunk universe (1 in 10 chance of availability, and even then only from major Corporations and/or governments).</p>
				<h2>Lasers</h2>
				<p>Lasers have a rechargeable powerpack holding a total of 10 six sided dice of damage.</p>
				<p>You can use as little as 1D6 or as much as 5D6 in a single shot, until you have used all 10 dice. Lasers recharge from wall current at a rate of 1D6 per hour.</p>
				<p>Example: Ripperjack has recently captured a laser from an Arasaka guard. He has 10D6 to work with; he dials the power grudge up to 5D6 and fires. At this rate, he'll only have one more shot before it's recharge time.</p>
				<h2>Microwavers:</h2>
				<p>Microwavers are fired like any other ranged weapon, delivering 1D6 in burn damage.</p>
				<p>In addition, any target within 1 meter of the path of the beam must roll 1D6 on the microwaver side effects table to determine if there are electrical side effects on exposed cyberwear. Shielded cyberwear s not effected by electrical side effects.</p>
				<p>Like lasers, microwavers recharge from a wall socket, taking one hour to reach a usable charge.</p>
				<h3>Microwave side effects:</h3>
				<ul>
					<li>Cyberoptics short for 1D6 turns </li>
					<li>Neural pulse! if character has inter face plugs, reflex boosts or other hardwiring, REF stat reduced by 1D6/2 until repaired. </li>
					<li>Cyberaudio shorts for 1D6 turns </li>
					<li>Cyberlimb malfunction: Lose all use of cyberlimb for 1D10 turns. Roll 1D6 for limb, re-rolling if no cyberlimb limb is present: 
						<p>1-2 Right Arm</p>
						<p>3 Left Leg</p>
						<p>4 Right Leg</p>
						<p>5-6 Left Arm</p>
					</li>
					<li>Total Neural breakdown! Character reduced to twitching, epileptic fit for 1D6/3 turns.</li>
				</ul>
			</div>
		);
	}
}

export default FNFFAttacksLaser;