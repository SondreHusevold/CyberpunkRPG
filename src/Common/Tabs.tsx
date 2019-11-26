import React, { Component } from 'react';
import styles from '../StyleModules/TabbedPanel.module.css';

interface TabsProps {
    title: string;
    sections: any;
    isActive: (sector: any) => boolean;
    switchContent: (sector: any) => void;
    getContent: () => JSX.Element | "";
}

class Tabs extends Component<TabsProps> {
    public constructor(props: TabsProps) {
        super(props);
    }

    public getAmount = () => {
        let amount = Object.values(this.props.sections).length;

        switch (amount) {
            case 3:
                return styles.ThreeTabs;
            case 4:
                return styles.FourTabs;
            case 5: return styles.FiveTabs;
        }

        return "";
    }

	public render() {
		return (
            <div className={this.getAmount()}>
            <h1 className={styles.Title}>{this.props.title}</h1>
            
            { /* DESKTOP */ }
            {
                Object.values(this.props.sections).map((sector) => { 
                    let sect = sector as string;      
                    return (
                        <span key={sect}
                            className={styles.Desktop + " " + styles.NavLink + " " + (this.props.isActive(sect) ? styles.ActiveNav : styles.NotActiveNav)} 
                            onClick={() => {this.props.switchContent(sect)}}
                        >{sect}</span>
                    )
                })
            }

            { /* MOBILE */ }
            <div className={styles.Mobile} >
                {
                    Object.values(this.props.sections).map((sector) => { 
                        let sect = sector as string;      
                        return (
                            <button key={sect}
                            className={styles.NavLink + " " + (this.props.isActive(sect) ? styles.ActiveNav : styles.NotActiveNav)}
                                onClick={() => {this.props.switchContent(sect)}}
                            >{sect}</button>
                        )
                    })
                }
                <hr/>
            </div>
            <div className={styles.Content}>
                {this.props.getContent()}
            </div>
        </div>
		);
	}
}

export default Tabs;
