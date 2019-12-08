import React, { Component, Suspense } from 'react';
import styles from './NightCity.module.css';
import Sidebar from '../Common/Sidebar.Navigation';
import Loading from '../Common/Loading';

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
				return <div/>;
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
						<Suspense fallback={<Loading/>}>
							{this.getCurrentSelection()}
						</Suspense>
					</div>
				</div>
			</div>
		);
	}
}

export default NightCity;
