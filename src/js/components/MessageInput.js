import React from 'react';

import * as MessageActions from '../actions/MessageActions';

export default class MessageInput extends React.Component {
	constructor() {
		super();
		this.state={
			message: ''
		};
	}

	setMessageText(e) {
		this.setState({
			message: e.target.value
		});
	}

	sendMessage(e) {
		if (e.keyCode==13) {
			e.preventDefault();
			MessageActions.createMessage(this.state.message);
			this.setState({
				message: ''
			});
		}
	}

	render() {
		let { message }=this.state;

		return (
			<div>
				<textarea id="message" type="text" rows="2" cols="68" value={message} 
						  onChange={this.setMessageText.bind(this)} 
						  onKeyDown={this.sendMessage.bind(this)} />
			</div>
		)
	}
}