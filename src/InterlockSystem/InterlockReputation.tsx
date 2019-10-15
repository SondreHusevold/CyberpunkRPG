import React, { Component } from 'react';
import styles from './InterlockReputation.module.css';
import tabbedpanel from '../StyleModules/TabbedPanel.module.css';

enum ReputationSections {
	About = "About",
	Table = "Reputation Table",
	Facedowns = "Facedowns"
}

interface InterlockReputationState {
    section: ReputationSections;
}

class InterlockReputation extends Component<{}, InterlockReputationState> {

    public constructor(props: {}) {
        super(props);
        
        this.state = {
            section: ReputationSections.About
        }
	}
	
	public renderAbout = () => {
		return (
			<div>
				<p>Reputation is a measure of things your character may do so well (or badly) that he has actually become well known for them. A reputation for something is always established by a character's actions, and is then awarded by the Referee. Whenever a character encounters new people in new situations , his reputation may actually influence how they react to him. Sometimes this can be very good. Other times, it can be very bad.</p>
                <div className={tabbedpanel.ExampleBorder}>
                    <p>Example:</p>
                    <p>Jake the Hammer is known far and wide as a streetfighter; he is feared throughout Night City for his trademark killer punch. Over time, the Referee has awarded Jake a Reputation of 6 points. Anyone who meets Jake for the first time must roll higher than 6 on 1D10 in order to have not heard of Jake's name.</p>
                    <p>On this particular night, jake swaggers into the Totentanz and orders a drink. Down the bar, Ripperjack hears the bartender address jake by name.</p>
                    <p>Ripperjack puts two and two together (a 3 on 1D10). This "lake” must be the sonovagun who caught The Jack's kid brother in an alley and beat him to death with his metalshod fists. Ripperjack's eyes flare, and his teeth grind down. He pulls out his Minami 10 and blows a hole through Jake's back.</p>
                </div>
                <p>Reputation can also be a disadvantage. Whenever you do something extremely uncool (show cowardice, desert or betray someone, etc.), the Referee can still award you Reputation Points for these actions. The more points you score, the more likely people are to have heard about your infamous deeds (once again, roll 1D10).</p>
                <p>However, this time they won't be impressed. If your rep is for cowardice, it can even work against you.</p>
			</div>
		)
    }
    
    public renderTable = () => {
        return(
            <div>
                 <div className={styles.AwardTable}>
                    <span>Level</span>
                    <span>Who knows about you</span>
                    <span>1</span>
                    <span>Anyone who was there at the time knows. </span>
                    <span>2</span>
                    <span>Stories have gotten around to immediate friends. </span>
                    <span>3</span>
                    <span>All your co-workers and casual acquaintances know. </span>
                    <span>4</span>
                    <span>Stories are all over the local area.</span>
                    <span>5</span>
                    <span>Your name is recognized by others beyond your local area.</span>
                    <span>6</span>
                    <span>You are known on sight by others beyond your local area. </span>
                    <span>7</span>
                    <span>A news story or two has been written about your exploits.</span>
                    <span>8</span>
                    <span>Your exploits regularly make the headlines and screamsheets.</span>
                    <span>9</span>
                    <span>Your exploits always make the screamsheets and TV.</span>
                    <span>10</span>
                    <span>You're known worldwide.</span>
                </div>
            </div>
        )
    }

    public renderFacedowns = () => {
        return(
            <div>
                <p>Reputation in Cyberpunk has one other big effect— facedowns. </p>
                <p>Remember; a lot of combat in this genre comes down to a duel of wills; who's tougher, meaner, and looks more ready to prove it. This often leads to what are called facedowns; when two heavies on the Street square off just before a fight, or to see who'll back down from a confrontation.</p>
                <p>When making a facedown, both participants will roll:</p>
                <div className={tabbedpanel.ExampleBorder}>
                    <h3>1D10 + Cool + Reputation</h3>
                    <p>Note: If one of the opponents has a reputation for cowardice, his value will be treated as a negative number.</p>
                </div>
                <p>In a facedown, the loser has the option of backing down or making any subsequent attacks against this particular opponent at a -3 (due to fear) until he has successfully defeated that opponent once. On a tied roll, both parties are unsure and no penalties will apply.</p>
                <div className={tabbedpanel.ExampleBorder}>
                    <p>Example:</p> 
                    <p>The Ironmaster is a feared boosterganger known throughout Night City. In the middle of the Slammer, he runs across an attractive young woman and her male companion. The Ironmaster says "Take a clue and vanish, Kid-trash, the input's with me now." The Kid stands up and says, "Vanish yourself, burnbrain.” A faceoff begins.</p>
                    <p>The Ironmaster is known all over the City, giving him a Rep of 6.</p>
                    <p>What he doesn't know s that the Kid is a 5th Dan black belt in Kenpo Karate. Although he's new in the Zone and hasn't much of a Rep (3), he is totally selfposessed and aware of his skills (COOL=10). </p>
                    <p>The Ironmaster may be tough, but he's mostly a bully. His COOL is only 4, bolstered by a Reputation made on a few lucky fights. His total roll is 4+4+(roll of 6)=14.</p>
                    <p> The Kid's total is 3+10+(roll of 3)=16. The Ironmaster feels a strange unease as he stares at the calm, ready-to-rock Kid. His eyes shift away and he backs down with a grunt.</p>
                </div>
            </div>
        )
    }

	public setSection = (section: ReputationSections) => {
		this.setState({
			section: section
		});
	}


	public renderChoice = () => {
		switch(this.state.section) {
			case ReputationSections.About:
				return this.renderAbout();
			case ReputationSections.Table:
				return this.renderTable();
			case ReputationSections.Facedowns:
				return this.renderFacedowns();
		}

		return "";
	}

	public isActive = (selection: ReputationSections) => {
		return this.state.section === selection;
    }

	public render() {

		return (
			<div className={tabbedpanel.ThreeTabs}>
				<h1 className={tabbedpanel.Title}>Reputation:</h1>
				{
					Object.values(ReputationSections).map((section: ReputationSections) => {
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

export default InterlockReputation;
