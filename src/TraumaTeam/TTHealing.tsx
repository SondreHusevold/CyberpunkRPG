import React, { Component } from 'react';
import styles from './TraumaTeam.module.css';
import tabbedpanel from '../StyleModules/TabbedPanel.module.css';
import Tabs from '../Common/Tabs';

enum HealingSections {
    About = "About",
	FirstAid = "First Aid",
    MedTech = "Medical Tech",
    Nanomachines = "Nanotechnology",
    Time = "Time"
}

interface TTHealingState {
    section: HealingSections;
}

class TTHealing extends Component<{}, TTHealingState> {

    public constructor(props: {}) {
        super(props);
        
        this.state = {
            section: HealingSections.About
        }
	}

	public setSection = (section: HealingSections) => {
		this.setState({
			section: section
		});
	}
	
	public renderFirstAid = () => {
		return (
			<div>
                <p>First Aid involves cleaning and dressing the wounds, administering medication, setting broken limbs and putting on splints. </p>
                <p>When a character makes a successful First Aid skill check, the patient will recover at the rate of 0.5 points per day. </p>
                <div className={tabbedpanel.ExampleBorder}>
                    <p>Example: A Light wound would be healed in 8 days. A Critical wound would heal in 24 days, a Mortal 3 wound in 56 days. </p>
                    <p>Only one check need be made. You may (within reason and at Referee’s discretion), perform first aid on yourself. </p>
                    <p> On an unsuccessful roll, the patient regains no points. New attempts may be made once per day until a successful roll is made.</p>
                </div>
                <h2>Speed heal drugs:</h2>
                <p>Drugs can be used to speed the healing rate by 1 additional point per day.</p>
                <p>Expensive and often proscribed, these drugs have a neural side effect of reducing the patient’s REF stat by 1D6/3 for a week after use.</p>
                <p>Speedheal costs 1650eb per treatment.</p>
			</div>
		)
	}

	public renderMedicalTech = () => {
		return (
			<div>
                <p>Medical Tech skill assumes that the character has studied medicine in a professional setting.</p>
                <p>This gives him the ability to perform surgery, prescribe drugs, and know the proper treatment of injuries. He can replace damaged organs with vatgrown pieces, graft on new limbs, orinstall cyber limbs.</p>
                <u><h3>You cannot perform Medical Tech skills on yourself.</h3></u>
                <p>A character with Medical Tech skills makes a check as if using the First Aid skill, however, with Medical Tech, the patient will recover at the rate of 1 point per day.</p>
                <div className={tabbedpanel.ExampleBorder}>
                    <p>For example, a light wound would be healed in 4 days. A Mortal 3 wound would healin 28 days. </p>
                    <p>Using Medical Tech skills supersedes the use of First Aid skills; a patient on which both have been successfully performed regains points at the rate of 1 per day, not 1.5!</p>
                    <p>As with First Aid, the patient regains no points until a successful roll has been made. However, second attempts may be made once per day until a successful roll is made.</p>
                </div>
			</div>
		)
	}

	public renderTime = () => {
		return (
			<div>
                <p>The first thing to remember is that after a First Aid or Medical Tech roll is made, the patient still has to actually recover (this isnt a fantasy game where a magician can lay on hands and the gutshot victim springs up ready to tackle the next challenge). </p>
                <p>Each Wound State imposes certain limits on the character: </p>
                <ul className={styles.LiPadding}>
                    <li>Light Wound: The patient is fully ambulatory; he can go about his business with a minor amount of pain. </li>
                    <li>Serious Wound: The patient is ambulatory, but will need his dressings changed once a day, and will be at -2 REF for all actions. </li>
                    <li>Critical Wound: The patient must spend at least half of his day in bed in order to regain any lost points of damage. Other activities must be limited at simple tasks, at 1 -4 REF to all actions. Dressings must be changed twice a day, and nursing care of some sort must be available.</li>
                    <li>Mortal Wound: The patient is bedridden. At Mortal Wounds 3 and above, he is probably comatose (50%) most of the time, and wired into all kinds of machinery for life support. He requires constant care during the entire process, although he will not have to make Death Saves (he’s been stabilized).</li>
                </ul>
			</div>
		)
    }
    
    public renderNanotech = () => {
        return (
            <div>
                <p>Nanotechnology involves the use of incredibly tiny, psuedo-organic machines to perform minute surgical tasks.</p>
                <p>These tiny tools can be programmed to repair damaged cells with molecule-sized polymer threads, or to act as temporary bridges between mutilated nerve endings.</p>
                <p>Combined with tailored antibodies, nanotech devices can speed healing to twice the normal rate (patients recover 1 point per day in addition to normal healing). A Light Wound for example, would be healed in two days, while a Mortal Wound 0 would completely heal in eight days. </p>
                <p>When combined with speed healing drugs, this rate is increased to 3 points per day, allowing the same mortally wounded character to be back in action in an unbelievable <u>six days!</u></p>
                <p>Here’s the catch: Besides being expensive (1500 eb. per treatment) nanotech is available only in certain hospitals (1 in 10).</p>
                <p>But if you’ve got the money, it’s the best option for getting back on the Street fast.</p>
            </div>
        )
    }

	public renderAbout = () => {
		return (
			<div>
                <h3>Okay, so you’re not on a slab in Savage Doc's place... </h3>
                <p>In order to recover from damage, characters must make some type of medical skill check. Otherwise, the patient continues to take damage (from infection and system shock) at the rate of 2 points per day.</p>
                <p>If the patient is at a Mortal Wound State, he must make a daily Death Save as well as taking this damage.</p>
                <p>Without medical aid, you're going to run out of luck pretty soon. This is probably why humans invented medicine in the first place. </p>
                <div className={tabbedpanel.ExampleBorder}>
                    <span>HEALING = (TECH + FIRST AID/MEDICAL TECH + 1D10) > DAMAGE.</span>
                </div>
                <p>To make a successful medical skill check, you must roll a value (using TECH, your medical Skill and 1D10) greater than the total number of points of damage the patient has taken.</p>
                <p>Medical skill checks are made with two skills, First Aid or Medical Tech.</p>

			</div>
		)
	}

	public renderChoice = () => {
		switch(this.state.section) {
            case HealingSections.About:
                return this.renderAbout();
			case HealingSections.FirstAid:
				return this.renderFirstAid();
			case HealingSections.MedTech:
				return this.renderMedicalTech();
			case HealingSections.Time:
                return this.renderTime();
            case HealingSections.Nanomachines:
                return this.renderNanotech();
		}

		return "";
	}

	public isActive = (selection: HealingSections) => {
		return this.state.section === selection;
    }

	public render() {

		return (
            <Tabs getContent={this.renderChoice} 
                isActive={this.isActive} 
                sections={HealingSections} 
                title="Healing:" 
                switchContent={this.setSection}
            />
		);
	}
}

export default TTHealing;
