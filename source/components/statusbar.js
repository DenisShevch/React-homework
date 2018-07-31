import React, {Component} from 'react';
import Styles from '../styles/StatusBar/styles.m.css';

export default class StatusBar extends Component {
	render () {
		const { avatar, firstName, messageCount } = this.props;
		const style = {width: 35, paddingRight: 5 };
		return (
			<section className={ Styles.statusBar }>
				<img style = {style} src = { avatar } />
				<p>{firstName}, you have {messageCount} messages.</p>
			</section>
		);
	}
} 