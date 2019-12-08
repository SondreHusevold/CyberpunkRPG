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
	hasLoaded: boolean;
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
			showMobileMenu: false,
			hasLoaded: false
		}
	}

	public changeSelection = (newSelection: string) => {
		this.setState({
			selection: newSelection,
			showMobileMenu: false,
			hasLoaded: false
		});
	}

	public setLoading = (hasRendered: boolean) => {
		console.log("HAS RENDERED:" + hasRendered);
		this.setState({
			hasLoaded: hasRendered
		});
	}

	public getCurrentSelection = () => {
		switch(this.state.selection) {
            case Choices.Introduction:
                return <NightCityIntroduction hasLoaded={this.setLoading} />
            case Choices.GetStarted:
                return <NightCityStartingOut hasLoaded={this.setLoading} />
            case Choices.TheEdge:
                return <NightCityTheEdge hasLoaded={this.setLoading} />
            case Choices.History:
                return <NightCityHistory hasLoaded={this.setLoading} />
			case Choices.America:
				return <NightCityAmerica hasLoaded={this.setLoading} />
			case Choices.Slang:
				return <NightCitySlang hasLoaded={this.setLoading} />
			case Choices.Corporations:
				return <NightCityCorporations hasLoaded={this.setLoading} />
			case Choices.Maps: 
				return <NightCityMaps hasLoaded={this.setLoading} />
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
					<Suspense fallback={<Loading hasLoaded={this.state.hasLoaded } />}>
						<div className={styles.NightCityMain}>
							<div className={this.state.hasLoaded ? "" : styles.NotLoaded}>
								{this.getCurrentSelection()}
							</div>
							<Loading hasLoaded={this.state.hasLoaded} />
						</div>
					</Suspense>
				</div>

			</div>
		);
	}
}

export default NightCity;
