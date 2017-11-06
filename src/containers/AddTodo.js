import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { Button } from 'react-bootstrap';


let AddTodo = ({ dispatch }) => {
	let input;

	return (
		<div class='col-md-12'>
			<form
				onSubmit={e => {
					e.preventDefault();
					if (!input.value.trim()) {
						return;
					}
					dispatch(addTodo(input.value));
					input.value = '';
				}}
			>
				<input
					ref={node => {
						input = node;
					}}
				/>
				<Button bsStyle="info" type="submit">
          Add Todo
				</Button>
			</form>
		</div>
	);
};
AddTodo = connect()(AddTodo);

export default AddTodo;
