import React, { Component } from 'react';
import tabbedpanel from '../StyleModules/TabbedPanel.module.css';

enum TurnsSections {
	About = "Rounds/Turns",
	Starting = "Waiting",
	Pickup = "Party Initiative",
	House = "Snapshots"
}

interface FNFFTurnsState {
    section: TurnsSections;
}

class FNFFTurns extends Component<{}, FNFFTurnsState> {

    public constructor(props: {}) {
        super(props);
        
        this.state = {
            section: TurnsSections.About
        }
	}

	public setSection = (section: TurnsSections) => {
		this.setState({
			section: section
		});
	}
	
	public renderRoundsAndTurns = () => {
		return (
			<div>
				<p>Combat in FNFF is divided up into rounds, each representing 3 seconds. Every round, each player gets to do something.</p>
				<p>The order of the round is based on an inititative roll of 1D10 plus the players REF stat, with highest rolls moving first to lowest rolls
					moving last. Reflex boosts are added to this roll where applicable.
				</p>

				<p className={tabbedpanel.ExampleBorder}>INITIATIVE = ROLL 1D10 + REF. HIGHEST ROLL FIRST.</p>

				<p>Example:</p>
				<p>Players A, Band C all have REF stats of 10. A rolls a 5, B rolls an 8, and C rolls a 2.</p>
				<p>Turn order will be B, then A, then C.</p>
			</div>
		)
	}

	public renderWaiting = () => {
		return (
			<div>
				<p>You can elect to act later in the round, stepping in at any point to act.</p>
				<p>If you have elected to wait until another player's turn has come up, you will be able to act after they have taken their turn in the round.</p>
				<div className={tabbedpanel.ExampleBorder}>
					<p>Example:</p>
					<p>Turn order is player A, then B, then C.</p>
					<p>Player A decides to wait until player C has moved from cover, then take his shot.</p>
					<p>By waiting, the new turn order will be B, C then A.</p>
				</div>
			</div>
		)
	}

	public renderPartyInitiative = () => {
		return (
			<div>
				<p>You may want to speed up your play by designating one member of the group as the party leader and have him roll initiative for the whole group.</p>
				<p>His roll is added to REF scores of everyone in the group to determine when each member of the group will act.</p>
				<div className={tabbedpanel.ExampleBorder}>
					<p>PARTY INITIATIVE = LEADER ROLL + INDIVIDUAL REF</p>
				</div>
				<p>You are free to activate this way of initiative at any point during the session.</p>
			</div>
		)
	}

	public renderSnapshots = () => {
		return (
			<div>
				<p>By declaring a fast draw (aka snapshot) at the start of the round, you automatically add +3 to your initiative roll, taking a -3 penalty to hit (you're rushing into combat instead of preparing carefully).</p>
				<p>You also may not take advantage of scope, sights or other aiming advantages. The martial arts or melee verson of this technique is called the iai-jutsu or lightning strike.</p>
				<div className={tabbedpanel.ExampleBorder}>
					<p>FAST DRAW = +3 TO INITIATIVE, -3 TO HIT</p>
				</div>
				<p>Example:</p>
				<p>Ripperjack is faced with his long time enemy, Hargan.</p>
				<p>He knows Hargan has a higher REF than he does, so he elects to make an all out, blazing attack before the giant can get in a move.</p>
				<p>The snapshooting bonus will give him the +3 advantage he needs. Ripperjack's mono-katana arcs out in a searing iai-jutsu before Hargan can raise his own sword.</p>
				<p>Unfortunantly, the -3 point penalty for snapshots works against Ripperjack, and his attack misses his opponent by a mile.</p>
			</div>
		)
	}

	public renderChoice = () => {
		switch(this.state.section) {
			case TurnsSections.About:
				return this.renderRoundsAndTurns();
			case TurnsSections.Starting:
				return this.renderWaiting();
			case TurnsSections.Pickup:
				return this.renderPartyInitiative();
			case TurnsSections.House:
				return this.renderSnapshots();
		}

		return "";
	}

	public isActive = (selection: TurnsSections) => {
		return this.state.section === selection;
    }

	public render() {

		return (
			<div className={tabbedpanel.FourTabs}>
				<h1 className={tabbedpanel.Title}>Rounds, turns and initiative:</h1>
				{
					Object.values(TurnsSections).map((section: TurnsSections) => {
						return (
							<span key={section}
								className={ tabbedpanel.NavLink + " " + (this.isActive(section) ? tabbedpanel.ActiveNav : tabbedpanel.NotActiveNav)} 
								onClick={() => {this.setSection(section)}}
							>{section}</span>
						)
					}) 
				}
				<div className={tabbedpanel.Content}>
					{this.renderChoice()}
				</div>
			</div>
		);
	}
}

export default FNFFTurns;
