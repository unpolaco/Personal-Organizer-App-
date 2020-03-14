import React, { Component } from 'react';
import AddTask from './AddTask';
import TasksLists from './TaskList';
import uuid from 'uuid';
import styled, { createGlobalStyle } from 'styled-components';
import moment from 'moment';

function wait(ms = 1000) {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
}
const tasks = [
	{
		name: 'Pozmywać naczynia i powiesić firanki',
		finishDate: '2020-02-22',
		createDate: '',
		priority: false,
		done: false,
		id: 'uuid.v4()',
		timeToFinishTask: 'za 2 dni'
	},
	{
		name: 'Poznać React Hooks',
		finishDate: '2020-02-28',
		createDate: '',
		priority: false,
		done: true,
		id: 'uuid.v4()',
		timeToFinishTask: 'za 2 dni'
	},
	{
		name: 'Skończyć Task App przed zimą',
		finishDate: '2020-12-10',
		createDate: '',
		priority: true,
		done: false,
		id: 'uuid.v4()',
		timeToFinishTask: 'za 2 dni'
	}
];
const TasksAPI = {
	getAllTasks: async function() {
		await wait(1000);
		return [...tasks];
	},
	addTask: async function(taskToAdd) {
		await wait(2000);
		const addedTask = { ...taskToAdd, id: uuid.v4() };
		tasks.push(addedTask);
		return addedTask;
	}
};

class TaskApp extends Component {
	state = {
		tasks: [],
		sortByDateGrowing: false,
		sortByNameGrowing: false,
		loading: false,
		error: null
	};

	componentDidMount() {
		TasksAPI.getAllTasks()
			.then(tasks => this.setState({ tasks }))
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ loading: false }));
	}

	deleteTask = id => {
		const tasks = [...this.state.tasks];
		const index = tasks.findIndex(task => task.id === id);
		tasks.splice(index, 1);
		this.setState({
			tasks
		});
	};
	doneTask = id => {
		const tasks = [...this.state.tasks];
		const index = tasks.findIndex(task => task.id === id);
		tasks[index].done = !tasks[index].done;
		this.setState({
			tasks
		});
	};
	priorityTask = id => {
		const tasks = [...this.state.tasks];
		const index = tasks.findIndex(task => task.id === id);
		tasks[index].priority = !tasks[index].priority;
		this.setState({
			tasks
		});
	};
	addNewTask = newTask => {
		TasksAPI.addTask(newTask).then(addedTask =>
			this.setState(prevState => {
				const tasks = [addedTask, ...prevState.tasks];
				return { tasks };
			})
		);
		const tasks = [...this.state.tasks];
		tasks.unshift(newTask);
		this.setState({
			tasks
		});
	};

	nameSorting = sortByGrowing => {
		const tasks = [...this.state.tasks];
		tasks.sort((a, b) => {
			if (a.name < b.name) return sortByGrowing ? 1 : -1;
			if (a.name > b.name) return sortByGrowing ? -1 : 1;
			return 0;
		});

		this.setState({
			tasks,
			sortByNameGrowing: sortByGrowing ? true : false
		});
	};

	sortByName = () => {
		let sortByGrowing;
		this.state.sortByNameGrowing
			? this.nameSorting(sortByGrowing)
			: this.nameSorting(!sortByGrowing);
	};

	dateSorting = sortByGrowing => {
		const tasks = [...this.state.tasks];
		tasks.sort((a, b) => {
			if (a.finishDate < b.finishDate) return sortByGrowing ? 1 : -1;
			if (a.finishDate > b.finishDate) return sortByGrowing ? -1 : 1;
			return 0;
		});
		this.setState({
			tasks,
			sortByDateGrowing: sortByGrowing ? true : false
		});
	};

	sortByDate = () => {
		let sortByGrowing;
		this.state.sortByDateGrowing
			? this.dateSorting(sortByGrowing)
			: this.dateSorting(!sortByGrowing);
	};

	render() {
		const now = moment(new Date());
		const { tasks, sortByDateGrowing, sortByNameGrowing } = this.state;
		return (
			<>
				<div>
					<Title>MOJA LISTA ZADAŃ</Title>
					<AddTask now={now} addNewTask={this.addNewTask} />
				</div>
				{this.state.loading ? 'Zadania się ładują. Proszę o cierpliwość' : null}
				{this.state.error ? 'Nie udało się załadować zapisanych zadań' : null}
				<TasksLists
					tasks={tasks}
					sortByDateGrowing={sortByDateGrowing}
					sortByNameGrowing={sortByNameGrowing}
					handleDeleteTask={this.deleteTask}
					handleDoneTask={this.doneTask}
					handlePriorityTask={this.priorityTask}
					handleSortName={this.sortByName}
					handleSortDate={this.sortByDate}
				/>
			</>
		);
	}
}

const Title = styled.h2`
	font-size: 25px;
	color: #3498db;
`;

export default TaskApp;
