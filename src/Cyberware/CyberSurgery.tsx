import React, { Component } from 'react';
import styles from './CyberSurgery.module.css';
import animations from '../StyleModules/Animations.module.css';
import { SurgeryCode, CyberwareService } from '../Services/CyberwareService';
import FadeInPicture from '../Common/FadeInPicture';

interface SurgeryState {
	surgeryCodes: SurgeryCode[];
}

class CyberSurgery extends Component<{}, SurgeryState> {

	public constructor(props: {}) {
		super(props);

		this.state = {
			surgeryCodes: []
		}

		this.getSurgeryCodes();
	}

	public async getSurgeryCodes() {
		this.setState({
			surgeryCodes: await CyberwareService.getCodes()
		});
	}

	public render() {
		return (
			<div className={animations.FadeInFast + " " + styles.SurgeryMain}>
				<div>
					<h1>Surgery:</h1>
					<FadeInPicture mobile="100% 30%" title="d" 
						alt="Surgery is dangerous." src="../../assets/Visuals/Surgery.webp" 
					/>
                    <p>Not all medical care is the result of accidents or combat. This is the Metal Age, and when you want to get cybered up, you gotta pay a price in blood.</p>
					<p>Surgery is usually done at ripperdocs who specialize in installing Cyberware. These can be smaller and independent ripperdocs, or more expensive and professional medical centers.</p>
					<p>Ripperdocs can be both completely legal or illegal. The latter can potentially have black market military-grade cyberware, but can also have less qualms about your safety.</p>
                    <p>If you’re going to get wired with a cyberlimb, the first thing you’ll have to decide is whether you want to keep the meat one. </p>
                    <p>For around 100eb a month, a Body Bank will store your old one until you decide to reclaim it, with only a 20% chance that someone will sell it for spare parts in the meantime. For about 200eb a month, this drops to a 5% chance; not perfect, but better than nothing.</p>
                    <p>Now you've ditched the old meat in the freezer, it'stime to getcybered up. A Medical Tech skill is required to install cyberwear.</p>
                    <p>You can’t install cyberwear on yourself. Each type of cyberwear has a Surgery Code (pg. 75). </p>
                    <p>This code represents the minimum level of medical care required to install the cyberwear, the length of surgical time required, the cost of the surgery, the damage taken in surgery and the Difficulty of the installation procedure.</p>
                    <p>The Surgery Code assumes that a successful Medical Tech check has been made on the patient as part of the operation. Healing is then based on the number of points lost due to the surgery.</p>
					<div className={styles.SplitSurgery}>
						{this.state.surgeryCodes.map((surgeryCode) => {
							return (
								<div>
									<h2>{surgeryCode.name}</h2>
									<p>Requirements: {surgeryCode.required}</p>
									<p>Time in surgery: {surgeryCode.time}</p>
									<p>Damage:{surgeryCode.damage}</p>
									<p>Cost: {surgeryCode.cost}</p>
									<p>Difficulty: {surgeryCode.difficulty}</p>
								</div>
							)
						})}
					</div>
					<div>
						<p>Example: Morgan Blackshadow decides to get a cyberarm installed. The surgery code is Critical (CR).</p>
						<p>Morgan takes 11 points in surgical damage (Wound State=Critical).</p>
						<p>The surgery is Difficult (25), requires a hospital, takes six hours and costs 2,500 eb.</p>
						<p>It will take Morgan 11 days to recover fully, but he can be back on the street in a week (operating at a Light Wound State).</p>

						<h2>Replacement surgery:</h2>
						<p>Remember; arms and legs don’t grow back. Even if you heal, a missing limb will still be missing.</p>
						<p>You can chose to replace it with something out of a Body Bank or vat, or you can go for the metal.</p>
						<p>Replacing a limb with either requires a CR surgery code. </p>
						<p>A replacement meat arm will cost about 1,000 eb. A replacement cyberarm starts at 2,000eb and goes up from there depending on what you want to plug into it.</p>
					</div>
				</div>
				<div className={styles.SurgeryImage}>
					<FadeInPicture title="Surgery is dangerous, but normal." alt="Surgery is dangerous." src="../../assets/Visuals/Surgery.webp" />
				</div>
			</div>
		);
	}
}

export default CyberSurgery;
