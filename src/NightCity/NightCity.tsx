import React, { Component } from 'react';
import styles from './NightCity.module.css';
import Sidebar from '../Sidebar/Sidebar.Navigation';
import NightCityIntroduction from './NCIntroduction';
import NightCityStartingOut from './NCStartingOut';
import NightCityTheEdge from './NCLivingOnTheEdge';
import NightCityHistory from './NCHistory';
import NightCityAmerica from './NCAmerica';
import NightCitySlang from './NCSlang';

interface NightCityState {
    selection: string | null;
} 

enum Choices {
    Introduction = "About",
    TheEdge = "Living on the Edge",
    GetStarted = "First Session",
    History = "History",
    America = "America",
    Slang = "Slang",
    Corporations = "Corporations",
    Maps = "Maps"
}

class NightCity extends Component<{}, NightCityState> {

	public constructor(props: {}) {
		super(props);

		this.state = {
            selection: Choices.Introduction
		}
	}

	public changeSelection = (newSelection: string) => {
		this.setState({
			selection: newSelection
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
			default:
				return "";
		}
	}

	public render() {
		return (
			<div>
				<h1 className="consoleText">Night City:</h1>
				<div className={styles.NightCitySplit}>
                    <Sidebar choices={Object.values(Choices)} clicked={this.changeSelection} preDetermined={Choices.Introduction}/>
					<div className={styles.NightCityMain}>
						{this.getCurrentSelection()}
					</div>
				</div>
			</div>
		);
	}
}

export default NightCity;
