import React, { Component } from 'react';
import customAvatar from '../theme/assets/lisa.png';
import Styles from '../styles/Composer/styles.m.css';

export default class Composer extends Component {
	constructor(props) {
		super(props);
		this.avatar = props.avatar;
		this.firstName = props.firstName;
		this.lastName = props.lastName;
		this.messages = props.messages;		
	}
	
	handleClick = () => {
		this.messages.push({avatar: customAvatar, firstName: 'Mike', lastName: 'Chaliy', context : 'Hi'});
	};
	
	render () {
		
		const placeholder = `Type hear anything, ${this.firstName} ${this.lastName} ... `;
		
		return (
			<section className = { Styles.composer }>
				<img src = { this.avatar } />
				<textarea placeholder = { placeholder } />
				<button onClick={this.handleClick.bind(this)}> Add</button>				
			</section>
		);
	}
}

