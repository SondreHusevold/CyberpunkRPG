import React, { Component } from 'react';
import animations from '../StyleModules/Animations.module.css';
import styles from './NightCity.module.css';

const FadeInPicture = React.lazy(() => import('../Common/FadeInPicture'));

class NightCityIntroduction extends Component<{}, {}> {

	public render() {
		return (
			<div className={animations.FadeInFast + " " + styles.NightCityIntroduction}>
				<div className={styles.NightCityIntroductionText}>
					<h1>Welcome to Night City:</h1>
					<FadeInPicture mobile="100% 65%" alt="Night City from NCU." title="Night City as seen from NCU." src="/CyberpunkRPG/assets/Visuals/NightCity.webp" />
					<p>Night City is a moderately-sized city located on the west coast of the United States. It has a population of about five million in the Greater Night City Area, with the majority living in sprawling suburbs to the southwest.</p>
					<p>The city itself lies on a large bay, surrounded by several small subcities and suburban communities (Westbrook, Heywood, Pacifica, South Night City). </p>
					<p>Years of pollution, neglect and one of the most corrupt governments in the world have reduced most of these cities to cluttered, semi-deserted sprawls, with burned out homes, empty shopping malls and rampant street crime.</p>
					<p>Night City today is a rapidly growing urban region, still rife with urban violence and street crime, but with strong economic growth in the Corporate sector.</p>
					<p>It is the quintessential city of the Cyberpunk future—gritty, dangerous, but possessing an urban slick and stylish cool that makes it unique.</p>
					<p>As Bes Isis, Net 54 newcaster and one of Night City's most well known public figures puts it— </p>
					<h3>"Nobody ever leaves Night City. Except in a body bag."</h3>
				</div>
				<div>
					<FadeInPicture alt="Night City from NCU." title="Night City as seen from NCU." src="/CyberpunkRPG/assets/Visuals/NightCity.webp" />
				</div>
			</div>
		);
	}
}

export default NightCityIntroduction;
