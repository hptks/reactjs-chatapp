import React from 'react';

export default class Message extends React.Component {
	constructor() {
		super();
	}

	render() {
		let { sendersName, date, message }=this.props;

		return (
			<span id="mmessage">
				<span id="name"><strong>{sendersName}</strong></span>
				<span id="date">{date}</span>
				<div class="limit">{message}</div>
			</span>
		)
	}
}