import React, { Component } from 'react';
import styles from './FNFFAttacks.module.css';

class FNFFAttacksMelee extends Component<{}, {}> {
	public render() {
		return (
			<div>
				<h1>Melee attacks:</h1>
                <p>Melee attacks include clubs, knives, swords, axes, chainsaws, sledgehammers, monokatanas and monoknives, monomolecular chains, cyberbeasts, battlegloves, rippers, scratchers, martial arts weapons, hand to hand attacks and brawling.</p>
                <p>Melee attacks differ from ranged attacks in that you are opposing a person, instead of a target. To make a melee attack, the formula is:</p>
				<div className={styles.ExampleBorder}>
                    <span>ATTACKER REF + SKILL + 1D10 Vs DEFENDER'S REF + SKILL (referee decision) + 1D10</span>
                </div>
                <h2>Dodging:</h2>
                <p>Defenders can try to dodge melee attacks by announcing their intention to dodge at the start of the turn.</p>
                <p>This will impose a -2 attack penalty to any attacks made against themin that turn; however, any other actions the defender makes will have a corresponding -3 penalty for each successive action.</p>
				<div className={styles.ExampleBorder}>
                    <span>DODGE = -2 TO ATTACKER ROLL, -3 TO DEFENDER'S OTHER ACTIONS.</span>
                </div>
                <h2>Parrying:</h2>
                <p>Defenders may also elect to parry melee attacks by announcing their intention to parry at the start of the turn. Any attacks made during the turn must expend their damage against the parrying object first.</p>
                <p>Swords and other bladed weapons can be used to parry without taking damage, but must make a save ( 9 or lower on 1D10 for normal weapons) to avoid breaking.</p>
                <p>Any other actions the defender makes will have a corresponding -3 penalty foreach successive action.</p>
                <div className={styles.ExampleBorder}>
                    <span>PARRY = STOPS THE ATTACK AT -3 TO DEFENDER'S OTHER ACTIONS.</span>
                </div>
                <h2>Melee Damage:</h2>
                <div className={styles.SplitIntoTwo}>
                    <div>
                        <p>When making melee attacks with weapons, the damage is listed as part of the weapons description. </p>
                        <p>When making a melee attack, you must also add a damage modifier based on your character’s body type to any damage.</p>
                        <h2>Monoknives, Monokatanas and slice & dice</h2>
                        <p>These do double damage on a natural attack roll of 10. </p>
                        <p>These weapons will always break on a fumble (a natural 1), and require a special roll to determine if they shatter when used to parry (4 or less on 1D10).</p>
                        <p>Unless otherwise notedin the weapon’sdescription, all mono-edge weapons are at 1/3xSP vs. soft armors, 2/3xSP vs. hard armors.</p>
                        <h2>Cyberbeasts:</h2>
                        <p>"Cyberbeast" is the popular term used to describe any cybernetically controlled weapon thatis stored in the body and yet has the capacity toattack onits own.</p>
                        <p>Cyberbeasts may make one attack per turn. They have a total attack skill of 10+1D10; in all other aspects, they attack as characters would.</p>
                    </div>
                    <div className={styles.ExampleBorder}>
                        <h3>Melee Damage Modifiers:</h3>
                        <table>
                            <tr>
                                <th>Strength</th>
                                <th>+ To Damage</th>
                            </tr>
                            <tr>
                                <td>Very Weak</td>
                                <td>-2</td>
                            </tr>
                            <tr>
                                <td>Weak</td>
                                <td>-1</td>
                            </tr>
                            <tr>
                                <td>Average</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Strong</td>
                                <td>+1</td>
                            </tr>
                            <tr>
                                <td>Very Strong</td>
                                <td>+2</td>
                            </tr>
                            <tr>
                                <td>Body Type 11-12</td>
                                <td>+4</td>
                            </tr>
                            <tr>
                                <td>Body Type 13-14</td>
                                <td>+6</td>
                            </tr>
                            <tr>
                                <td>Body Type 15+</td>
                                <td>+8</td>
                            </tr>
                        </table>
                    </div>
                </div>
                { /* Continuation of Cyberbeast for text break. */ }
                <p>The most common type of cyberbeast is the cybersnake, which cause 1D6 in damage per attack.</p>

			</div>
		);
	}
}

export default FNFFAttacksMelee;