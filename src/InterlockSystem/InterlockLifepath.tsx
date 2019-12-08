import React, { Component } from 'react';
import styles from './InterlockLifepath.module.css';
import animations from '../StyleModules/Animations.module.css';
import FadeInPicture from '../Common/FadeInPicture';

class InterlockLifepath extends Component<{}, {}> {

	public render() {

		return (
            <div className={animations.FadeInFast + " " + styles.Lifepath}>
                <div className={styles.Explanations}>
                    <h1>Lifepath:</h1>
                    <FadeInPicture mobile="100% 0%" title="Choose your path." alt="Lifepath" src="assets/Visuals/Lifepath.webp"/>
                    <p>You got this half-formed person standing there. You got some stats, maybe an vague idea of where you're going with the character, but nothing else.</p>
                    <p>So how do you take this Blank and make him really Cyberpunk? You start with the Lifepath.</p>
                    <p>Lifepath is a flow chart of "plot complications", designed to help you give your Cyberpunk character an authentically dark future background.
                        So in practice it is a way to randomly or selectively flesh out your character.
                    </p>
                    <p>Its seven sections cover your national and ethnic origins, your family, friends, enemies, personal habits and even key events on a yearly basis. </p>
                    <div className={styles.Bordered}>
                        <h4>
                            <i>It's intended primarily as a guide; if you encounter something you don't think fits the character you've envisioned, 
                            feel free to change the path as you see fit.</i>
                        </h4>
                        <p style={{paddingLeft: '40px'}}>- Rulebook</p>
                    </div>
                    <p>The point above needs to be very clear. The lifepath system is a <u>guide</u> and not a forced character generator. 
                        If you rolled something and it didn't fit your character, roll again or choose something else.
                    </p>
                    <p>Don't like the available choices? Make something up. It is supposed to be your character.
                        Don't choose something that doesn't fit your vision because you feel the need to.</p>
                    <p>Maybe you get some ideas? Maybe it will  trigger some thoughts about your character's background story?</p>
                    <p>Take it for a spin and see where you land.</p>

                    <hr/>
                    <h2>Using the Lifepath system:</h2>
                    <p>The lifepath system is depicted on page 33-39 in the core rulebook. We will go through this it in the first session.</p>
                    <p>Since we will go through it during the initial session, it is not available on this website. 
                        Please look at the core rulebook at page 33-39 to see the flowcharts and how it might generate rad ideas for your character.
                    </p>
                </div>
                <div className={styles.Picture}>
                    <FadeInPicture title="Choose your path." alt="Lifepath" src="assets/Visuals/Lifepath.webp"/>
                </div>
            </div>
		);
	}
}

export default InterlockLifepath;
