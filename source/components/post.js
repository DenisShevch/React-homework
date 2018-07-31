import React, {Component} from 'react';
import moment from 'moment';

import Styles from '../styles/Post/styles.m.css';

export default class Post extends Component {
	render () {
		const { avatar, firstName, lastName, context } = this.props;
		return (
			<section className={ Styles.post }>
				<img src = { avatar } />
				<a>{`${firstName} ${lastName}`}</a>
				<time>{moment(Date.now()).format('MMMM D h:mm:ss a')}</time>
				<p>{context}</p>
			</section>
		);
	}
} 
