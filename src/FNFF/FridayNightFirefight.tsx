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
import { Navigate, Route, Routes } from 'react-router-dom';
import Loading from '../Common/Loading';

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
	Wounds = "Wounds",
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

	public toggleMobileView = () => {
		this.setState({
			showMobileMenu: !this.state.showMobileMenu
		})
	}

	public findCurrentLocation = () => {
		let location: string | undefined = window.location.hash.split("/").pop();
		let foundSection = Object.values(Choices).find(d => d.toLowerCase().startsWith(location != null ? location.substring(0,4) : "", 0));
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
						<Suspense fallback={<Loading/>}>
							<Routes>
									<Route path="introduction" element={ <FNFFIntroduction /> } />
									<Route path="initiative" element={ <FNFFTurns /> } />
									<Route path="actions" element={ <FNFFActions /> } />
									<Route path="damage" element={ <FNFFDamage /> } />
									<Route path="armor" element={ <FNFFArmor /> } />
									<Route path="bodytype" element={ <FNFFBodyType /> } />
									<Route path="wounds" element={ <FNFFWounds /> } />
									<Route path="deathsaves" element={ <FNFFDeathSaves /> } />
									<Route path="makingattacks" element={ <FNFFAttacks /> } />
									<Route path="vehicles" element={ <FNFFVehicles /> } />
									<Route path={`/`} element={<Navigate to="introduction" />} />
							</Routes>
						</Suspense>
					</div>
				</div>
			</div>
		);
	}
}

export default FridayNightFirefight;
