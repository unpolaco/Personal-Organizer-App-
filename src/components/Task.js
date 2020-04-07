import React from 'react';
import styled from 'styled-components';
import checkmarkIcon from '../icons/materialIcons/check_circle.svg';
import starIcon from '../icons/materialIcons/star-black.svg';
import deleteIcon from '../icons/materialIcons/delete-black.svg';
import { IconButton } from './Button';
import { Text, TextBig } from './Text';

function Task(props) {
	const { name, priority, finishDate, timeToFinishTask, id } = props.tasks;
	const { handleDoneTask, handleDeleteTask, handlePriorityTask } = props;

	return (
		<TaskItem important={priority}>
			<TextWrapper>
				<TextBig>{name}</TextBig>
				<Text>{finishDate ? 'data: ' + finishDate : ''}</Text>
				<Text>do zrobienia {finishDate ? timeToFinishTask : 'kiedyś'}</Text>
			</TextWrapper>
			<ButtonWrapper>
				<IconButton 
					icon={checkmarkIcon}
					onClick={() => handleDoneTask(id)}>
				</IconButton>
				<IconButton 
					icon={starIcon}
					onClick={() => handlePriorityTask(id)}>
				</IconButton>
				<IconButton 
					icon={deleteIcon}
					onClick={() => handleDeleteTask(id)}>
				</IconButton>
			</ButtonWrapper>
		</TaskItem>
	);
}

const TaskItem = styled.div`
	display: flex;
	margin: 2px 0;
	padding: 5px;
	transition: 100ms ease-in-out;
	border-left: ${(props) =>
		props.important ? '5px solid #E34234' : '5px solid #2ecc71'};
	&:hover {
		box-shadow: 1px 1px 3px 1px #ccc;
		transition: 300ms ease-in-out;
		background-color: #f6fafd;
		&:hover > * {
			background-color: #f6fafd;
		}
	}
`;
const ButtonWrapper = styled.div`
	width: 120px;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;
const TextWrapper = styled.div`
	display: flex;
	flex: 1;
`;

export default Task;
