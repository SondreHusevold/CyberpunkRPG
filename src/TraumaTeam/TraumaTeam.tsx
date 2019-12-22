import React, { Component, Suspense } from 'react';
import styles from './TraumaTeam.module.css';
import TTIntroduction from './TTIntroduction';
import Sidebar from '../Common/Sidebar.Navigation';
import TTDeath from './TTDeath';
import TTHealing from './TTHealing';
import TTBodyBank from './TTBodyBank';
import TTDrugs from './TTDrugs';
import { Router, Switch, Route } from 'react-router-dom';


interface TTState {
	selection: string | null;
	showMobileMenu: boolean;
} 

interface TTProps {
	history: any;
}

enum Choices {
	Introduction = "Introduction",
	Death = "Death",
	Healing = "Healing",
	BodyBank = "Body bank",
	Drugs = "Drugs"
}

class TraumaTeam extends Component<TTProps, TTState> {

	public constructor(props: TTProps) {
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
						<Suspense fallback={<div/>}>
							<Router history={this.props.history}>
								<Switch>
									<Route path="/traumateam/introduction">
										<TTIntroduction />
									</Route>
									<Route path="/traumateam/death">
										<TTDeath />
									</Route>
									<Route path="/traumateam/healing">
										<TTHealing />
									</Route>
									<Route path="/traumateam/bodybank">
										<TTBodyBank />
									</Route>
									<Route path="/traumateam/drugs">
										<TTDrugs />
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

export default TraumaTeam;
