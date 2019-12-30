import React, { Component } from 'react';
import styles from './Cyberware.module.css';
import animations from '../StyleModules/Animations.module.css';
import FadeInPicture from '../Common/FadeInPicture';

class CyberwareLimbs extends Component<{}> {
	public render() {
		return (
			<div className={animations.FadeInFast + " " + styles.IntroductionSplit}>
				<div>
					<h1>Cyberlimbs:</h1>
                    <FadeInPicture mobile="100% 15%" title="s" 
                        alt="Do not forget your humanity." src="/CyberpunkRPG/assets/Visuals/Cyberlimbs.webp" 
                    />
                    <p>When the man on the Street thinks of cyborgs, what he thinks of are artificial limbs; whirring, glittering metal constructs of steel, wire and microchip circuitry. Although real arms, legs, and organs can easily be grown in bio-tanks or replaced from body banks at a much lower cost, artificial limbs are still a popular fad of the Cyberpunk future. </p>
                    <p>They are chromed, airbrushed, jeweled, lighted, and even sculpted in the pursuit of true cybertech chic.</p>
                    <p>Under all the designer fashion, the standard cyberlimb is an aluminum and steel basket framework, with artificial myomar plastic muscles controlling motion. The joints are stainless steel.</p>
                    <p>The cyberlimb plugs into a special nerve interface jack mounted in the flesh above the limb, while the main unit is coupled to a metal and plastic cuff around the meat part of the limb. The cuff is usually placed at the upper bicep/thigh or the elbow/ knee, however, arms may also be attached to an artificial shoulder, and anchored to an external arm mount.</p>
                    <p>The popular myth about cyberlimbs is that they enable their owners to perform all kinds of superheroic feats.</p>
                    <p>To a point, it’s true; cyberlimbs can be designed with boosted strength and speed, using synthetic muscle fibers and silicon chips. What you won’t find are people running at 200 miles an hour, bending steel bars with their hands or throwing Volkswagens around. </p>
                    <p>Even if your arm was ten times stronger than before, the back and shoulder muscles supporting that cyberlimb wouldn’t be—and they’d shred long before the artificial muscles did. But within limits, a cyber-equipped person can do some pretty impressive party tricks:</p>
                    <div className={styles.Cyberware50Split + " " + styles.NoGridGap}>
                        <div className={styles.ExampleBorder}>
                            <h3>Crushing:</h3>
                            <p>A cybernetic arm uses synthetic muscle fibres instead of flesh and blood. They don’t get tired, and they don’t feel pain. They are also much stronger than normal muscle tissue.</p>
                            <p>This gives a cyberarm tremendous gripping power. All cyberlimbs can easily crush light metals, woods and plastics. They can crush glass and plastic to dust (although they can’t crush lumps of coal into diamonds!).</p>
                            <p>In combat, any crushing grip with a cyberarm will do 2D6 damage.</p>
                        </div>
                        <div className={styles.ExampleBorder}>
                            <h3>Pain:</h3>
                            <p>Cyberarms never grow tired, allowing the wearer to hang from high places indefinitely.</p>
                            <p>You can turn off the touch sensors with the flick of a mental switch, eliminating pain and allowing you to perform feats such as reaching into raging fires, dabbling in tanks of liquid nitrogen, and picking up red-hot pokers.</p>
                            <p>A gunshot wound to a cyberlimb has no pain effects; you don’t have to make a saving roll against shock and stun.</p>
                        </div>
                    </div>
                    <div className={styles.ExampleBorder}>
                            <h3>Damage:</h3>
                            <p>Cyberlimbs can take (and dish out) a tremendous amount of damage, so much so that they are treated like machinery for the purposes of game combat.</p>
                            <p>All cyberlimbs can take up to 20 points of structural damage before they are useless, and up to 30 total points of structural damage before they are destroyed!</p>
                            <p>A cyberarm punch does 1D6 damage to its target; wall, car, someone’s head; no matter. A cyberleg kick will do 2D6 damage.</p>
                        </div>
                        <div className={styles.ExampleBorder}>
                            <h3>Leaping:</h3>
                            <p>Cyberlegs employ powerful pistons and microservos, backed by bundles of synthetic muscles. With a pair of them, you can leap tremendous distances.</p>
                            <p>Characters with paired cyberlegs can leap 6 meters straight up, or make a running jump of up to 8 meters.</p>
                        </div>
                    <h3>Options:</h3>
                    <p>Cyberlimbs also come with an immense amounts of options like improve its strength, damage capacity, add reinforced joints and EMP shielding.</p>
                    <p>They can also be fitted with different coverings like plastic covering with color options, airbrushing the limb, transparent with embedded lights and holography. It can be chromed (very popular option), covered with meticallic skin tined in golds, blues, greens, reds or silvers.</p>
                    <p>The most expensive covering is Realskinn™, a flexible plastic that looks very much like real skin. It comes with follicles, hairs, small scars and imperfections. Thus it has a 75% chance of passing as a meat limb to all but closest inspection.</p>
                    <p>The cyberlimb can also be armored with Kevlar and ballistic plastic. This armor covering protects the limb with an SP of 20. However you may not cover or chrome an armored limb.</p>
                    <p>Take a look at pages 89-91 in the Core Rulebook for a bunch of different options to add to your badass new limb.</p>
				</div>
				<div className={styles.IntroductionImage}>
					<FadeInPicture alt="humanity" title="Do not forget your humanity" src="/CyberpunkRPG/assets/Visuals/Cyberlimbs.webp" />
				</div>
			</div>
		);
	}
}

export default CyberwareLimbs;
