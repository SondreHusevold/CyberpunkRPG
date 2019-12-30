import React, { Component, Suspense } from 'react';
import styles from './Cyberware.module.css';
import Sidebar from '../Common/Sidebar.Navigation';
import CyberSurgery from './CyberSurgery';
import CyberwareIntroduction from './CyberwareIntroduction';
import Cyberpsychosis from './Cyberpsychosis';
import CyberwareHumanity from './CyberHumanity';
import CyberPieces from './CyberwarePieces';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Loading from '../Common/Loading';
import CyberwareLimbs from './Cyberlimbs';

interface CyberState {
	selection: string | null;
	showMobileMenu: boolean;
} 

enum Choices {
	Introduction = "Introduction",
	Cyberpsychosis = "Cyberpsychosis",
	Surgery = "Surgery",
	Humanity = "Humanity",
	Pieces = "Pieces",
	Damage = "Limbs"
}

class Cyberware extends Component<{}, CyberState> {

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
				return 
			case Choices.Cyberpsychosis:
				return 
			case Choices.Surgery:
				return 
			case Choices.Humanity:
				return 
			case Choices.Pieces:
				return 
			default:
				return "";
		}
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
				<h1 className="consoleText" onClick={this.toggleMobileView}>Cyberware:</h1>
				<div className={styles.CyberSplit}>
					<Sidebar origin="cyberware" 
							showMobile={this.state.showMobileMenu} 
							choices={Object.values(Choices)} 
							clicked={this.changeSelection} 
							preDetermined={this.findCurrentLocation()}
							toggleMobile={this.toggleMobileView}
					/>
					<div className={styles.CyberMain}>
						<Suspense fallback={<Loading/>}>
							<HashRouter >
								<Switch>
									<Route path="/cyberware/introduction">
										<CyberwareIntroduction />
									</Route>
									<Route path="/cyberware/cyberpsychosis">
										<Cyberpsychosis />
									</Route>
									<Route path="/cyberware/surgery">
										<CyberSurgery />
									</Route>
									<Route path="/cyberware/humanity">
										<CyberwareHumanity />
									</Route>
									<Route path="/cyberware/pieces">
										<CyberPieces />
									</Route>
									<Route path="/cyberware/limbs">
										<CyberwareLimbs />
									</Route>
								</Switch>
							</HashRouter>
						</Suspense>
					</div>
				</div>
			</div>
		);
	}
}

export default Cyberware;
