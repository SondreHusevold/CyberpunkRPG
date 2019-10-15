import React, { Component } from 'react';
import tabbedpanel from '../TabbedPanel/TabbedPanel.module.css';

enum GettingStartedSections {
    System=  "System",
	Origins = "Origins & Style",
	Ethnicity = "Ethnicity",
	Lifepath = "Lifepath"
}

interface InterlockStartingState {
    section: GettingStartedSections;
}

class InterlockLifepath extends Component<{}, InterlockStartingState> {

    public constructor(props: {}) {
        super(props);
        
        this.state = {
            section: GettingStartedSections.System
        }
	}
	
	public renderOrigins = () => {
		return (
            <div>
                <p>And again</p>
                <p>And again</p>
                <p>And again</p>
                <p>And again</p>
                <p>And again</p>
                <p>And again</p>
                <p>And again</p>
			</div>
		)
    }
    
    public renderEthnicity = () => {
        return(
            <div>
                <p>Og igjen</p>
                <p>Og igjen</p>
                <p>Og igjen</p>
                <p>Og igjen</p>
                <p>Og igjen</p>
                <p>Og igjen</p>
                <p>Og igjen</p>
            </div>
        )
    }

    public renderLifepath = () => {
        return(
            <div>
              <p>Enda mer dritt</p>
              <p>Enda mer dritt</p>
              <p>Enda mer dritt</p>
              <p>Enda mer dritt</p>
              <p>Enda mer dritt</p>
            </div>
        )
    }

    public renderSystem = () => {
        return(
            <div>
            <div>
              <p>Her står det masse dritt</p>
              <p>Her står det masse dritt</p>
              <p>Her står det masse dritt</p>
            </div>
            </div>
        )
    }

	public setSection = (section: GettingStartedSections) => {
		this.setState({
			section: section
		});
	}


	public renderChoice = () => {
		switch(this.state.section) {
            case GettingStartedSections.System:
                return this.renderSystem();
			case GettingStartedSections.Origins:
				return this.renderOrigins();
			case GettingStartedSections.Ethnicity:
				return this.renderEthnicity();
			case GettingStartedSections.Lifepath:
				return this.renderLifepath();
		}

		return "";
	}

	public isActive = (selection: GettingStartedSections) => {
		return this.state.section === selection;
    }

	public render() {

		return (
            <div className={tabbedpanel.FourTabs}>
                <h1 className={tabbedpanel.Title}>Lifepath:</h1>
                {
                    Object.values(GettingStartedSections).map((section: GettingStartedSections) => {
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

export default InterlockLifepath;
