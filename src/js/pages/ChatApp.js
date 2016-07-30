import React from 'react';

import MessageSection from '../components/MessageSection';
import ThreadSection from '../components/ThreadSection';

export default class ChatApp extends React.Component {
	render() {
		return (
			<div>
				<ThreadSection />
				<MessageSection />
			</div>
		)
	}
}