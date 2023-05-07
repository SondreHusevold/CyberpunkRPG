import React, { Component } from 'react';
import styles from './NightCity.module.css';
import FadeInPicture from '../Common/FadeInPicture';
import animations from '../StyleModules/Animations.module.css';


class NightCityHistory extends Component<{}> {

	public render() {
		return (
			<div className={animations.FadeInFast + " " + styles.NightCityIntroduction}>
				<div className={styles.NightCityIntroductionText}>
					<h1>History of Night City:</h1>
					<FadeInPicture mobile="100% 30%" alt="The Corporate Center." title="The Corporate Center." src="/assets/Visuals/History.webp"/>
                    <p>Night City was founded rather recently as cities go. Before 1994, the city was merely a clutter of unincorporated suburban sprawl between San Francisco and Los Angeles.</p>
                    <p>During the Collapse, an enterprising land developer named Richard Night bought up the majority of what was later to become the Corporate Center and City Center areas. He proposed to start a new, safe, clean corporate city, free of crime and urban blight.</p>
                    <p>By offering lucrative tax packages to several major corporations (PetroChem, for example, had established drilling rights off the coast), he was able to establish a strong economic base as well as an instant population of corporate employees.</p>
                    <p>As planned, Night City was a clean, open community with rapid transit, and safe streets.</p>
                    <p> Unfortunately, Night's plan went awry. In using his own advanced building techniques and materials, he excluded a number of established unions and construction firms, many of these controlled by organized crime syndicates.</p>
                    <p>Four years after initial construction, the powerful gang bosses murdered Night and took over the Night City project.</p>
                    <p>Between selling contracts to their cronies, setting up drug and extortion rackets, and generally inviting the scum of the Collapse into the area, the gangs managed to turn a relatively clean, modern city into an embattled war zone. </p>
                    <p>Crime, drugs, prostitution, random violence and cybernetic terrorism soon became the rule of law. By 2005, the name Night City had taken on a grim and deadly new meaning.</p>
                    <p>By 2009, the Corps decided they'd had enough. In lightning strikes, covert Solo squads eliminated most of the gang leaders and established a Corporation-controlled City Council.</p>
                    <p>The newly elected Council, faced with chaos in the City, deputized Corporate security forces and allowed them full authority within the City limits. The Corporate and City centers were cleaned out and restored to their pristine state.</p>
                    <p>The old Harbor Mall (originally built in the 1980's), was demolished and the New Harbor Mall constructed.</p>
                    <p>The Night City Mayor's Office owes everything to the Corporations, and accordingly, the Corps can do anything they want in Night City.</p>
                    <p>The current Mayor of Night City is Mbole Ebunike, a well-trained corporate puppet recently elected for his second term in 2020</p>
				</div>
				<div className={styles.NightCityIntroductionPicture}>
					<FadeInPicture alt="The Corporate Center." title="The Corporate Center." src="/assets/Visuals/History.webp"/>
				</div>
			</div>
		);
	}
}

export default NightCityHistory;
