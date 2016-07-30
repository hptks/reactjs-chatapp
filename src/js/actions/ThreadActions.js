import dispatcher from '../dispatcher';

export function loadMessages(id) {
	dispatcher.dispatch({
		type: 'LOAD_MESSAGES',
		id
	});
}

export function addNewThread() {
	dispatcher.dispatch({
		type: 'ADD_THREAD'
	});
}