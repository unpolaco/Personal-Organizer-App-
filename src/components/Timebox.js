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
		const { pausesCounter, elapsedTimeInSeconds, isRunning, isPaused } = this.state;
		const { timeboxName, timeboxTimeInMinutes, isActive, onDelete, onSetActiveTimebox } = this.props;
		const totalTimeInSeconds = timeboxTimeInMinutes * 60;
		const timeLeftInSeconds = totalTimeInSeconds - elapsedTimeInSeconds;
		const hoursLeft = Math.floor(timeLeftInSeconds / 3600);
		const minutesLeft = Math.floor((timeLeftInSeconds % 3600) / 60);
		const secondsLeft = Math.floor(timeLeftInSeconds % 60);
		const progressInPercent = (elapsedTimeInSeconds / totalTimeInSeconds) * 100.0;
		
		return (
			<TimeboxWrapper >
				<UnhiddenWrapper isActive={isActive} onClick={onSetActiveTimebox}>
					<h3>{timeboxName}</h3>
					<p>czas przeznaczony na wykonanie: {timeboxTimeInMinutes}min</p>
				</UnhiddenWrapper>
				<WrapperHidden >
					<Clock  
						hoursLeft={hoursLeft}
						minutesLeft={minutesLeft}
						secondsLeft={secondsLeft}
						progressInPercent={progressInPercent}
						stopTimer={this.stopTimer}
					/>
					<ButtonWrapper >
						<Button onClick={this.handleStart} disabled={isRunning}>Start</Button>
						<Button onClick={this.handlePause} disabled={!isRunning}>{isPaused ? "Wznów" : "Pauza"}</Button>
						<Button onClick={this.handleStop} disabled={!isRunning}>Stop</Button> 
						<Button onClick={onDelete} >Usuń</Button>
						<Button >Edytuj</Button>
					</ButtonWrapper>
					<p>Liczba przerw: {pausesCounter}</p>
				</WrapperHidden>
			</TimeboxWrapper>
		);
	}
}
const UnhiddenWrapper= styled.div`
	width: 100%;
	& + div {
	visibility: ${props => props.isActive ? "visible" : "hidden"};
	opacity: ${props => props.isActive ? "1" : "0"};;
	height: ${props => props.isActive ? "196px" : "0"};;
	transition: visibility 0s, opacity 1s height 0.1s ease-in-out;
	}
`

const WrapperHidden = styled.div`
	`

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 15px;
`
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
// const TimeboxWrapper = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	border: 1px solid grey;
// 	&:hover {
// 	border-left: 5px solid #2ecc71
// }
// `

const TimeboxWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 2px 0;
padding: 5px;
transition: 100ms ease-in-out;

&:hover {
box-shadow: 1px 1px 3px 1px #ccc;
transition: 300ms ease-in-out;
background-color: #f6fafd;
&:hover > * {
background-color: #f6fafd;
}
}`