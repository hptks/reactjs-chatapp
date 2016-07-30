import React from 'react';

import * as ThreadActions from '../actions/ThreadActions';

export default class Thread extends React.Component {
	constructor() {
		super();
	}

	loadMessages() {
		let { id }=this.props;
		ThreadActions.loadMessages(id);
	}

	render() {
		return (
			<div class="thread" onClick={this.loadMessages.bind(this)}>Thread</div>
		)
	}
}