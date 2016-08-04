import React from 'react';

import Message from './Message';
import MessageInput from './MessageInput';
import MessageStore from '../stores/MessageStore';

export default class MessageSection extends React.Component {
	constructor() {
		super();
		this.getMessage=this.getMessages.bind(this);
		this.state={
			messages: MessageStore.getMessages()
		};
	}

	componentWillMount() {
		MessageStore.on('create', this.getMessage);
		MessageStore.on('load', this.getMessage);
	}

	getMessages() {
		this.setState({
			messages: MessageStore.getMessages() 
		});
	}

	render() {
		let { messages }=this.state;
		const Messages=messages.map((message) => {
			return <Message key={message.id} {...message} />
		});

		return (
			<div class="column">
				<div class="wrap">
					<div class="cell">
						{Messages}
					</div>
				</div>
				<MessageInput />
			</div>
		)
	}
}