import {combineReducers} from 'redux';

const updateList = (state = {tasks:[],title:'', text:'', btn:'Create New Task'}, action) => {
	switch (action.type) {
	case 'UPDATE_LIST':
		var obj = {};
		obj[action.title] = action.text;
		var arr = [];
		arr.push(obj);

		state = {
			...state,
			tasks: state.tasks.concat(arr),
			title:'',
			text:''
		};
		break;
	case 'DELETE_TASK_LIST':
		var xx = state.tasks;
		xx.splice(action.index, 1);

		state = {
			...state,
			btn:'Create New Task',
			tasks:xx
		};
		break;
	default:
		break;
	}
	return state;
};

const todoApp = combineReducers({
	list: updateList
});

export default todoApp;
