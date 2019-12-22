import React, { Component } from 'react';
import styles from './Cyberware.module.css';
import animations from '../StyleModules/Animations.module.css';
import FadeInPicture from '../Common/FadeInPicture';

class CyberwareHumanity extends Component<{}> {
	public render() {
		return (
			<div className={animations.FadeInFast + " " + styles.IntroductionSplit}>
				<div>
					<h1>Humanity:</h1>
                    <FadeInPicture mobile="100% 15%" title="s" 
                        alt="Do not forget your humanity." src="../../assets/Visuals/Humanity.webp" 
                    />
                    <p>Each time you add on a cybernetic enhancement, there’s a corresponding loss of humanity. But it’s not simple, linear, or nice.</p>
                    <p>Different people react differently to the "cyborging" process. Therefore, your Humanity Cost is based on the throw of a random dice value for each enhancement.</p>
                    <p>This is important, because it means that sheer bad luck could put you over the line before you know it.</p>
                    <p>Remember: you must keep track of the cumulative number of points lost. Those little .5's and 1's are going to start adding up fast...</p>
                    <div className={styles.Cyberware50Split}>
                        <div>
                            <h2>Gaining Humanity:</h2>
                            <p>You can get humanity back by going to Cyberpsychologists and thus going to therapy.</p>
                            <p>If C-SWAT drags you kicking and screaming in you'll be strapped down and your cybersystems will be disabled 
                                and you'll be jacked into a braindance for "reassembly" of your brain so you can be more socially acceptable.
                            </p>
                        </div>
                        <div className={styles.ExampleBorder}>
                            <h3>Humanity Costs:</h3>
                            <p>Very low: ................ 1D6/2</p>
                            <p>Low: ............................ 1D6</p>
                            <p>Medium: ................... 2D6</p>
                            <p>High: ............................ 3D6</p>
                            <p>Very high: ............... 4D6</p>
                        </div>
                    </div>
                    <p>The following table is mentioned on page 101/102 in Chrome book 2 and describes regains per implant:</p>

                    <div className={styles.ExampleBorder}>
                        <h3>Therapist gains:</h3>
                        <p>Therapy Cost/Week Time Required Humanity points Regained</p>
                        <ul>
                            <li>Outpatient 1,000eb 14 hours/week 25%</li>
                            <li>Inpatient 5,000eb 168 hours/week 33%</li>
                            <li>ICT 10,000eb 168 hours/week 50%</li>
                        </ul>
                    </div>
				</div>
				<div className={styles.IntroductionImage}>
					<FadeInPicture alt="humanity" title="Do not forget your humanity" src="../../assets/Visuals/Humanity.webp" />
				</div>
			</div>
		);
	}
}

export default CyberwareHumanity;
