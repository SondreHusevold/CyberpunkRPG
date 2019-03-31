import React, { Component } from 'react';
import { ClassService } from '../Services/ClassService';
import styles from './Classes.module.css';

interface ClassState {
	characterClasses: CharacterClass[];
} 

class Classes extends Component<{}, ClassState> {

	public constructor(props: {}) {
		super(props);

		this.state = {
			characterClasses: []
		}

		this.GetClasses();
	}

	public async GetClasses() {
		this.setState({
			characterClasses: await ClassService.getClasses()
		});
	}

	public render() {
		return (
			<div>
				<h1>Classes:</h1>
				<div className={styles.Classes}>
					{this.state.characterClasses.map((mapper, index) => {
						return (
							<div key={mapper.name} className={styles.ClassWindow} >
								<p data-text={mapper.name} className={styles.ClassTitle}>{mapper.name}</p>
							</div>
						)
					})}
				</div>
			</div>
		);
	}
}

export interface CharacterClass {
	name: string;
	description: string;
	quote: string;
	artwork: string;
}

export default Classes;
