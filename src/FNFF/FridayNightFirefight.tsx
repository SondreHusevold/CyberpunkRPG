import React, { Component } from 'react';
import styles from './FridayNightFirefight.module.css';
import Sidebar from '../Sidebar/Sidebar.Navigation';
import FNFFIntroduction from './FNFFIntroduction';
import FNFFTurns from './FNFFTurns';
import FNFFActions from './FNFFActions';
import FNFFDamage from './FNFFDamage';
import FNFFArmor from './FNFFArmor';
import FNFFBodyType from './FNFFBodyType';
import FNFFWounds from './FNFFWounds';
import FNFFDeathSaves from './FNFFDeathSaves';
import FNFFAttacks from './FNFFAttacks';
import FNFFVehicles from './FNFFVehicles';

interface FNFFState {
	selection: string | null;
	showMobileMenu: boolean;
} 

enum Choices {
    Introduction = "Introduction",
    Initiative = "Initiative",
    Actions = "Actions",
    Damage = "Damage",
    Armor = "Armor",
    BodyType = "Body Type",
	Wounds = "Wound Effects",
	Death = "Death Saves",
    Attacking = "Making Attacks",
    Vehicles = "Vehicles"
}

class FridayNightFirefight extends Component<{}, FNFFState> {

	public constructor(props: {}) {
		super(props);

		this.state = {
			selection: Choices.Introduction,
			showMobileMenu: false
		}
	}

	public changeSelection = (newSelection: string) => {
		this.setState({
			selection: newSelection,
			showMobileMenu: false
		});
	}

	public getCurrentSelection = () => {
		switch(this.state.selection) {
			case Choices.Introduction:
                return <FNFFIntroduction />;
            case Choices.Initiative:
				return <FNFFTurns />;
			case Choices.Actions:
				return <FNFFActions />;
			case Choices.Damage:
				return <FNFFDamage />;
			case Choices.Armor:
				return <FNFFArmor />;
			case Choices.BodyType:
				return <FNFFBodyType />;
			case Choices.Wounds:
				return <FNFFWounds />
			case Choices.Death:
				return <FNFFDeathSaves />
			case Choices.Attacking:
				return <FNFFAttacks />
			default:
				return <FNFFVehicles />;
		}
	}

	public toggleMobileView = () => {
		this.setState({
			showMobileMenu: !this.state.showMobileMenu
		})
	}

	public render() {
		return (
			<div>
				<h1 className="consoleText" onClick={this.toggleMobileView}>Friday Night Firefight:</h1>
				<div className={styles.FNFFSplit}>
					<Sidebar showMobile={this.state.showMobileMenu} 
							choices={Object.values(Choices)} 
							clicked={this.changeSelection} 
							preDetermined={Choices.Introduction} 
							toggleMobile={this.toggleMobileView}
					/>

					<div className={styles.FNFFMain}>
						{this.getCurrentSelection()}
					</div>
				</div>
			</div>
		);
	}
}

export default FridayNightFirefight;
