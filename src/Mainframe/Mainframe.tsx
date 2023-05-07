import React, { Component } from 'react';
import Classes from '../Classes/Classes'
import Interlock from '../InterlockSystem/Interlock';
import { MainSection } from '../MainMenu/MainMenu';
import styles from './Mainframe.module.css';
import "./ConsoleText.css";
import FridayNightFirefight from '../FNFF/FridayNightFirefight';
import TraumaTeam from '../TraumaTeam/TraumaTeam';
import Cyberware from '../Cyberware/Cyberware';
import NightCity from '../NightCity/NightCity';
import { Route, Routes } from 'react-router-dom';

enum Feeds {
	Realspace = "Realspace",
	Netspace = "Netspace"
}

interface IMainframeProps {
	currentSection: MainSection;
}

interface IMainframeState {
	selectedVideo: Feeds
}

class Mainframe extends Component<IMainframeProps, IMainframeState> {
	public constructor(props: IMainframeProps) {
		super(props);
		this.state = {
			selectedVideo: Feeds.Realspace
		};
	}

	public switchFeed = () => {
		let videoFeed = Feeds.Netspace;

		if(this.state.selectedVideo !== Feeds.Realspace)
			videoFeed = Feeds.Realspace;

		this.setState({
			selectedVideo: videoFeed
		});
	}

	public getFeed = () => {
		let videoLocation = "";
		if(this.state.selectedVideo === Feeds.Realspace) {
			videoLocation = "/assets/Background/OutsideVideo.webm";
		}
		else {
			videoLocation = "/assets/Background.mp4"
		}
		return <video loop muted autoPlay className={styles.fullscreenbgvideo} src={videoLocation}/>
	}

	public renderHome = () => {
		return (
			<React.Fragment>
				<h1 className="consoleText">Welcome, netrunner.</h1>
				<div className={styles.mainframeVideo}>
					<span className={styles.videoDescription}>{'>'} Current view from:</span>
					{
						Object.values(Feeds).map((feed) => {
							return <span key={feed} className={styles.videoNav + " " + (this.state.selectedVideo === feed ? styles.activeVideo : "")} 
							onClick={this.switchFeed}>{feed}</span>
						})
					}
					{this.getFeed()}
				</div>
			</React.Fragment>
		)
	}

	public render() {		
		return (
			<div className={styles.Mainframe}>
				<Routes>
					<Route path="nightcity/*" element={<NightCity />} />
					<Route path="classes/*" element={<Classes />} />
					<Route path="interlocksystem/*" element={<Interlock />} />
					<Route path="fnff/*" element={<FridayNightFirefight />} />
					<Route path="traumateam/*" element={<TraumaTeam />} />
					<Route path="cyberware/*" element={<Cyberware />} />
					<Route path="/" element={this.renderHome()} />
				</Routes>
			</div>
		);
	}
}

export default Mainframe;
