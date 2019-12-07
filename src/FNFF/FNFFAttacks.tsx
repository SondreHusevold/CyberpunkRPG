import React, { Component } from 'react';
import pictureAnimation from '../StyleModules/Pictures.module.css';
import styles from './FNFFAttacks.module.css';
import FNFFAttacksRanged from './FNFFAttacksRanged';
import FNFFAttacksAuto from './FNFFAttacksAuto';
import FNFFAttacksLaser from './FNFFAttacksLaser';
import FNFFAttacksAoE from './FNFFAttacksAoE';
import FNFFAttacksMartialArts from './FNFFAttacksMartialArts';
import FNFFAttacksMelee from './FNFFAttacksMelee';

enum AttackMethods {
	Ranged = "Ranged Weapons",
	Automatic = "Automatic Weapons",
	AoE = "Area of Effect Weapons",
	Laser = "Laser weapons",
	Melee = "Melee Weapons",
	Martial = "Martial Arts"
}

interface FNFFAttacksState {
	currentSelection: AttackMethods | null;
}

class FNFFAttacks extends Component<{}, FNFFAttacksState> {

	public constructor(props: {}) {
		super(props);

		this.state = {
			currentSelection: null
		}
	}

	public renderPicture = () => {
		let url = "";
		switch (this.state.currentSelection) {
			case AttackMethods.Ranged:
				url = "assets/Visuals/RangedWeapon.png"
				break;
			case AttackMethods.Martial:
				url = "assets/Visuals/MartialArts.png"
				break;
			case AttackMethods.Melee:
				url = "assets/Visuals/MeleeWeapons.png"
				break;
			case AttackMethods.Automatic:
				url = "assets/Visuals/AutomaticWeapons.png"
				break;
			case AttackMethods.AoE:
				url = "assets/Visuals/AoEWeapons.png"
				break;
			case AttackMethods.Laser:
				url = "assets/Visuals/LaserWeapon.png"
				break;
			default:
				url = "assets/Visuals/FNFF.png";
				break;
		}

		return (
			<div className={styles.FNFFAttacksPicture}>
				<img className={pictureAnimation.InterlacedPicture} alt="Friday Night Firefight" src={url}/>
			</div>
		)
	}

	public setSection = (section: AttackMethods) => {
		this.setState({
			currentSelection: section
		});
	}

	public renderBackButton = () => {
		return (
			<div className={styles.FNFFAttackMenu + " " + styles.FNFFAttackSmallerMenu}>
				<button onClick={() => this.setState({ currentSelection: null })}>> [ RETURN ]</button>
			</div>
		)
	}

	public renderSelection = () => {
		switch (this.state.currentSelection) {
			case AttackMethods.Ranged:
				return (
					<div>
						{this.renderBackButton()}
						<FNFFAttacksRanged />
					</div>
				)

			case AttackMethods.Melee:
				return(
					<div>
						{this.renderBackButton()}
						<FNFFAttacksMelee />
					</div>
				)

			case AttackMethods.Automatic:
				return(
					<div>
						{this.renderBackButton()}
						<FNFFAttacksAuto />
					</div>
				)

			case AttackMethods.Martial:
				return(
					<div>
						{this.renderBackButton()}
						<FNFFAttacksMartialArts />
					</div>
				)
			case AttackMethods.Laser:
				return(
					<div>
						{this.renderBackButton()}
						<FNFFAttacksLaser />
					</div>
				)
			case AttackMethods.AoE:
				return(
					<div>
						{this.renderBackButton()}
						<FNFFAttacksAoE />
					</div>
				)
		}

		return (
			<div className={styles.FNFFAttacksInformation}>
				<h1>Making Attacks:</h1>
				<img className={styles.AttacksMobilePicture + " " + pictureAnimation.PictureMobileOnly} alt="Friday Night Firefight" src="assets/Visuals/FNFF.png"/>
				<p>This section covers the basics of how to make attacks:</p>
				<hr/>
				<div className={ styles.FNFFAttackMenu }>
					{Object.values(AttackMethods).map((attack: AttackMethods) => {
						return (
							<button onClick={() => this.setSection(attack)}>{attack.toUpperCase()}</button>
						)
					})}
				</div>
				<hr/>
			</div>
			
		)
	}

	public render() {
		return (
			<div className={styles.FNFFAttacksSplit}>
				{this.renderSelection()}
				{this.renderPicture()}
			</div>
		);
	}
}

export default FNFFAttacks;