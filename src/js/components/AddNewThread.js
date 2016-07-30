import React from 'react';

import * as ThreadActions from '../actions/ThreadActions';

export default class AddNewThread extends React.Component {
	constructor() {
		super();
	}

	addNewThread() {
		ThreadActions.addNewThread();
	}

	render() {
		return (
			<button type="submit" onClick={this.addNewThread.bind(this)}>Add thread</button>
		)
	}
}