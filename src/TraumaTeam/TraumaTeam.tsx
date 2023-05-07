import React, { Component, Suspense } from 'react';
import styles from './TraumaTeam.module.css';
import TTIntroduction from './TTIntroduction';
import Sidebar from '../Common/Sidebar.Navigation';
import TTDeath from './TTDeath';
import TTHealing from './TTHealing';
import TTBodyBank from './TTBodyBank';
import TTDrugs from './TTDrugs';
import { Route, Routes } from 'react-router-dom';
import Loading from '../Common/Loading';

interface TTState {
	selection: string | null;
	showMobileMenu: boolean;
} 

enum Choices {
	Introduction = "Introduction",
	Death = "Death",
	Healing = "Healing",
	BodyBank = "Body bank",
	Drugs = "Drugs"
}

class TraumaTeam extends Component<{}, TTState> {

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
				<h1 className="consoleText" onClick={this.toggleMobileView}>Trauma Team International:</h1>
				<div className={styles.TTSplit}>
					<Sidebar  origin="traumateam"
						showMobile={this.state.showMobileMenu} 
						choices={Object.values(Choices)} 
						clicked={this.changeSelection} 
						preDetermined={this.findCurrentLocation()}
						toggleMobile={this.toggleMobileView}
					/>
					<div className={styles.TTMain}>
						<Suspense fallback={<Loading/>}>
							<Routes>
								<Route path="introduction" element={ <TTIntroduction /> } />
								<Route path="death" element={ <TTDeath /> } />
								<Route path="healing" element={ <TTHealing /> } />
								<Route path="bodybank" element={ <TTBodyBank /> } />
								<Route path="drugs" element={ <TTDrugs /> } />
							</Routes>
						</Suspense>
					</div>
				</div>
			</div>
		);
	}
}

export default TraumaTeam;
