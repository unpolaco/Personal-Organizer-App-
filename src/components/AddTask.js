import React, { Component } from 'react';
import uuid from 'uuid';
import moment from 'moment';
import AddIcon from '../icons/add';
import calendarIcon from '../icons/materialIcons/calendar.svg';
import starIcon from '../icons/materialIcons/star-black.svg';
import starIconOutline from '../icons/materialIcons/star-border.svg';
import { SubmitButton } from './Button';
import { Input, InputDate, CheckboxInput } from './Input';
import { Label, AnimatedLabel, IconLabel } from './Label';
import { FieldSet, CheckboxFieldSet } from './FieldSet';
import { Form } from './Form';

class AddTask extends Component {
	state = {
		newTaskName: '',
		newTaskFinishDate: '',
		newTaskPriority: false,
		isHovered: false,
	};

	handleCheckPriority = () => {
		this.setState({
			newTaskPriority: !this.state.newTaskPriority,
		});
	};
	handleChangeTaskName = (e) => {
		this.setState({
			newTaskName: e.target.value,
		});
	};
	handleChangeDate = (e) => {
		this.setState({
			newTaskFinishDate: e.target.value,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();

		const { newTaskName, newTaskFinishDate, newTaskPriority } = this.state;
		const { now } = this.props;
		const newTask = {
			name: newTaskName,
			finishDate: newTaskFinishDate,
			createDate: now,
			priority: newTaskPriority,
			done: false,
			id: uuid.v4(),
			timeToFinishTask: moment(newTaskFinishDate).from(now),
		};
		const addNewTask = this.props.addNewTask(newTask);
		this.setState({
			newTaskName: '',
		});
	};
	mouseOver = () => this.setState({ isHovered: true });

	mouseOut = () => this.setState({ isHovered: false });

	render() {
		const { newTaskName, newTaskPriority, date } = this.state;
		return (
			<Form>
				<FieldSet>
					<Input
						required
						nameInput
						id='taskName'
						type='text'
						color='#4DB6AC'
						value={newTaskName}
						onChange={this.handleChangeTaskName}
					/>
					<AnimatedLabel htmlFor='taskName'>Nazwa zadania</AnimatedLabel>
				</FieldSet>
				<InputDate
					icon={calendarIcon}
					min={this.props.now}
					id='dateInput'
					type='date'
					value={date}
					onChange={this.handleChangeDate}
				/>
				<CheckboxFieldSet>
					<CheckboxInput
						id='checkbox'
						type='checkbox'
						onChange={this.handleCheckPriority}
					/>
					<IconLabel htmlFor='checkbox'>
						<img src={newTaskPriority ? starIcon : starIconOutline} />
					</IconLabel>
				</CheckboxFieldSet>
				<SubmitButton color='#4DB6AC' onClick={this.handleSubmit}>
					<AddIcon />
					Dodaj zadanie
				</SubmitButton>
			</Form>
		);
	}
}

export default AddTask;
