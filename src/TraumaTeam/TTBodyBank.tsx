import React, { Component } from 'react';
import animations from '../StyleModules/Animations.module.css';
import styles from './TraumaTeam.module.css';
import FadeInPicture from '../Common/FadeInPicture';

class TTBodyBank extends Component<{}> {

	public render() {
		return (
			<div className={animations.FadeInFast + " " + styles.TTIntroduction}>
				<div className={styles.TTIntroductionText}>
					<h1>The Body Bank:</h1>
					<FadeInPicture mobile="100% 30%" title="AV4" alt="AV4" src="../../assets/Visuals/TraumaTeamAV4.webp"/>
					<p>These are places where you can get the raw materials for putting people back together again. They are a staple of the Cyberpunk landscape, and a good source of steady income for the enterprising street dweller.</p>
                    <p>Just in case it didn’t work out, you can still make a dead comrade pull his weight. The Lifeline Act of 1994 (an extension of the donor cards of the 1980s) allows a potential source of spare parts to carry adonor card in his wallet.</p>
                    <p>This card must be registered with the federal government. Only donor carded bodies can be turned into a donor center, where a bounty is paid. The bounty is based onthe parts involved and the body condition at the time.</p>
                    <table className={styles.TTBodyBankTable}>
                        <tr>
                            <th>Part</th>
                            <th>Average bounty</th>
                            <th>Sale price</th>
                        </tr>
                        <tr>
                            <td>Arm</td>
                            <td>500</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <td>Leg</td>
                            <td>600</td>
                            <td>1200</td>
                        </tr>
                        <tr>
                            <td>Heart / Lung</td>
                            <td>700</td>
                            <td>1400</td>
                        </tr>
                        <tr>
                            <td>Liver / Kidney</td>
                            <td>200</td>
                            <td>400</td>
                        </tr>
                        <tr>
                            <td>Eyes / Ears</td>
                            <td>800</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <td>Other organs</td>
                            <td>200 - 300</td>
                            <td>400 - 600</td>
                        </tr>
                    </table>
                    <p>The Government doesn’t care who turns the body in. All you need is the card and a legitimate death certificate stating that the deceased died of natural or accidental causes, available through any local coroner. </p>
                    <p>The result is that many firefights end with a frenzied looting of bodies for donor cards—followed by another firefight over disputed claims and ending in another frenzy of looting.</p>
                    <p>Legally, donor centers must be located in legitimate offices of the County or City Coroner’s Office, or in a public hospital. However, a thriving black market in fraudulent donors thrives in most of the combat zones, usually out of “ripperdoc” clinics or Corporate centers (where high level execs get first pick of the new parts).</p>
                    <p>The biggest problem with Body Bank replacements is the availability of genetically matching parts:</p>
                    <div className={styles.ExampleBorder}>
                        <span>When attempting to locate a replacement limb or other part at a body bank, roll 1D10. On a 1,2, or 3, the partis unavailable that day.</span>
                        <p>On a 4 or 5, the part is in, but it may be the wrong color or have some other minor difference.</p>
                    </div>
                    <h2>VAT grown tissue banks:</h2>
                    <p>This reflects recent (2017) improvements in genetic technology. Using tailored DNA and cell-growthvats, legs, arms, organs and other parts (including exotic designs like animal human crosses) can be grown to order.</p>
                    <p>Unlike bodybanking, vat-grown parts are available to match any genotype.</p>
                    <p>However, the process is relatively new and is more expensive than simply using an arm off the rack (2 times the price for a similar body bank part in Excellent condition).</p>
				</div>
				<div className={styles.TTIntroductionPicture}>
					<FadeInPicture title="Your typical Trauma Team Aerovehicle" alt="AV4." src="../../assets/Visuals/TraumaTeamAV4.webp"/>
				</div>
			</div>
		);
	}
}

export default TTBodyBank;
