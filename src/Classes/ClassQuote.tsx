import React, { Component } from 'react'
import styles from './ClassQuote.module.css'
import { CharacterClass } from './Classes';

interface ClassQuoteProps {
    characterClass: CharacterClass;
    getGender: (ownership: boolean) => string;
}

interface ClassQuoteState {
    quoteNumber: number;
}

export class ClassQuote extends Component<ClassQuoteProps, ClassQuoteState> {

    constructor(props: ClassQuoteProps) {
        super(props);
        this.state = {
            quoteNumber: Math.floor(Math.random() * 17)
        }
    }

    componentDidUpdate(prevProps: ClassQuoteProps, prevState: ClassQuoteState) {
        if(prevProps.characterClass.name !== this.props.characterClass.name) {
            this.setState({
                quoteNumber: Math.floor(Math.random() * 17)
            });
        }
    }
    
	public getAdjective = () => {
		switch (this.state.quoteNumber) {
			case 0:
				return `An interesting ${this.props.characterClass.name}.`
			case 1:
				return `A 'special' type of ${this.props.characterClass.name}.`	
			case 2:
				return `Ballsy ${this.props.characterClass.name}.`
			case 3:
				return `Excited ${this.props.characterClass.name}.`
			case 4:
				return `Trigger happy ${this.props.characterClass.name}.`
			case 5:
				return `${this.props.characterClass.name} on the edge of Cyberpsychosis.`
			case 6:
				return `Lying ${this.props.characterClass.name}.`
			case 7:
				return `${this.props.characterClass.name} of high self esteem.`
			case 8:
				return `Some ${this.props.characterClass.name}.`
			case 9:
				return `Shady ${this.props.characterClass.name}.`
			case 10:
				return `${this.props.characterClass.name} on ${this.props.getGender(true)} last breath.`
			case 11:
                return `Legendary ${this.props.characterClass.name}.`
            case 12:
                    return `${this.props.characterClass.name} with too much to drink.`
            case 13:
                return `Excerpt from 'My life as a ${this.props.characterClass.name}'.`
            case 14:
                return `An annoying ${this.props.characterClass.name}.`
            case 15:
                return `Confident ${this.props.characterClass.name}.`
			default:
				return `${this.props.characterClass.name}`
		}
	}

	public renderQuotations = () => {
		let splitQuote = this.props.characterClass.quote.split("\n");
		return splitQuote.map((item, i) => {
			if(i === 0 && i === splitQuote.length -1)
				return <p key={i}>"{item}"</p>
			else if(i === (splitQuote.length-1))
				return <p key={i}>{item}"</p>
			else if(i == 0)
				return <p key={i}>"{item}</p>
			return <p key={i}>{item}</p>
		})
	}

    public render() {
        return (
            <div className={styles.ClassQuoteWrapper}>
                <div className={styles.ClassQuote}>{this.renderQuotations()}</div>
                <p className={styles.QuoteName}>- {this.getAdjective()}</p>
            </div>
        )
    }
}