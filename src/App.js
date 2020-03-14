import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import moment from 'moment';
import ActualDate from './components/ActualDate';
import TimeboxApp from './components/TimeboxApp';
import TaskApp from './components/TaskApp';

function wait(ms = 1000) {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
}

class App extends Component {
	state = {
		timebox: true,
		taskList: false
	};

	showTimebox = () => {
		this.setState({
			timebox: !this.state.timebox,
			taskList: !this.state.taskList
		});
	};
	showTaskList = () => {
		this.setState({
			timebox: !this.state.timebox,
			taskList: !this.state.taskList
		});
	};

	render() {
		const now = moment(new Date());
		return (
			<>
				<GlobalStyle />
				<ActualDate now={now} />
				<button onClick={this.showTimebox}>TIMEBOX</button>
				<button onClick={this.showTaskList}>MOJA LISTA ZADAŃ</button>
				{this.state.timebox ? <TimeboxApp /> : null}
				{this.state.taskList ? <TaskApp /> : null}
			</>
		);
	}
}

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #ecf0f1;
    text-align: center;
  & > * {
    font-size: 15px;
    font-family: 'Nunito', sans-serif;
    color: #34495e;
  }
  * :focus {
   outline: none; 
  }
}
`


export default App;
