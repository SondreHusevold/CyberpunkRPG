import React, { Component } from 'react';
import animations from '../StyleModules/Animations.module.css';
import styles from './TraumaTeam.module.css';
import drugcss from './TTDrugs.module.css';
import { Drug, TraumaTeamService } from '../Services/TraumaTeamService';
import FadeInPicture from '../Common/FadeInPicture';

interface DrugState {
    drugs: Drug[]
    shownDrug: Drug | null;
}

class TTDrugs extends Component<{}, DrugState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
            drugs: [],
            shownDrug: null
        }

        this.getDrugs();
    }

    public async getDrugs() {
        let drugs = await TraumaTeamService.getDrugs();
        this.setState({
            drugs: drugs
        });
    }

    public clearModal = () => {
        this.setState({
            shownDrug: null
        });
    }

    public renderDrug = () => {
        if(this.state.shownDrug != null) {
            return (
                <div>
                    <div className={drugcss.ModalBackground} onClick={this.clearModal}></div>
                    <div className={drugcss.WindowedInformation}>
                        <h3>{this.state.shownDrug.name}</h3>
                        <p>> Strength: {this.state.shownDrug.strength}</p>
                        <p>> Difficulty: {this.state.shownDrug.difficulty}</p>
                        <p>> Duration: {this.state.shownDrug.duration}</p>
                        {this.state.shownDrug.description.split("\n").map((splitLine: string) => {
                            return <p>{splitLine}</p>
                        })}
                        <button className={drugcss.ModalReturn} onClick={this.clearModal}>
                            > <span>[ </span> Return <span>]</span>
                        </button>
                    </div>
                </div>
            )
        }
        return "";
    }

	public render() {
		return (
			<div className={animations.FadeInFast + " " + styles.TTIntroduction}>
				<div className={styles.TTIntroductionText}>
					<h1>Drugs:</h1>
					<FadeInPicture mobile="100% 50%" title="" alt="Stop it." src="/CyberpunkRPG/assets/Visuals/TTDrugs.webp"/>
                    { this.renderDrug() }
                    <p>The drugs of the future are far more lethal than their 20th century counterparts. Many are experimental chemicals dumped on the Street by unscrupulous Corporations looking for guinea pigs.</p>
                    <p>Some are homebrewed horrors designed in basement labs. Still others are military designed combat drugs designed to create armies of zombie killing machines. All of them are bad news.</p>
                    <p>Most of the drugs in Cyberpunk are addictive—the people who designed them were looking for a way to create a captive market of addicts.</p>
                    <p>Only the very wealthy can afford to have non-toxic "designer  drugs" created for their own physiologies; 
                        most of the scum on the Street (the rest of you) are left sucking up the dregs of the chemical sewer.</p>
                    <p>Here are some common street drugs:</p>
                    <div className={drugcss.DrugList}>
                        {this.state.drugs.map((drug) => {
                            return <button onClick={() => { this.setState({shownDrug: drug}); } }>{drug.name}</button>
                        })}
                    </div>
				</div>
				<div className={styles.TTIntroductionPicture}>
                    <FadeInPicture alt="Stop it." 
                        title="Stop it. Get some help and a burger from McDonalds®" src="/CyberpunkRPG/assets/Visuals/TTDrugs.webp"
                    />
				</div>
			</div>
		);
	}
}

export default TTDrugs;
