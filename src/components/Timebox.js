import React from 'react';
import styled from 'styled-components';
import Clock from './Clock';

export default class Timebox extends React.Component {
	state = {
		isRunning: false,
		isPaused: false,
		elapsedTimeInSeconds: 0,
		pausesCounter: 0,
	};

	handleStart = () => {
		this.setState({
			isRunning: true,
			isPaused: false
		});
		this.startTimer();
	};
	handlePause = () => {
		this.setState(function(prevState) {
			const isPaused = !prevState.isPaused;
			if (isPaused) {
				this.stopTimer();
			} else {
				this.startTimer();
			}
			return {
				isPaused,
				pausesCounter: isPaused
					? prevState.pausesCounter + 1
					: prevState.pausesCounter
			};
		});
	};
	handleStop = () => {
		this.setState({
			isRunning: false,
			isPaused: false,
			pausesCounter: 0,
			elapsedTimeInSeconds: 0
		});
		this.stopTimer();
	};

	stopTimer = () => {
		window.clearInterval(this.intervalId);
	};

	startTimer = () => {
		this.intervalId = window.setInterval(() => {
			this.setState(prevState => ({
				elapsedTimeInSeconds: prevState.elapsedTimeInSeconds + 0.1
			}));
		}, 100.0);

	};
	

	render() {
		const { pausesCounter, elapsedTimeInSeconds } = this.state;
		const { taskName, taskTimeInMinutes, onDelete } = this.props;
		const totalTimeInSeconds = taskTimeInMinutes * 60;
		const timeLeftInSeconds = totalTimeInSeconds - elapsedTimeInSeconds;
		const hoursLeft = Math.floor(timeLeftInSeconds / 3600);
		const minutesLeft = Math.floor((timeLeftInSeconds % 3600) / 60);
		const secondsLeft = Math.floor(timeLeftInSeconds % 60);
		const progressInPercent = (elapsedTimeInSeconds / totalTimeInSeconds) * 100.0;
		
		return (
			<TimeboxWrapper>
				<p>{taskName}</p>
				<p>{taskTimeInMinutes}min</p>
				<Clock
					hoursLeft={hoursLeft}
					minutesLeft={minutesLeft}
					secondsLeft={secondsLeft}
					progressInPercent={progressInPercent}
					stopTimer={this.stopTimer}
				/>
				<ButtonWrapper>
					<Button onClick={this.handleStart}>Start</Button>
					<Button onClick={this.handlePause}>Pauza</Button>
					<Button onClick={this.handleStop}>Stop</Button> 
					<Button onClick={onDelete}>Usuń</Button>
					<Button >Edytuj</Button>
				</ButtonWrapper>
				<p>Liczba przerw: {pausesCounter}</p>
			</TimeboxWrapper>
		);
	}
}

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 15px;
`;
const Button = styled.button`
	display: flex;
	justify-content: space-around;
	align-items: center;
	border: 1px solid grey;
	width: 100px;
	padding: 2px 10px;
	margin: 2px 10px;
	height: 25px;
	background-color: #fff;
	font-size: 15px;
	& > * {
		stroke: #34495e;
	}
	&:hover {
		color: #3498db;
		border: 1px solid #3498db;
	}
	&:hover > * {
		stroke: #3498db;
	}
`;
const TimeboxWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid grey;
`;
