import React, { Component, Suspense } from 'react';
import styles from './NightCity.module.css';
import Sidebar from '../Common/Sidebar.Navigation';
import { Route, Routes } from 'react-router-dom';
import Loading from '../Common/Loading';
import NightCityIntroduction from './NCIntroduction';
import NightCityStartingOut from './NCStartingOut';
import NightCityTheEdge from './NCLivingOnTheEdge';
import NightCityHistory from './NCHistory';
import NightCityAmerica from './NCAmerica';
import NightCityCorporations from './NCCorporations';
import NightCitySlang from './NCSlang';
import NightCityMaps from './NCMaps';
import NightCityBooks from './NCBooks';

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
	Maps = "Map",
	Books = "Books"
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
							<Routes>
									<Route path="about" element={<NightCityIntroduction />} />
									<Route path="livingontheedge" element={<NightCityTheEdge />}/>
									<Route path="firstsession" element={<NightCityStartingOut />}/>
									<Route path="history" element={<NightCityHistory />}/>
									<Route path="america" element={<NightCityAmerica />}/> 
									<Route path="corporations" element={ <NightCityCorporations />} />
									<Route path="slang" element={ <NightCitySlang />} />
									<Route path="map" element={<NightCityMaps />} />
									<Route path="books" element={<NightCityBooks />} />
							</Routes>
						</Suspense>
					</div>
				</div>
			</div>
		);
	}
}

export default NightCity;
