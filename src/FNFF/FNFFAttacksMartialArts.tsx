import React, { Component } from 'react';
import animations from '../StyleModules/Animations.module.css';
import styles from './FNFFAttacks.module.css';

class FNFFAttacksMartialArts extends Component<{}, {}> {
	public render() {
		return (
			<div className={animations.FadeInFast + " " + styles.FNFFAttacks}>
				<h1>Martial Arts/Brawling attacks:</h1>
				<p>Brawling and Martial Arts attacks are different from other melee attacks in that an attack can be made in a number of ways.</p>
				<p>You could, as an attack, use:</p>
				<ul>
					<li>Strike: Cause 1D6/2 + Damage Modifier. </li>
					<li>Kick: Cause 1D6 + Damage Modifier. </li>
					<li>Block/Parry: Stop or absorb damage. </li>
					<li>Dodge: -2 to Attacker’s hit roll. </li>
					<li>Disarm: On successful roll, knock or remove weapon from opponent’s hand. </li>
					<li>Throw: Requires a Grapple first. Opponent isknocked toground, taking 1D6 + Damage Modifier, plus making a stun roll at -2. </li>
					<li>Hold: A painful joint or body hold. You must Grapple your opponent first. Foe is immobilized until an escape is made. </li>
					<li>Escape: On successful roll, you are free of the hold and may move. </li>
					<li>Choke: Requires hold or grapple as the previous move. Opponent takes 1D6 damage per turn. </li>
					<li>Sweep/Trip: Knock opponentto ground. He is -2 to next his attack; you gain +2 to your next attack. </li>
					<li>Grapple: A grabbing or holding move, prerequisite to applying a throw, choke or hold as the next action.</li>
				</ul>
				<h2>Martial Arts:</h2>
				<p>Martial Arts are traditional forms of melee combat that have been developed to be deadlier than regular brawling. All martial arts techniques have key attacks— attacks which reflect the particular strengths of the technique. </p>
				<p>When a key attack is used, such as a karate kick, the character gains an +2 to +4 attack bonus (depending on the style of martial art). 
					For example, Karate would have the following moves:
				</p>
				<ul>
					<li>Strike: +2</li>
					<li>Block/Parry: +2</li>
					<li>Kick: +2</li>
				</ul>
				<p>A Karate Master would be able to do any other type of move, but would be better at these three.</p>
				<p>A Master of Choi Li Fut would have:</p>
				<ul>
					<li>Strike: +2</li>
					<li>Block/Parry: +2</li>
					<li>Kick: +2</li>
					<li>Throw: +1</li>
					<li>Dodge: +1</li>
				</ul>
				<p>—making him far more versatile than our Karate Master.</p>
				<p>Of course, it would far more difficult to learn Choi Li Fut than Karate; this is reflected in the difficulty level of the form.</p>
				<p>The number of Improvement points normally required to increase your level of skill is multiplied by the difficulty level to show this. </p>
				<p>A full list of martial arts, difficulty levels and key attacks is on pg. 100 in the rulebook.</p>
				<h3>Damage:	</h3>
				<p>In addition, martial arts are far more deadly than regular brawling.</p>
				<p>When using martial arts, you will gain a damage bonus equal to your current level of martial arts in addition to any strength bonuses.</p>
			</div>
		);
	}
}

export default FNFFAttacksMartialArts;