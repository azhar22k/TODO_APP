import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { Button } from 'react-bootstrap';


let AddTodo = ({ dispatch }) => {
	let input;

	return (<form
		onSubmit={e => {
			e.preventDefault();
			if (!input.value.trim()) {
				return;
			}
			dispatch(addTodo(input.value));
			input.value = '';
		}}
	>
		<div className='row'>
			<div className='col-md-10'>
				<input className="form-control"
					ref={node => {
						input = node;
					}}
				/>
			</div>
			<div className='col-md-2'>
				<Button bsStyle="info" type="submit">Add Todo
				</Button>
			</div>
		</div>
	</form>
	);
};
AddTodo = connect()(AddTodo);

export default AddTodo;
