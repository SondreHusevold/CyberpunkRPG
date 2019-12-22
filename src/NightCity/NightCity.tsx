import React, { Component, Suspense } from 'react';
import styles from './NightCity.module.css';
import Sidebar from '../Common/Sidebar.Navigation';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Loading from '../Common/Loading';
import NightCityIntroduction from './NCIntroduction';
import NightCityStartingOut from './NCStartingOut';
import NightCityTheEdge from './NCLivingOnTheEdge';
import NightCityHistory from './NCHistory';
import NightCityAmerica from './NCAmerica';
import NightCityCorporations from './NCCorporations';
import NightCitySlang from './NCSlang';
import NightCityMaps from './NCMaps';

interface NightCityState {
	selection: string | null;
	showMobileMenu: boolean;
} 

enum Choices {
    Introduction = "About",
    TheEdge = "Living on the Edge",
    GetStarted = "First Session",
    History = "History",
    America = "America",
	Corporations = "Corporations",
    Slang = "Slang",	
	Maps = "Map"
}

class NightCity extends Component<{}, NightCityState> {

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
		return "";
	}

	public render() {
		return (
			<div>
				<h1 className="consoleText" onClick={this.toggleMobileView}>Night City:</h1>
				<div className={styles.NightCitySplit}>
					<Sidebar origin="nightcity" 
							showMobile={this.state.showMobileMenu} 
							choices={Object.values(Choices)} 
							clicked={this.changeSelection} 
							preDetermined={this.findCurrentLocation()}
							toggleMobile={this.toggleMobileView}
					/>
					<div className={styles.NightCityMain}>
						<Suspense fallback={<Loading/>}>
							<HashRouter>
								<Switch>
									<Route path="/nightcity/about">
										<NightCityIntroduction />
									</Route>
									<Route path="/nightcity/livingontheedge">
										<NightCityTheEdge />
									</Route>
									<Route path="/nightcity/firstsession">
										<NightCityStartingOut />
									</Route>
									<Route path="/nightcity/history">
										<NightCityHistory />
									</Route>
									<Route path="/nightcity/america">
										<NightCityAmerica />
									</Route>
									<Route path="/nightcity/corporations">
										<NightCityCorporations />
									</Route>
									<Route path="/nightcity/slang">
										<NightCitySlang />
									</Route>
									<Route path="/nightcity/map">
										<NightCityMaps />
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

export default NightCity;
