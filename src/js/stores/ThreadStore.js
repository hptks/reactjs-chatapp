import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';
import MessageStore from './MessageStore';

class ThreadStore extends EventEmitter {
	constructor() {
		super();
		this.threads=[
			{
				id: 4653743468,
				messages: [
					{
						id: 3645734657,
						sendersName: 'Jack Jacobson',
						date: '30.07.2016',
						message: 'Hi there'
					}
				]
			},
			{
				id: 4653468568,
				messages: [
					{
						id: 4658347568,
						sendersName: 'Ben Simmons',
						date: '30.07.2016',
						message: 'Hi there chap'
					}
				]
			}
		];
	}

	loadMessages(id) {
		for (let i=0;i<this.threads.length;i++) {
			if (this.threads[i].id===id) {
				MessageStore.load(this.threads[i].messages);
				break;
			}
		}

		this.emit('load');
	}

	addNewThread() {
		const id=Date.now();
		this.threads.push({
			id,
			messages: []
		});

		this.emit('add');
	}

	handleAction(action) {
		switch(action.type) {
			case 'LOAD_MESSAGES': {
				this.loadMessages(action.id);
				break;
			}
			case 'ADD_THREAD': {
				this.addNewThread();
				break;
			}
		}
	}

	getThreads() {
		return this.threads;
	}
}

const threadStore=new ThreadStore;
dispatcher.register(threadStore.handleAction.bind(threadStore));
export default threadStore;