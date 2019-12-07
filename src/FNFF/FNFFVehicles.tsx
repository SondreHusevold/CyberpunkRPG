import React, { Component } from 'react';
import pictureAnimation from '../StyleModules/Pictures.module.css';
import styles from './FNFFIntroduction.module.css';

class FNFFVehicles extends Component<{}> {

	public render() {
		return (
			<div className={styles.FNFFIntroduction}>
				<div className={styles.FNFFIntroductionText}>
					<h1>Vehicles:</h1>
                    <p>Vehicles involve two elements. The first is control of the vehicle; the second is attacks and damage.</p>
                    <p>Although a more realistic system is included in Solo of Fortune, this simple system will work for most cases.</p>
                    <p>To make a control roll you must roll a combination of your</p>
                    <div className={styles.ExampleBorder}>
                        <span>REF + (DRIVING OR PILOTING) SKILL + 1D10 + MODIFIERS</span>
                    </div>
                    <p>equal to or greater than a specific control number. The control number is determined by the difficulty of the maneuver you want to perform.</p>
                    <ul>
                        <li>Simple (swerve, take off or land, hover, rotate) : 15 </li>
                        <li>Difficult (tight turn, control a skid, recover from a stall, emergency stop, pull out of dive, reverse or pull away): 20 </li>
                        <li>Very Difficult (bootlegger turn, regain control from spin): 25</li>
                    </ul>
                    <p>When making your roll you must add any and all modifiers that apply to the situation to your final Control Roll.</p>
                    <p>There are modifiers for both vehicles and speed of travel located at page 113 in the rulebook.</p>
                    <p>On a failed roll, roll 1D6 and consult the Control Loss Table (page 113 in the rulebook)</p>
                    <h2>Vehicle Combat:</h2>
                    <p>Vehicle combat is performed exactly as with other combat, applying all appropriate modifiers, and using the Weapon Skills appropriate for the type of weapon.</p>
                    <p>Shots are not targeted and there are no location for damage.</p>
                    <p>Vehicles are usually armed with lasers, missiles, machine guns and railguns, and may receive bonuses for turret mounted weapons.</p>
                    <h2>Vehicle Damage:</h2>
                    <p>Vehicles have both SP values and Structural Damage Points (SDP). If armored, the vehicle’s SP is subtracted from the damage taken, with the remaining damage subtracted from the vehicle’s SDP.</p>
                    <p>When a vehicle is reduced to 0 SDP, it is considered to be destroyed or inoperable. In this simplified system, there are no locations fordamage—all points are subtracted directly from the vehicle's SDP.</p>
                    <h2>Crashing and Ramming:</h2>
                    <p>Crash and ram damage is determined by dividing the speed of the moving vehicle by 20 (round down), to determine the number of six-sided dice thrown.</p>
                    <p>This value is multiplied by a modifier based on the mass of the object collided with, listed in the Weight Modifier Table (also on page 113).</p>
                    <p>The vehicle takes this many dice in damage to its SDP, while all occupants take one-half of this die amount.</p>
				</div>
				<div className={styles.FNFFIntroductionPicture}>
					<img className={pictureAnimation.InterlacedPicture} alt="Friday Night Firefight" src="/assets/Visuals/Vehicles.png"/>
				</div>
			</div>
		);
	}
}

export default FNFFVehicles;
