import React, { Component } from 'react';
import styles from './Cyberware.module.css';
import pictureAnimation from '../StyleModules/Pictures.module.css';

class CyberwareIntroduction extends Component<{}> {
	public render() {
		return (
			<div className={styles.IntroductionSplit}>
				<div>
					<h1>Introduction:</h1>
					<img className={styles.IntroductionPictureMobile + " " + pictureAnimation.PictureMobileOnly} title="Alt Cunningham. Johnny Silverhand's input." 
					alt="Alt Cunningham. Johnny Silverhand's input." src="assets/Visuals/Cyberware.webp" />
					<p>Forget everything you ever thought about cyborgs. Everything. </p>
					<p>This is the 2000's. Today’s cyborg is stylish.</p>
					<p>His cybernetics are designed for a streamlined, highmover lifestyle. Whether equipped with implanted data chips in his nervous system to enhance his tennis game, or bioengineered miniweapons for his personal protection, the cyborg of the 2000's is the cutting edge of high tech living.</p>
					<p>But he isn’t necessarily a walking tank either. Cybertech can be smoother than that—less obvious. </p>
					<p>You have to integrate your newtech gadgets into a slick, seamless whole. You're either predator or prey, and the faster you learn to blur the line between the two categories, the longer you'll survive. </p>
					<p>And that’s the point. Survival.</p>
					<h2>Cyberfashion:</h2>
					<p>It's hip and aware to have high tech grafted onto your body somewhere.</p>
					<p>If you can afford it, you probably have at least a couple of "enhancements”; a few software chips installed in your nervous system to interface 
						with your computer, remember your appointments (the ever popular Daytimer™ chip for example), and improve your raquetball reflexes. 
					</p>
					<p>If your job involves some type of security or combat function (and most occupations of the 2000's have at least some type of combat aspect), 
						you probably have two or three types of combat software, as well as plugs and interfaces for a smartgun.
					</p>
					<p> As a Solo, you may have had one or more limbs replaced with cyberware prosthetics, allowing you to hide a variety of tools and weapons in your body, as well as giving you an edge in speed and strength.</p>
					<p>As a cyberpunk, you’re going to want to get your hands on the best of this exciting and expensive new tech. And expensive is the word.</p>
					<p>The average enhanced character with, say, one cyberoptic (Targeting scope and IRenhancement), a reflex boost, one superchromed arm with 
						a .25 cal submachine gun, interface plugs and chipware for Martial Arts, Rotorwing Pilot and Handgun is an investment of tens of thousands of eurobucks.
					</p>
					<p>Of course, the ambitious Punk already knows atleast twenty-five ways (most of them illegal) to raise that sort of paltry sum.</p>
					<p>But before you start loading up on Cyberware, there's a catch...</p>
				</div>
				<div className={styles.IntroductionImage}>
					<img className={pictureAnimation.InterlacedPicture} title="Alt Cunningham. Johnny Silverhand's input." 
					alt="Alt Cunningham. Johnny Silverhand's input." src="assets/Visuals/Cyberware.webp" />
				</div>
			</div>
		);
	}
}

export default CyberwareIntroduction;
