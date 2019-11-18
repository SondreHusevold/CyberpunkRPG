import React, { Component } from 'react';
import pictureAnimation from '../StyleModules/Pictures.module.css';
import styles from './TraumaTeam.module.css';

class TTIntroduction extends Component<{}> {

    public redirectToVideo = () => {
        window.open("https://www.youtube.com/watch?v=Lic1GMbH6dQ", "_blank"); 
    }

	public render() {
		return (
			<div className={styles.TTIntroduction}>
				<div className={styles.TTIntroductionText}>
					<h1>Heal. Diagnose. Extract.</h1>
					<p>One of the most powerful Corporations of the Cyber Age is the Trauma Team™; a bonded and licensed paramedical franchise operating throughout the U.S., Canada and parts of Europe.</p>
                    <p>These crack ambulance units are specifically designed to get to the scene of a fatality within seven minutes (or your money back).</p>
                    <p>Trauma Team's crews are made up of the best paramedical techs and staff available. The teams are usually made up of a driver, a senior Medtechie, an assistant and two security officers. They normally travel in a heavily armored AV-4 aircraft, supported by mobile tanker trucks and ground refuelling stations. </p>
                    <p>A Trauma Team AV-4 contains the most sophisticated revivification and life support technology available, including a mobile cryotank to lower the body temperature to approximately -4 degrees celcius, (the optimum temperature to prevent hemorrhaging, shock, and brain swelling).</p>
                    <h2>The bill:</h2>
                    <p>Trauma Team fees are exceedingly steep ($100 per minute), the best method of offsetting their exorbitant costs is to either carry Trauma Team services as part of a Corporate group insurance policy, or to establish an account with TT International, paying a premium of $500 in advance each month for continued service.</p>
                    <p>The executive plan at $12.000 per month covers all ammo and fuel costs, however the customer still has to pay for equipment and/or personnel damage.</p>
                    <p>The high priority coverage has a response time of 3-5 minutes which Trauma Team claims is the fastest in the business. </p>
                    <p>Once picked up, the customer will be taken to a corporate hospital instead of a medical center.
                        All ammunition and fuel costs are covered, but any equipment damage or personnel damage is added to the bill.</p>
                    <p>The price for high priority? If you have to ask...</p>
                    <h2>Contacting:</h2>
                    <p>Trauma Teams™ can be summoned by dialing 911 on any phone, and are equipped to trace the origin of any phone call to its source. (You're billed from the moment you call, until delivery to the Hospital.)</p>
                    <p>You may also opt to carry a deadman transmitter, which will activate and automatically signal a Trauma Team the moment your brainwave pattern falls into a coma state.</p>
                    <p>The most common transmitter is in the form of a plastic credit card, which is activated by bending the card in half, and has a range of 20 miles.</p>
                    <p>Trauma cards can be transferred between members of a group as long as the card's owner s present to sign the charges off when the Team arrives.</p>
                    <div className={styles.InterlacedVideo} onClick={this.redirectToVideo}>
                        <video loop muted autoPlay className={pictureAnimation.InterlacedPicture} src="/assets/TRAUMA.webm"/>
                    </div>
                    <p>There are usually a dozen or more Trauma Teams on call at any time in a major city. Immediately after receiving an alert, the nearest Trauma Team™ unit goes airborne, their sophisticated tracking equipment homing in on the last known location of the patient.</p>
                    <p>The pilot (who is skilled enough to set his six-ton AV-4 on top of a parked car if need be), drops in as close as possible.
                        If the firefight is still going on, the security team secures the area (using the AV's twin autocannon or their own portable weapons).
                    </p>
                    <p>The medtechs load the patient on board, shunting his life support to the onboard heart-lung machines, plugging him into onboard biomonitors, and chilling his body down in the refrigerated tank for stabilization.</p>
                    <p>Rapid surgery is performed on the spot for the most critical wounds, while the med specialist uses a combination of electroshock, drugs and manual resuscitation to get the patient on-line again. The pilot slamsdown the throttlesand the AV-4 rockets skywards on a pillar of exhaust, headed for the nearest emergency room.</p>
                    <p>The entire process may have taken all of four minutes from start to finish.</p>
                    <h3>Friendly reminder:</h3>
                    <p>As a privately owned concern, Trauma Teams™ are not under any obligation to transport a casualty to a hospital, although they are responsible for reviving and stabilizing critically wounded patients. </p>
				</div>
				<div className={styles.TTIntroductionPicture}>
					<img className={pictureAnimation.InterlacedPicture} alt="Logo of Trauma Team International" src="/assets/Visuals/TraumaTeam.png"/>
				</div>
			</div>
		);
	}
}

export default TTIntroduction;
