import React, { Component } from 'react';
import styles from './NightCity.module.css';
import Sidebar from '../Sidebar/Sidebar.Navigation';
import NightCityIntroduction from './NCIntroduction';
import NightCityStartingOut from './NCStartingOut';
import NightCityTheEdge from './NCLivingOnTheEdge';
import NightCityHistory from './NCHistory';
import NightCityAmerica from './NCAmerica';
import NightCitySlang from './NCSlang';
import NightCityCorporations from './NCCorporations';
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

	public getCurrentSelection = () => {
		switch(this.state.selection) {
            case Choices.Introduction:
                return <NightCityIntroduction />
            case Choices.GetStarted:
                return <NightCityStartingOut />
            case Choices.TheEdge:
                return <NightCityTheEdge />
            case Choices.History:
                return <NightCityHistory />
			case Choices.America:
				return <NightCityAmerica />
			case Choices.Slang:
				return <NightCitySlang />
			case Choices.Corporations:
				return <NightCityCorporations />
			case Choices.Maps: 
				return <NightCityMaps />
			default:
				return "";
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
				<h1 className="consoleText" onClick={this.toggleMobileView}>Night City:</h1>
				<div className={styles.NightCitySplit}>
					<Sidebar showMobile={this.state.showMobileMenu} 
							choices={Object.values(Choices)} 
							clicked={this.changeSelection} 
							preDetermined={Choices.Introduction}
							toggleMobile={this.toggleMobileView}
					/>
					<div className={styles.NightCityMain}>
						{this.getCurrentSelection()}
					</div>
				</div>
			</div>
		);
	}
}

export default NightCity;
