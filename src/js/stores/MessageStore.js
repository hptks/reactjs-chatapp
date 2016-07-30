import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class MessageStore extends EventEmitter {
	constructor() {
		super();
		this.messages=[];
	}

	load(tmessages) {
		this.messages=tmessages;

		this.emit('load');
	}

	createMessage(message) {
		const id=Date.now();
		this.messages.push({
			id,
			sendersName: 'Example user',
			date: '28.07.2016',
			message
		});

		this.emit('create');
	}

	handleAction(action) {
		switch(action.type) {
			case 'CREATE_MESSAGE': {
				this.createMessage(action.message);
				break;
			}
		}
	}

	getMessages() {
		return this.messages;
	}
}

const messageStore=new MessageStore;
dispatcher.register(messageStore.handleAction.bind(messageStore));
export default messageStore;