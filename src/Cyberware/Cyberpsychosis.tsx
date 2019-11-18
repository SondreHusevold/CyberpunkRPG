import React, { Component } from 'react';
import styles from './Cyberware.module.css';
import pictureAnimation from '../StyleModules/Pictures.module.css';

class Cyberpsychosis extends Component<{}> {
	public render() {
		return (
			<div className={styles.IntroductionSplit}>
				<div>
					<div className={styles.LoadAnimation} />
					<h1>Cyberpsychosis:</h1>
                    <p>Something happens when you start adding metal and plastic to people. They start to change. And it isn’t pretty. </p>
                    <p>In the 2000's, we call this cyberpsychosis; a mental disease in which the addition of cybernetics causes an already unstable personality to fragment:</p>
                    <p>At first, the victim begins to relate more to machines than to humans. </p>
                    <p>Soon, he starts to ignore people— parents, friends, lovers. Eating, sleeping all become less important.</p>
                    <p>Finally, human interactions begin to irritate, culminating in a terrifying rage that consumes the victim entirely.</p>

                    <h2>So, how do I go cyberpsycho? </h2>
                    <p>You have an EMP stat. This stat is a measure of how well the character relates to other people, and is the basis of such skills as leadership, lying, convincing and romantic relationships.</p>
                    <p>Likewise, every major cybernetic enhancement has a corresponding Humanity Cost, which is added together to get an overall Humanity Cost of all enhancements.</p>
                    <p>Humanity Costs are rated from VERY LOW to VERY HIGH, and correspond to the general effect this enhancement will have on the human psyche. In addition, each option added to an enhancement has an additional point value as well.</p>
                    <div className={styles.ExampleBorder}>
						<h3>For every ten points of Humanity, the character loses one point of Empathy (unequal values are rounded down).</h3>
                    </div>
					<p>For example, say you add four new cybernetic devices for a total Humanity Cost of 36. You will lose 3 points of Empathy.</p>
					<p>This can start to cost you. With an Empathy of 3 the character is something of a "cold fish".</p>
					<p>emotionless and cold. With an Empathy of 2, the character is chilly, forbidding, and distinctly unpleasant to others.</p>
					<p>With an Empathy of 1, the character is usually violent, sociopathic and vicious. He must constantly fight to keep from going over the edge and committing irrational, violent acts of murder and mayhem.</p>
					<p>At zero, your character succumbs to Cyberpsychosis and becomes an NPC.</p>
					<p>Not all cyberpsychos are the rampaging type. Many exhibit more subtle symptoms; compulsive lying, kleptomania, sadism, brutality, split personality and extremely violent mood swings.</p>
				</div>
				<div className={styles.IntroductionImage}>
					<img className={pictureAnimation.InterlacedPicture} title="You'll get put down by MAX-TAC." 
					alt="You'll get put down by MAX-TAC." src="assets/Visuals/Cyberpsychosis.png" />
				</div>
			</div>
		);
	}
}

export default Cyberpsychosis;
