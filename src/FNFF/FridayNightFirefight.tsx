import React, { Component, Suspense } from 'react';
import styles from './FridayNightFirefight.module.css';
import Sidebar from '../Common/Sidebar.Navigation';
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
import { Router, Switch, Route } from 'react-router-dom';

interface FNFFState {
	selection: string | null;
	showMobileMenu: boolean;
} 

interface FNFFProps {
	history: any;
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

class FridayNightFirefight extends Component<FNFFProps, FNFFState> {

	public constructor(props: FNFFProps) {
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

	public toggleMobileView = () => {
		this.setState({
			showMobileMenu: !this.state.showMobileMenu
		})
	}

	public findCurrentLocation = () => {
		let location: string = this.props.history.location.pathname.split("/").pop();
		let foundSection = Object.values(Choices).find(d => d.toLowerCase().startsWith(location.substring(0,4), 0));
		if(foundSection != null) 
			return foundSection.toString();
		return Choices.Introduction;
	}

	public render() {
		return (
			<div>
				<h1 className="consoleText" onClick={this.toggleMobileView}>Friday Night Firefight:</h1>
				<div className={styles.FNFFSplit}>
					<Sidebar origin="fnff"  
							 showMobile={this.state.showMobileMenu} 
							choices={Object.values(Choices)} 
							clicked={this.changeSelection} 
							preDetermined={this.findCurrentLocation()} 
							toggleMobile={this.toggleMobileView}
					/>

					<div className={styles.FNFFMain}>
						<Suspense fallback={<div/>}>
							<Router history={this.props.history}>
								<Switch>
									<Route path="/fnff/introduction">
										<FNFFIntroduction />
									</Route>
									<Route path="/fnff/initiative">
										<FNFFTurns />
									</Route>
									<Route path="/fnff/actions">
										<FNFFActions />
									</Route>
									<Route path="/fnff/damage">
										<FNFFDamage />
									</Route>
									<Route path="/fnff/armor">
										<FNFFArmor />
									</Route>
									<Route path="/fnff/bodytype">
										<FNFFBodyType />
									</Route>
									<Route path="/fnff/woundeffects">
										<FNFFWounds />
									</Route>
									<Route path="/fnff/deathsaves">
										<FNFFDeathSaves />
									</Route>
									<Route path="/fnff/makingattacks">
										<FNFFAttacks />
									</Route>
									<Route path="/fnff/vehicles">
										<FNFFVehicles />
									</Route>
								</Switch>
							</Router>
						</Suspense>
					</div>
				</div>
			</div>
		);
	}
}

export default FridayNightFirefight;
