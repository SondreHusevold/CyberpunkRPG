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
import { Switch, Route, Router } from 'react-router-dom';

enum Feeds {
	Realspace = "Realspace",
	Netspace = "Netspace"
}

interface IMainframeProps {
	currentSection: MainSection;
	history: any;
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
				<Router history={this.props.history}>
					<Switch>
						<Route exact path="/CyberpunkRPG">
							{this.renderHome()}
						</Route>
						<Route path="/CyberpunkRPG/nightcity">
							<NightCity history={this.props.history} />
						</Route>
						<Route path="/CyberpunkRPG/classes">
							<Classes history={this.props.history} />
						</Route>
						<Route path="/CyberpunkRPG/interlocksystem">
							<Interlock history={this.props.history} />
						</Route>
						<Route path="/CyberpunkRPG/fnff">
							<FridayNightFirefight history={this.props.history} />
						</Route>
						<Route path="/CyberpunkRPG/traumateam">
							<TraumaTeam history={this.props.history} />
						</Route>
						<Route path="/CyberpunkRPG/cyberware">
							<Cyberware history={this.props.history} />
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default Mainframe;
