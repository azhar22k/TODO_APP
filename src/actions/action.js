let nextTodoId = 0;

export function addToDo(text) {
	return {
		type: 'UPDATE_LIST',
		title: 'Note: '+(++nextTodoId),
		text: text
	};
}

export function deleteTaskList(index) {
	return {
		type: 'DELETE_TASK_LIST',
		index: index
	};
}
