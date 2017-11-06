import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import { Jumbotron, ListGroup, Grid, Row, Col} from 'react-bootstrap';

const App = () => (
	<Jumbotron>
		<Grid>
			<Row className="show-grid" align="center">
				<ListGroup>
					<VisibleTodoList /></ListGroup>
				<Col>
					<AddTodo /></Col>
				<Col>
					<Footer /></Col>
			</Row>
		</Grid>
	</Jumbotron>
);

export default App;
