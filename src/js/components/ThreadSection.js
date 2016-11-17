import React from 'react';

import Thread from './Thread';
import AddNewThread from './AddNewThread';
import ThreadStore from '../stores/ThreadStore';

export default class ThreadSection extends React.Component {
	constructor() {
		super();
		this.state={
			threads: ThreadStore.getThreads()
		};
	}

	componentWillMount() {
		ThreadStore.on('load', () => {
			this.setState({
				threads: ThreadStore.getThreads()
			});
		});

		ThreadStore.on('add', () => {
			this.setState({
				threads: ThreadStore.getThreads()
			});
		});
	}

	render() {
		let { threads }=this.state;
		const Threads=threads.map((thread) => {
			return <Thread key={thread.id} {...thread} />
		});

		return (
			<div class="column">
				<div class="thread_wrap">
					<div class="cell">
						{Threads}
					</div>
				</div>
				<AddNewThread />
			</div>
		)
	}
}