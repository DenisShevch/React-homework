// Core
import React, { Component } from 'react';
import Styles from '../../styles/Feed/styles.m.css';
import avatar from '../../theme/assets/homer.png';
import customAvatar from '../../theme/assets/lisa.png';

import Composer from '../../components/composer';
import Post from '../../components/post';
import StatusBar from '../../components/statusbar';

const options = {
	avatar,
	firstName: 'Ted',
	lastName: 'Huston',
	messages: [{avatar: customAvatar,  firstName: 'Julie', lastName: 'Armstrong', context: 'Hello Ted!'},
		{avatar: customAvatar,  firstName: 'Maggi', lastName: 'Armstrong', context: 'Hi Ted!'}]	
};

export default class App extends Component {
	render() {
		
        return (
            <section className = { Styles.feed }>
				<StatusBar 
					avatar = { options.avatar }
					firstName = { options.firstName }
					messageCount = { options.messages.length }
				/>						
				<Composer { ...options } />
				{ options.messages.map(message =>
					<Post {...message}/>
				)}
			</section>			
        );
    }
}
