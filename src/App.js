import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToDo, deleteTaskList} from './actions/action';
import ReactDOM from 'react-dom';
import {
	Button,
	ListGroup,
	FormGroup,
	ControlLabel,
	FormControl
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

export class App extends Component {
	constructor(props) {
		super(props);
		this.currentText = '';
		this.currentTitle = '';
	}

	deleteTask(index, txt) {

		this.props.dispatch(deleteTaskList(index));

		if (ReactDOM.findDOMNode(this.refs.text).value === txt) {
			ReactDOM.findDOMNode(this.refs.text).value = '';
		}
	}

	displayTask(txt) {
		ReactDOM.findDOMNode(this.refs.text).value = txt;
	}

	addTask(event) {
		if (this.currentText.length > 0) {
			this.props.dispatch(addToDo(this.currentText));
		} else {
			alert('please fill the task field');
		}

		// for emptying the value in input text
		ReactDOM.findDOMNode(this.refs.text).value = '';
		this.currentText = '';
		this.currentTitle = '';
	}
	render() {
		return (<div className="jumbotron">
			<div className='container'>
				<div className='row'>
					{console.log('PAY ATTANTION',this.props.ll.tasks )}
					<div className='col-md-4'>
						{
							this.props.ll.tasks.map((data, index) => {
								var kk = Object.keys(data);
								return (<div key={index}>
									<ListGroup className="row">
										<Button className="col-md-11" key={index} onClick={this.displayTask.bind(this, data[kk[0]], kk[0])}>
											{kk}
										</Button>
										<Button className="col-md-1" bsStyle="danger" bsSize="small" onClick={this.deleteTask.bind(this, index, data[kk[0]], kk[0])}>X</Button>
									</ListGroup>
								</div>);
							})
						}
					</div>
					<div className='col-md-8'>
						<div>
							<FormGroup controlId="formControlsTextarea">
								<ControlLabel>Notes</ControlLabel>
								<FormControl componentClass="textarea" placeholder="Write your notes here..." ref='text' onChange={(event) => {
									this.currentText = event.target.value;
								}}/>
							</FormGroup>
						</div>
						<Button bsStyle="primary" className="button" onClick={this.addTask.bind(this)}>Add Task</Button>
					</div>
				</div>
			</div>
		</div>);
	}
}
//}

const mapStatetoProps = (state) => ({ll: state.list});

const mapDispatchtoProps = (dispatch) => ({dispatch: dispatch});

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
