import React, { Component } from 'react';
import animations from '../StyleModules/Animations.module.css';
import styles from './FNFFIntroduction.module.css';
import FadeInPicture from '../Common/FadeInPicture';

class FNFFDeathSaves extends Component<{}> {

	public render() {
		return (
			<div className={animations.FadeInFast + " " + styles.FNFFIntroduction}>
				<div className={styles.FNFFIntroductionText}>
					<h1>Death Saves:</h1>
					<FadeInPicture mobile="100% 30%" title="" alt="s" src="/CyberpunkRPG/assets/Visuals/FNFFIntroduction.webp"/>
                    <p>Unless you have taken a Mortal Wound, your character is in no danger of dying; he only needs to make his initial Stun save to remain conscious. But if the wound is a MORTAL one, he has a chance of dying.</p>
                    <p>Determining whether he survives requires that a Death Save be made, with a new save required every turn that the character remains untreated.</p>
                    <p>Like a Stun Save, a Death Save requires that you roll a value on 1D10 equal to or lower than your character’s Body Type score, 
                        subtracting the level of severity for the wound from your base chance to save. Mortal Wounds are rated from O to 8.
                    </p>
                    <div className={styles.ExampleBorder}>
                        <span>Hargan is Very Strong and takes a Mortal 4 wound. He must roll lower than (10-4)=6 to stay alive.</span>
                    </div>
                    <p>Each turn, you must make another Death Save to see if you survive to the next turn. On a successful roll, you make it; on a failed roll, you will die at the end of the turn in which the roll was made.</p>
                    <p>Sooner or later, you'll fail a roll and die. The only way out is</p>
                    <h2>Stabilization:</h2>
                    <p>Stabilization means the patient is no longer losing blood and that his major damage has been contained through use of drugs, battlefield surgery and/or wound dressing.</p>
                    <p>A stabilized character will no longer be required to make Death Saves each turn. Anyone (except the patient himself) can attempt to stabilize a mortally wounded character; it just works better if the physician has had some medical training. A lot better.</p>
                    <p>A successful stabilization is made by adding your TECH stat, any Medical Skill and one D10 for a result equal to or higher than the total number of damage points the patient has taken. </p>
                    <div className={styles.ExampleBorder}>
                        <span>Ripperjack has taken 20 points of damage, placing him in a Mortal 1 Wound State. To stabilize him will require a roll of 20 or greater. Once stabilized, the character is no longer in danger of dying unless another wound is taken. At this point, the whole messy business begins again...</span>
                    </div>
                    <p>The chances of a successful stabilization roll can be increased by the following modifiers, added to your die roll.</p>
                    <table>
                        <tr>
                            <th>Advantage:</th>
                            <th>Add to die roll:</th>
                        </tr>
                        <tr>
                            <td>Full Hospital and Surgery</td>
                            <td>+5</td>
                        </tr>
                        <tr>
                            <td>Trauma Team Ambulance</td>
                            <td>+3</td>
                        </tr>
                        <tr>
                            <td>Life suspension tank</td>
                            <td>+3</td>
                        </tr>
                    </table>
                    <p>Assuming you make your stabilization rolls, you're going to survive to fight again. If you fail, no problem, that's why we have Body banks. </p>
                    <p>Either way, to learn more about healing or spare parts brokering, check out the Trauma Team section.</p>
				</div>
				<div className={styles.FNFFIntroductionPicture}>
					<FadeInPicture title="Fail and die." alt="Friday Night Firefight" src="/CyberpunkRPG/assets/Visuals/FNFFIntroduction.webp"/>
				</div>
			</div>
		);
	}
}

export default FNFFDeathSaves;
