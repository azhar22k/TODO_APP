let nextTodoId = 1;

export function addToDo(title = nextTodoId, text) {
	++nextTodoId;
	return {
		type: 'UPDATE_LIST',
		title: 'Note: '+title,
		text: text
	};
}

export function deleteTaskList(index) {
	return {
		type: 'DELETE_TASK_LIST',
		index: index
	};
}

export function updateButtonName() {
	return {
		type: 'UPDATE_BUTTON_NAME'
	};
}

export function updateTaskList(title = nextTodoId, text, index) {
	++nextTodoId;
	return {
		type: 'UPDATE_TASK',
		title: 'Note: '+title,
		text: text,
		index: index
	};
}
