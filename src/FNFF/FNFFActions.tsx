import React, { Component } from 'react';
import pictureAnimation from '../StyleModules/Pictures.module.css';
import tabbedpanel from '../StyleModules/TabbedPanel.module.css';

enum ActionsSections {
	About = "About",
	More = "More than one",
	Ambushes = "Ambushes",
	LoS = "Line of Sight"
}

interface FNFFActionsState {
	section: ActionsSections;
	imageAnimation: boolean
}

class FNFFActions extends Component<{}, FNFFActionsState> {

    public constructor(props: {}) {
        super(props);
        
        this.state = {
			section: ActionsSections.About,
			imageAnimation: true
        }
	}

	public setSection = (section: ActionsSections) => {
		this.setState({
			section: section
		});
	}
	
	public renderAbout = () => {
		return (
			<div>
				<p>During your part of the round, you may perform one <b>action</b> without penalty.</p>

                <div className={tabbedpanel.ExampleBorder} >
                    <h3>Examples:</h3>
                    <ul>
                        <li>Move up to your full Movement (3x your Movement Allowance in meters) per round. </li>
                        <li>Attack up to your weapon’s maximum Rate of Fire (ROF), or make a Melee attack. </li>
                        <li>Dodge (making yourself harder to hit. Melee attacks only.) </li>
                        <li>Parry (deflecting damage onto something else.) </li>
                        <li>Escape a hold or trap. </li>
                        <li>Aim (gaining +1 to hit for every consecutive turn of aiming up to 3 rounds) </li>
                        <li>Reload or change weapons. </li>
                        <li>Mount or dismount from a vehicle. </li>
                        <li>Repair or give Medical Aid. </li>
                        <li>Perform a non-combat task.</li>
                    </ul>
                </div>
			</div>
		)
	}

	public renderMore = () => {
		return (
			<div>
                <h3>More than one action:</h3>
                <p>You may perform more than one action at a -3 penalty to each successive action. </p>
                <h3>Two weapon attacks:</h3>
                <p>Two weapon attacks can be made at a -3 to hit penalty on both weapons used.</p>
				<div className={tabbedpanel.ExampleBorder}>
					<h2>Don't forget to take some penalties!</h2>
					<p>Maybe you have a 90% chance to hit, why not equip that extra weapon or run while gunning? It'll make it harder for enemies to hit you.</p>
					<p>How about moving behind cover? Quick reloading after shooting? Sliding across the room and shooting someone in the face? 
						The possibilities here are endless, so don't forget to take some penalities to do more stuff.</p>
					<p>Because standing still in a gunfight will only make you predictable.</p>
				</div>
			</div>
		)
	}

	public renderAmbushes = () => {
		return (
			<div>
                <p>Sometimes, the best way to deal with a very powerful opponent is to get the drop on him from behind; in short, setting an ambush.</p>
                <div className={tabbedpanel.ExampleBorder}>
					<p>AMBUSH = +5 TO ATTACK FOR 1 ROUND</p>
				</div>
                <p>You may ambush or backstab by announcing your intent to hide or lie in ambush for a target. You can elect to set up an ambush any time:</p>
                <ul>
                    <li>The opponent is unaware of your location and your intention to attack. This can be accomplished by setting up a hiding place ahead of time or taking advantage of a melee to get under cover and waiting for a shot.</li>
                    <p>A victim of an ambush must make an Awareness roll greater than your Stealth Skill+INT+1D10, or you have automatically succeeded.</p>
                    <li>The opponent’s attention is on another situation, such as another attack or a task requiring great concentration. This can be accomplished by creating a distraction for your opponent, or by sneaking up on him while he is in combat with another combatant.</li>
                </ul>
                <p>An ambush doesn’t mean you act first— it just means you have an attack advantage.</p>
                <p>Initiative for the round is made as usual, and the ambushing character can spring the trap on his part of the round or can wait to see what develops before making his attack. </p>

			</div>
		)
	}

	public renderLoS = () => {
		return (
			<div>
                <p>Whenever you are facing your target and have a clear path between you, you can attack.</p>
                <p>You can clearly see anything forward of your shoulders.</p>
                <p>See image below for clear paths and facings:</p>
				{this.renderImage()}
			</div>
		)
	}

	public renderImage = () => {
		if(this.state.imageAnimation) {
			return <img className={pictureAnimation.InterlacedPicture} style={{ cursor: "pointer" }} 
					onClick={this.toggleImageAnimation} alt="Line of sight" title="Click to remove background." src="/assets/Visuals/LineOfSight.png"
					/>
		}
		return <img onClick={this.toggleImageAnimation} style={{ cursor: "pointer" }} alt="Line of sight" src="/assets/Visuals/LineOfSightNo3D.png"/>
	}

	public toggleImageAnimation = () => {
		this.setState({
			imageAnimation: !this.state.imageAnimation
		})
	}

	public renderChoice = () => {
		switch(this.state.section) {
			case ActionsSections.About:
				return this.renderAbout();
			case ActionsSections.More:
				return this.renderMore();
			case ActionsSections.Ambushes:
				return this.renderAmbushes();
			case ActionsSections.LoS:
				return this.renderLoS();
		}

		return "";
	}

	public isActive = (selection: ActionsSections) => {
		return this.state.section === selection;
    }

	public render() {

		return (
			<div className={tabbedpanel.FourTabs}>
				<h1 className={tabbedpanel.Title}>Actions:</h1>
				{
					Object.values(ActionsSections).map((section: ActionsSections) => {
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

export default FNFFActions;
