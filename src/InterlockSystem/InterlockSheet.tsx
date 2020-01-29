import React, { Component } from 'react';
import styles from './Interlock.module.css';
import animations from '../StyleModules/Animations.module.css';
import splitter from '../StyleModules/Splitter.module.css';
import FadeInPicture from '../Common/FadeInPicture';

class InterlockSheet extends Component<{}, {}> {

    public openSheetInNewWindow = () => {
        window.open("/CyberpunkRPG/assets/CharacterSheet/ModernCharacterSheet.pdf", "_blank"); 
    }

    public openOldSheetInNewWindow = () => {
        window.open("/CyberpunkRPG/assets/CharacterSheet/CB2020CharacterSheet.pdf", "_blank"); 
    }


	public render() {

		return (
            <div className={animations.FadeInFast + " " + styles.InterlockIntroduction}>
                <div className={styles.Explanations}>
                    <h1>Character Sheet:</h1>
                    <div  onClick={this.openSheetInNewWindow}>
                        <FadeInPicture mobile="100% 0%" title="Click me." alt="Lifepath" src="/CyberpunkRPG/assets/Visuals/CharacterSheetShowcase.webp" />
                    </div>
                    <p>We'll be going through this during the first session, but here's some information so you know how the character creation process is:</p>
                    <h2>Getting the sheet:</h2>
                    <p>This is a fan modified, modern version of the {"<"}<u className={styles.ClickablePicture} onClick={this.openOldSheetInNewWindow}>original Cyberpunk 2020 character sheet</u>{">"}.</p>
                    <p>It has the same information, but is more tidy and has additional spaces for ammo tracking and contacts.</p>
                    <p>Click on the character sheet to see it in full.</p>
                    <p>If you want the original Cyberpunk 2020 sheet instead of the modern, you'll need to provide it yourself.</p>
                    <p>We'll go through and fill in the sheet during the first session.</p>
                    <h4>You do not need to print it out. The referee will print a copy for you.</h4>

                    <h2>Character points:</h2>
                    <p>Each character gets 50 character points to start with. The stats of the character will be bought using these points.</p>

                    <h3>Distribution:</h3>
                    <p>The stats you can buy are:</p>
                    <div className={styles.ExampleBorder}>
                        <span>INT, REF, TECH, COOL, ATTR, LUCK, MA, Body and EMP</span>
                    </div>
                    <p>Having a 3 in a stat means you're having serious problems. While a 2 or 1 would mean you're outright handicapped.</p>
                    <div className={styles.ExampleBorder}>
                        <span>No stat can be under 2. No stat can be over 8.</span>
                    </div>

                    <h3>Calculated stats:</h3>
                    <p>Some stats are not possible to point-buy directly and are calculated from other stats.</p>
                    <p>Run and Leap is determined by:</p>
                    <div className={splitter.TwoColumnSplitSmall}>
                        <div className={styles.ExampleBorder}>
                            <span>RUN = MA * 3</span>
                        </div>
                        <div className={styles.ExampleBorder}>
                            <span>LEAP = RUN / 4</span>
                        </div>
                    </div>
                    <p>Save and Lift is determined by:</p>
                    <div className={splitter.TwoColumnSplitSmall}>
                        <div className={styles.ExampleBorder}>
                            <span>Save = Body Type</span>
                        </div>
                        <div className={styles.ExampleBorder}>
                            <span>Lift = Body Type * 40</span>
                        </div>
                    </div>
                    <p>BTM is the Body Type Modifier and is determined by your Body Type. See stats for more information.</p>
                    <p>CBT stands for Combat Base Total and is your:</p>
                    <div className={styles.ExampleBorder}>
                        <span>CBT = REF + Preferred Weapon Skill + Weapon Accuracy + Modifiers like smartchipping, targeting optic cyberoptics and laser sights.</span>
                    </div>
                    

                    <h3>Reputation, Humanity and IP:</h3>
                    <p>Your starting reputation will be determined by the referee based on your character's background story. Being well known can be both a blessing and a curse.</p>
                    <p>The Humanity of your character is determined by:</p>
                    <div className={styles.ExampleBorder}>
                        <span>Humanity = EMP * 10</span>
                    </div>
                    <p>Remember, for every 10 points of humanity lost, you will lose a point of EMP.</p>
                    <p>Current IPs is what you have in IPs. Though these might be written at other parts of the sheet instead as they are usually connected to the skill you got IPs in.</p>

                    <h2>Skill points:</h2>
                    <p>You are given 40 points to distribute among your 10 career skills. At least one of these must be your special ability</p>
                    <p>These points cannot be used for your pickup skills.</p>
                    <p>You cannot have skills higher than 7.</p>
                    <p>You also get a (INT + REF) amount of skill points to distribute among your pickup skills (non-career skills). These cannot be used on your career skills.</p>
                    <p>Want more? Better start chippin' in or practice!</p>
                    
                    <h2>Background</h2>
                    <p>The background information of your character will either be put in by yourself, or partially generated through the Lifepath system.</p>
                    <p>See Lifepath for further information on how that works.</p>

                    <h2>Starting gear/cash/cybernetics:</h2>
                    <p>You're currently at Zetatech and have no possessions.</p>
                    <p>You do however have a Neuralware Processor (1000eb) and a Cybermodem Link (100eb), courtesy of Zetatech.</p>
                    <p>These are Neuralware and can be written under Cybernetics. There is no initial humanity loss for having these.</p>
                    <p>If you had cyberware before you came to be at Zetatech, they have been taken away from you and have either given away during the last company christmas party or simply sold for cash.</p>
                </div>
                <div className={styles.ClickablePicture} onClick={this.openSheetInNewWindow}>
                    <FadeInPicture title="Click me to see the entire sheet" alt="Sheet" src="/CyberpunkRPG/assets/Visuals/CharacterSheetShowcase.webp"/>
                </div>
            </div>
		);
	}
}

export default InterlockSheet;
