import React, { Component } from 'react';
import { StatService } from '../Services/StatsAndSkillsService';
import pictureAnimation from '../StyleModules/Pictures.module.css';
import styles from './Interlock.module.css';

export interface Stat {
    name: string;
    short: string;
    description: string;
}

interface InterlockStatsState {
    chosen: Stat | null;
    stats: Stat[];
}

class InterlockStats extends Component<{}, InterlockStatsState> {

    public constructor(props: {}) {
        super(props);
        
        this.state = {
            chosen: null,
            stats: []
        }

        this.setStats();
    }

    public async setStats() {
        this.setState({
            stats: await StatService.getStats()
        })
    }

    public clearSubMenu = () => {
        this.setState({
            chosen: null
        });
    }

    public setSubMenu = (menu: Stat) => {
        this.setState({
            chosen: menu
        });
    }

    public renderSubMenu = () => {
        if(this.state.chosen != null) {
           return <StatRender chosen={this.state.chosen} back={this.clearSubMenu} />
        }

        return (
            this.state.stats.map((stat) => 
                <button className={pictureAnimation.InterlacedPicture} key={stat.name} onClick={() => this.setSubMenu(stat)}>{stat.name} ({stat.short})</button> 
            )
        );
    }

	public render() {

		return (
			<div className={styles.InterlockStats}>
				<div className={styles.InterlockIntroductionText}>
					<h1>Stats:</h1>
                    <p>Each Cyberpunk character has nine Statistics values representing the level of native ability of the character in specific areas of activity.</p>
                    <p>These Stats are rated from two to ten, with two being the worst possible, ten being the best possible, and the average falling at about five or six.</p>
                    <p>Stats are called <i>Ability Scores</i> in Pathfinder and <i>Attributes</i> in the World of Darkness systems.</p>
                    <hr/>
                    <div className={styles.InterlockStatsSubmenu}>
                        {this.renderSubMenu()}
                    </div>
                    <hr/>
				</div>
				<div className={styles.InterlockIntroductionPicture}>
					<img className={pictureAnimation.InterlacedPicture} alt="Stats" src="/assets/Visuals/Stats.png"/>
				</div>
			</div>
		);
	}
}

interface StatProp {
    chosen: Stat;
    back: () => void;
}

class StatRender extends Component<StatProp, {}> {

    public renderBT = () => {
        return (
            <div>
                <p>Strength, Endurance and Constitution are all based on the character’s Body Type. Body Type determines how much damage you can take in wounds, how much you can lift or carry, how far you can throw, how well you recover from shock, and how much additional damage you cause with physical attacks.</p>
                <p>Body Type is important to all character types, but to Solos, Rockerboys and Nomads most of all.</p>
                <h2>{'Body types & Points'}</h2>
                    <p>2 pts ...................... Very Weak</p>
                    <p>3-4 pts ...................... Weak</p>
                    <p>5-7 pts ...................... Average</p>
                    <p>8-9 pts ...................... Strong</p>
                    <p>10 pts ...................... Very Strong</p>

                <p style={{border: "1px solid red", padding: "20px"}}>
                    <b>You may carry up to 10x your Body Type in kg. You may also dead lift 40 times your Body Type in kg.</b>
                </p>
            </div>
        )
    }

    public renderBTM = () => {
        return (
            <div>
                <p>Not all people take damage the same way. For example, it takes a lot more damage to stop Arnold The Terminator than it does Arnold the Nerd. This is reflected by the Body Type Modifier, a special bonus used by your character to reduce the effects of damage. The Body type modifier is subtracted from any damage your character takes in combat.</p>
                <h2>{'Body type modified table'}</h2>
                <div className={styles.InterlockStatsBTModifiedTable}>
                    <p>Very Weak...................... -0</p>
                    <p>Weak ...................... -1</p>
                    <p>Average ...................... -2</p>
                    <p>Strong ...................... -3</p>
                    <p>Very Strong ...................... -4</p>
                    <p>Superhuman* ...................... -5</p>
                    <small>(*Superhuman is only available with cybernetics.)</small>
                </div>
                    <p>For example, say you took ten points of damage. If you were a <b>Very Weak</b> Body Type, you would take the full ten. But with a <b>Very Strong</b> Body Type, you'd only take (10-4=6) six points of damage.</p>
                    <p>Remember; no matter how cybered up you get, make sure you're solid meat underneath.</p>
            </div>
        )
    }

    public renderText = () => {
        
        if(this.props.chosen.short === "BT") {
            return this.renderBT();
        }
        else if(this.props.chosen.short === "BTM") {
            return this.renderBTM();
        }
        else {
            return this.props.chosen.description.split("\n").map((description) => {
                return <p>{description}</p>
            });
        }
    }

    public render() {
        return (
            <div className={styles.InterlockStatSubmenuDetails}>

                <h2>{this.props.chosen.name}:</h2>
                { this.renderText() }
                <div className={styles.InterlockReturnSubmenuWrapper} onClick={this.props.back}>
                    > [<span className={styles.InterlockReturnSubmenu}> RETURN </span>]
                </div>
            </div>
        )
    }
}

export default InterlockStats;
