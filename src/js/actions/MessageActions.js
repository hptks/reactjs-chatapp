import dispatcher from '../dispatcher';

export function createMessage(message) {
	dispatcher.dispatch({
		type: 'CREATE_MESSAGE',
		message
	});
}