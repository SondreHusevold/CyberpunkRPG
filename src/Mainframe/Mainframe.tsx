import React, { Component } from 'react';
import Classes from '../Classes/Classes'
import Interlock from '../InterlockSystem/Interlock';
import { MainSection } from '../MainMenu/MainMenu';
import styles from './Mainframe.module.css';
import "./ConsoleText.css";
import FridayNightFirefight from '../FNFF/FridayNightFirefight';

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
			videoLocation = "assets/Background/OutsideVideo.webm";
		}
		else {
			videoLocation = "assets/Background.mp4"
		}
		return <video loop muted autoPlay className={styles.fullscreenbgvideo} src={videoLocation}/>
	}

	public renderSection() {
		switch (this.props.currentSection) {
			case MainSection.Classes:
				return <Classes/>
			case MainSection.InterlockSystem:
				return <Interlock/>
			case MainSection.NightCity:
				return <h1 className="consoleText">Night City:</h1>
			case MainSection.FNFF:
				return <FridayNightFirefight />
			case MainSection.TraumaTeam:
				return <h1 className="consoleText">Trauma Team:</h1>
			case MainSection.Cyberware:
				return <h1 className="consoleText">Cyberware:</h1>
			default:
				return (
					<div>
						<h1 className="consoleText">Welcome, netrunner.</h1>
						<div className={styles.mainframeVideo}>
							<span className={styles.videoDescription}>{'>'} Current view from:</span>
							{
								Object.values(Feeds).map((feed) => {
									return <span key={feed} className={styles.videoNav + " " + (this.state.selectedVideo === feed ? styles.activeVideo : "")} onClick={this.switchFeed}>{feed}</span>
								})
							}
							{this.getFeed()}
						</div>
					</div>
				)
		}
	}

	public render() {		
		return (
			<div className={styles.Mainframe}>
				{this.renderSection()}
			</div>
		);
	}
}

export default Mainframe;
