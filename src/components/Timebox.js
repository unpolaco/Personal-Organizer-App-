import React from 'react';
import styled from 'styled-components';
import Clock from './Clock';
import startIcon from '../icons/materialIcons/icon-play.svg';
import pauseIcon from '../icons/materialIcons/icon-pause.svg';
import stopIcon from '../icons/materialIcons/icon-stop.svg';
import deleteIcon from '../icons/materialIcons/icon-delete.svg';
import { IconButton } from './Button';
import { Text, TextBig } from './Text';

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
			isPaused: false,
		});
		this.startTimer();
	};
	handlePause = () => {
		this.setState(function (prevState) {
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
					: prevState.pausesCounter,
			};
		});
	};
	handleStop = () => {
		this.setState({
			isRunning: false,
			isPaused: false,
			pausesCounter: 0,
			elapsedTimeInSeconds: 0,
		});
		this.stopTimer();
	};

	stopTimer = () => {
		window.clearInterval(this.intervalId);
	};

	startTimer = () => {
		this.intervalId = window.setInterval(() => {
			this.setState((prevState) => ({
				elapsedTimeInSeconds: prevState.elapsedTimeInSeconds + 0.1,
			}));
		}, 100.0);
	};

	render() {
		const {
			pausesCounter,
			elapsedTimeInSeconds,
			isRunning,
			isPaused,
		} = this.state;
		const {
			timeboxName,
			timeboxTimeInMinutes,
			isActive,
			onDelete,
			onSetActiveTimebox,
		} = this.props;
		const totalTimeInSeconds = timeboxTimeInMinutes * 60;
		const timeLeftInSeconds = totalTimeInSeconds - elapsedTimeInSeconds;
		const hoursLeft = Math.floor(timeLeftInSeconds / 3600);
		const minutesLeft = Math.floor((timeLeftInSeconds % 3600) / 60);
		const secondsLeft = Math.floor(timeLeftInSeconds % 60);
		const progressInPercent =
			(elapsedTimeInSeconds / totalTimeInSeconds) * 100.0;

		return (
			<TimeboxWrapper>
				<UnhiddenWrapper isActive={isActive} onClick={onSetActiveTimebox}>
					<TextBig bold='600'>{timeboxName}</TextBig>
					<Text>Czas przeznaczony na wykonanie: {timeboxTimeInMinutes}min</Text>
				</UnhiddenWrapper>
				<WrapperHidden>
					<Clock
						hoursLeft={hoursLeft}
						minutesLeft={minutesLeft}
						secondsLeft={secondsLeft}
						progressInPercent={progressInPercent}
						stopTimer={this.stopTimer}
					/>
					<ButtonWrapper>
						<IconButton
							size='24px'
							icon={startIcon}
							onClick={this.handleStart}
							disabled={isRunning}
						></IconButton>
						<IconButton
							size='24px'
							icon={isPaused ? startIcon : pauseIcon}
							onClick={this.handlePause}
							disabled={!isRunning}
						></IconButton>
						<IconButton
							size='24px'
							icon={stopIcon}
							onClick={this.handleStop}
							disabled={!isRunning}
						></IconButton>
						<IconButton
							size='24px'
							icon={deleteIcon}
							onClick={onDelete}
						></IconButton>
					</ButtonWrapper>
					<Text>Liczba przerw: {pausesCounter}</Text>
				</WrapperHidden>
			</TimeboxWrapper>
		);
	}
}
const UnhiddenWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	margin: 0 auto;
	& + div {
		visibility: ${(props) => (props.isActive ? 'visible' : 'hidden')};
		opacity: ${(props) => (props.isActive ? '1' : '0')};
		height: ${(props) => (props.isActive ? '196px' : '0')};
		transition: visibility 0s, opacity 1s height 0.1s ease-in-out;
	}
`;

const WrapperHidden = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	width: 300px;
	padding: 15px;
	margin-top: 15px;
`;

const TimeboxWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	margin: 15px auto;
	padding: 5px;
	transition: 100ms ease-in-out;
	border: 1px solid transparent;
	&:hover {
		box-shadow: 1px 1px 3px 1px ${({ theme }) => theme.gray80};;
		transition: 300ms ease-in-out;
		background-color: ${({ theme }) => theme.ghostWhite};
		border: 1px solid ${({ theme }) => theme.lime600};
		&:hover > * {
			background-color: ${({ theme }) => theme.ghostWhite};
		}
	}
`;
