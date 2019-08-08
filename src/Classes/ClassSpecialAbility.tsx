import React, { Component } from 'react'
import styles from './ClassSpecialAbility.module.css'
import { ClassDetailedInformation } from './Classes';

interface ClassSpecialAbilityProps {
    characterInformation: ClassDetailedInformation;
}

export class ClassSpecialAbility extends Component<ClassSpecialAbilityProps, {}> {

    constructor(props: ClassSpecialAbilityProps) {
        super(props);
    }

    // Splits all newlines from the json into paragraphs.
    public splitNewlines = (information: string) => {
		let splitQuote = information.split("\n");
		return splitQuote.map((item, i) => {
			return <p key={i}>{item}</p>
		})
    }

    public render() {
        return (
            <div className={styles.ClassSkillWrapper}>
                {this.props.characterInformation.specialAbility.map((val, index) => {
                    return (
                        <div>
                            <h2>{val.name}</h2>
                            <p className={styles.Description}>{this.splitNewlines(val.description)}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}