import React, { Component } from 'react';
import pictureAnimation from '../StyleModules/Pictures.module.css';
import styles from './FNFFIntroduction.module.css';

class FNFFBodyType extends Component<{}> {

	public render() {
		return (
			<div className={styles.FNFFIntroduction}>
				<div className={styles.FNFFIntroductionText}>
					<h1>The Body Type Modifier:</h1>
                    <p>The next step after Armor is to apply your character's Body Type Modifier to the damage. </p>
                    <p>This is a special bonus which reduces the effects of damage, reflecting the stamina and general toughness of the character. </p>
                    <p>Each time your character takes damage, subtract your Body Type Modifier from the total amount of damage before applying it to your character.
                    </p>
                    <div className={styles.TwoColumnGrid}>
                        <div className={styles.FirstColumn}>
                            <h3>Body Type</h3>
                            <p>Very Weak</p>
                            <p>Weak</p>
                            <p>Average</p>
                            <p>Strong</p>
                            <p>Very Strong</p>
                            <p>Superhuman*</p>
                        </div>
                        <div className={styles.SecondColumn}>
                            <h3>Modifier</h3>
                            <p>-0</p>
                            <p>-1</p>
                            <p>-2</p>
                            <p>-3</p>
                            <p>-4</p>
                            <p>-5</p>
                        </div>
                    </div>
                    <p>*Superhuman is only available with cybernetics.</p>
                    <p>For example, say you took ten points of damage. If you were a Very Weak Body Type, you would take the full ten. But with a Very Strong Body Type, you'd only take (10-4=6) six points of damage.</p>
                    <div className={styles.ExampleBorder}>
                        <span>A Body Type Modifier may never reduce damage to less than one—in these cases, the character will automatically take 1 point of damage.</span>
                    </div>
				</div>
				<div className={styles.FNFFIntroductionPicture}>
					<img className={pictureAnimation.InterlacedPicture} alt="BodyType" src="/assets/Visuals/BodyType.png"/>
				</div>
			</div>
		);
	}
}

export default FNFFBodyType;
