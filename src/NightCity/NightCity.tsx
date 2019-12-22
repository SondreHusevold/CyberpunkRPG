import React, { Component, Suspense } from 'react';
import styles from './NightCity.module.css';
import Sidebar from '../Common/Sidebar.Navigation';
import { Router, Switch, Route } from 'react-router-dom';

const NightCityIntroduction = React.lazy(() => import('./NCIntroduction'));
const NightCityStartingOut = React.lazy(() => import('./NCStartingOut'));
const NightCityTheEdge = React.lazy(() => import('./NCLivingOnTheEdge'));
const NightCityHistory = React.lazy(() => import('./NCHistory'));
const NightCityAmerica = React.lazy(() => import('./NCAmerica'));
const NightCitySlang = React.lazy(() => import('./NCSlang'));
const NightCityCorporations = React.lazy(() => import('./NCCorporations'));
const NightCityMaps = React.lazy(() => import('./NCMaps'));

interface NightCityState {
	selection: string | null;
	showMobileMenu: boolean;
} 

interface NightCityProps {
	history: any;
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

class NightCity extends Component<NightCityProps, NightCityState> {

	public constructor(props: NightCityProps) {
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
						<Suspense fallback={<div/>}>
							<Router history={this.props.history}>
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
							</Router>
						</Suspense>
					</div>
				</div>
			</div>
		);
	}
}

export default NightCity;
