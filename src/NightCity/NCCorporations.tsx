import React, { Component } from 'react';
import pictureAnimation from '../StyleModules/Pictures.module.css';
import styles from './NCCorporations.module.css';
import animation from '../StyleModules/Animations.module.css';
import { Corporation, CorporationService } from '../Services/CorporationService';

interface CorporationProps {
	hasLoaded: (hasLoaded: boolean) => void;
}

interface CorporationState {
    corporations: Corporation[];
    selected: Corporation | null;
}

class NightCityCorporations extends Component<CorporationProps, CorporationState> {
    public constructor(props: CorporationProps) {
        super(props);

        this.state = {
            corporations: [],
            selected: null
        }

        this.getCorporations();
    }

    public async getCorporations() {
        this.setState({
            corporations: await CorporationService.getCorporations()
        }, () => {
            this.props.hasLoaded(true);
        }); 
    }

    public setCorporation = (corpo: Corporation) => {
        this.setState({
            selected: corpo
        });
    }

    public clearCorpo = () => {
        this.setState({
            selected: null
        });
    }

    public renderCorporationList = () => {
        return (
            <div className={styles.NightCityCorporations}>
                <div>
                    <div className={animation.FadeIn}>
                        <h1>The Corporations of Night City:</h1>
                        <p>The modern corporations of 2020 are much like the corporations of the late 20th century, only much larger and more fully autonomous. They are very nearly nations in themselves, with their own laws, cities, factories and armies. </p>
                        <p>Most corporations in 2020 are multinational; i.e., they have branches and operations all over the world. These branches may be as small as a research facility or sales office, or as large as a major manufacturing facility and security center.</p>
                        <p>Here are some your everyday megacorporations in Night City:</p>
                        <hr/>
                    </div>
                    <div className={styles.NightCityCorporationGrid + " " + animation.FadeInSlow}>
                        {this.state.corporations.map((corp) => {
                            return (
                                <button onClick={() => { this.setCorporation(corp); }}>{corp.shortname}</button>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.NightCityCorporationPicture + " " + animation.FadeInVerySlow}>
                    <img className={pictureAnimation.InterlacedPicture} alt="Corporate Center." title="Corporate Center." src="assets/Visuals/Corporations.webp"/>
                </div>
            </div>
        )
    }

    public renderCorporation = () => {
        let corpo = this.state.selected;

        if(corpo != null) {
            return (
                <div className={styles.PadOutCorporation + " " + animation.FadeIn}>
                    <div className={styles.BackButton} onClick={this.clearCorpo}>
                        > { "[ Back ]".split(" ").map((splitButton) => {
                            return <span> {splitButton} </span>
                        })}
                    </div>
                    <div className={styles.BackButtonMobileBackground}>
                        <button className={styles.BackButtonMobile} onClick={this.clearCorpo}>Back</button>
                    </div>
                    <h1 className={styles.NoMarginHeader}>Corporation Profile:</h1>
                    <hr/>

                    <div className={styles.NightCityCorporationChosen}>
                        <div>
                            <h1 className={styles.NoMarginHeader}>{corpo.name}</h1>
                            <h3>{corpo.description}</h3>
                            <div className={styles.NightCityCorporationLogo}>
                                <img className={pictureAnimation.InterlacedPicture} alt={corpo.name} src={"assets/Visuals/CorporationLogos/" + corpo.logo}/>
                            </div>
                            <h2>General Information:</h2>
                            <p>Headerquarters: {corpo.headquarters}</p>
                            <p>Major stockholder: {corpo.majorShareholder}</p>
                            <p>Regional Offices:</p>
                            <ul className={styles.RegionalOfficeSplit}>
                                {corpo.regionalOffices.map((office) => {
                                    return <li>{office}</li>
                                })}
                            </ul>
                            <p>Employees:</p>
                            <ul className={styles.EmployeeSplit}>
                                <span><u>Worldwide:</u> {corpo.employees.worldwide}</span>
                                <span><u>Troops:</u> {corpo.employees.troops}</span>
                                <span><u>Covert:</u> {corpo.employees.covert}</span>
                            </ul>

                        </div>
                        <div>
                            <div className={styles.ExampleBorder}>
                            <h2>Background:</h2>
                            { corpo.background.split("\n").map((splitLine) => { return <p>{splitLine}</p> }) }

                            <h2>Resources:</h2>
                            { corpo.resources.split("\n").map((splitLine) => { return <p>{splitLine}</p> }) }

                        </div>
                    </div>
                </div>
                <hr/>

            </div>
            )
        }

        return "";
    }

	public render() {
        if(this.state.selected === null) {
            return this.renderCorporationList();
        }
        
        return this.renderCorporation()
	}
}

export default NightCityCorporations;
