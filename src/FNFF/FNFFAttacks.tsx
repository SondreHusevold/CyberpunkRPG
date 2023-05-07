import React, { Component } from 'react';
import styles from './FNFFAttacks.module.css';
import FNFFAttacksRanged from './FNFFAttacksRanged';
import FNFFAttacksAuto from './FNFFAttacksAuto';
import FNFFAttacksLaser from './FNFFAttacksLaser';
import FNFFAttacksAoE from './FNFFAttacksAoE';
import FNFFAttacksMartialArts from './FNFFAttacksMartialArts';
import FNFFAttacksMelee from './FNFFAttacksMelee';
import animations from '../StyleModules/Animations.module.css';
import FadeInPicture from '../Common/FadeInPicture';

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
				url = "/assets/Visuals/RangedWeapon.webp"
				break;
			case AttackMethods.Martial:
				url = "/assets/Visuals/MartialArts.webp"
				break;
			case AttackMethods.Melee:
				url = "/assets/Visuals/MeleeWeapons.webp"
				break;
			case AttackMethods.Automatic:
				url = "/assets/Visuals/AutomaticWeapons.webp"
				break;
			case AttackMethods.AoE:
				url = "/assets/Visuals/AoEWeapons.webp"
				break;
			case AttackMethods.Laser:
				url = "/assets/Visuals/LaserWeapon.webp"
				break;
			default:
				url = "/assets/Visuals/FNFF.webp";
				break;
		}

		return (
			<div className={styles.FNFFAttacksPicture}>
				<FadeInPicture title="" alt="Friday Night Firefight" src={url}/>
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
				<button onClick={() => this.setState({ currentSelection: null })}>{">"} [ RETURN ]</button>
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
			<div className={animations.FadeInFast + " " + styles.FNFFAttacksInformation}>
				<h1>Making Attacks:</h1>
				<FadeInPicture mobile="100% 0%" title="" alt="Friday Night Firefight" src="/assets/Visuals/FNFF.webp"/>
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