import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import { Grid, Row} from 'react-bootstrap';

const App = () => (
	<div class='row'>
		<VisibleTodoList />
		<AddTodo />
		<Footer />
	</div>
);

export default App;
