import React, { Component } from 'react';
import animations from '../StyleModules/Animations.module.css';
import styles from './FNFFIntroduction.module.css';
import FadeInPicture from '../Common/FadeInPicture';

class FNFFBodyType extends Component<{}> {

	public render() {
		return (
			<div className={animations.FadeInFast + " " + styles.FNFFIntroduction}>
				<div className={styles.FNFFIntroductionText}>
					<h1>The Body Type Modifier:</h1>
                    <p>The next step after Armor is to apply your character's Body Type Modifier to the damage. </p>
                    <p>This is a special bonus which reduces the effects of damage, reflecting the stamina and general toughness of the character. </p>
                    <p>Each time your character takes damage, subtract your Body Type Modifier from the total amount of damage before applying it to your character.
                    </p>
                    <table className={styles.BTTable}>
                        <tr>
                            <th>Body Type:</th>
                            <th>Modifier:</th>
                        </tr>
                        <tr>
                            <td>Very Weak</td>
                            <td>-0</td>
                        </tr>
                        <tr>
                            <td>Weak</td>
                            <td>-1</td>
                        </tr>
                        <tr>
                            <td>Average</td>
                            <td>-2</td>
                        </tr>
                        <tr>
                            <td>Strong</td>
                            <td>-3</td>
                        </tr>
                        <tr>
                            <td>Very Strong</td>
                            <td>-4</td>
                        </tr>
                        <tr>
                            <td>Superhuman*</td>
                            <td>-5</td>
                        </tr>
                    </table>
                    <p>*Superhuman is only available with cybernetics.</p>
                    <p>For example, say you took ten points of damage. If you were a Very Weak Body Type, you would take the full ten. But with a Very Strong Body Type, you'd only take (10-4=6) six points of damage.</p>
                    <div className={styles.ExampleBorder}>
                        <span>A Body Type Modifier may never reduce damage to less than one—in these cases, the character will automatically take 1 point of damage.</span>
                    </div>
				</div>
				<div className={styles.FNFFIntroductionPicture}>
					<FadeInPicture title="Higher body type = Less ouch" alt="BodyType" src="assets/Visuals/BodyType.webp"/>
				</div>
			</div>
		);
	}
}

export default FNFFBodyType;
