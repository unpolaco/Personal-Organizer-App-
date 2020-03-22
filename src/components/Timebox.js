import React from 'react';
import styled from 'styled-components';
import Clock from './Clock';

export default class Timebox extends React.Component {
	state = {
		isRunning: false,
		isPaused: false,
		elapsedTimeInSeconds: 0,
		pausesCounter: 0
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
	startTimer = () => {
		this.intervalId = window.setInterval(() => {
			this.setState(prevState => ({
				elapsedTimeInSeconds: prevState.elapsedTimeInSeconds + 1
			}));
		}, 1000);
	};
	stopTimer = () => {
		window.clearInterval(this.intervalId);
	};

	render() {
		const { pausesCounter } = this.state;
		const { taskName } = this.props;
		return (
			<TimeboxWrapper>
				<p>{taskName}</p>
				<Clock />
				<ButtonWrapper>
					<Button onClick={this.handleStart}>Start</Button>
					<Button onClick={this.handlePause}>Pauza</Button>
					<Button onClick={this.handleStop}>Stop</Button>
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
