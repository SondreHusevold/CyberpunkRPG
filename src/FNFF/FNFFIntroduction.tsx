import React, { Component } from 'react';
import animations from '../StyleModules/Animations.module.css';
import styles from './FNFFIntroduction.module.css';
import FadeInPicture from '../Common/FadeInPicture';

class FNFFIntroduction extends Component<{}> {

	public render() {
		return (
			<div className={animations.FadeInFast + " " + styles.FNFFIntroduction}>
				<div className={styles.FNFFIntroductionText}>
					<h1>Introduction:</h1>
					<FadeInPicture mobile="100% 30%" title="FNFF" alt="Friday Night Firefight" src="/assets/Visuals/FNFFIntro.webp"/>
                    <p>Friday Night Firefight (FNFF) is a weapons combat system for using modern, futuristic and archaic firearms in Cyberpunk adventures.</p>
                    <p>It's designed to cover all major elements of weapons combat in an easy to use format, allowing realistic firefight action without resorting to lots of tables and charts.</p>
                    <p>FNFF also covers melee weapons, hand to hand combatand martial arts as well, all in a simple system that allows you to use strategy over firepower.</p>
                    <p>There’s alot of vague ideas and theories about modern weapons encounters— most of them from the Hollywood Never-Empty-Six-Gun-School of Armed Combat.</p>
                    <p>These misconceptions have crept on little flat feet into the design of many roleplaying games, leading to characters who can be repeatedly shot with large caliber handguns until they run out of “hit points” and who can fire Ingram MAC-10’s one-handed and hit with every bullet.</p>
                    <p>In other words, good, clean fun.</p>
                    <p>FNFF is not good, clean fun. Most of the data herein has been complied from ballistics reports, police data, FBI statistics and other not-clean fun sources. These sources tend to point to a couple of basic truths about firefight combat.</p>
                    <ul className={styles.ExampleBorder}>
                        <li>80% of most gunfights occur between untrained amateurs at a range of 21 feet. </li>
                        <li>40% of these raging gun battles happen within 8 feet or less! </li>
                        <li>Most (60%) occur in dimly lit and difficult conditions— dark, rainy alleys, with both participants panting and out of breath, pausing momentarily to snap off a badly aimed shot at a fleeing shadow, then ducking back for cover. </li>
                        <li>Hits are surprisingly rare. When they do occur (assuming a large caliber weapon’s involved), the victim is usually hors de combat on the first shot from a combination of wound- shock and terror.</li>
                        <li>A solid hit with a .44 magnum will usually splatter a real person all over New Jersey.</li>
                    </ul>
                    <p>On the other hand, this is Cyberpunk, right?  So why are we telling you all this if we don’t intend for you to go in there with guns blazing?</p>
                    <p>If a large caliber handgun is truly something to be respected, who wants to lose character after character until they get the point?</p>
                    <p>We've made this edition of FNFF simpler, faster and more direct, so you can concentrate on how to fight; how to win every encounter (you'll only get to lose once). </p>
                    <p>We're going to give you all the tips we’ve learned over hundreds of our own encounters, plus hot tips from cops, combatgrunts, SWAT masters and other veterans who've put it on the line for real.</p>
                    <p>It's true— a firefight is dangerous. But you can handle it.</p>
                    <p>That's why you’re Cyberpunk.</p>
				</div>
				<div className={styles.FNFFIntroductionPicture}>
					<FadeInPicture title="Quite a Friday Night Firefight" alt="Friday Night Firefight" src="/assets/Visuals/FNFFIntro.webp"/>
				</div>
			</div>
		);
	}
}

export default FNFFIntroduction;
