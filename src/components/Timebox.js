import React from 'react';
import styled from 'styled-components'
import Clock from './Clock'

export default class Timebox extends React.Component {
state = {
  isRunning: false,
  isPaused: false,
  elapsedTimeInSeconds: 0,
}

handleStart = () => {
  this.setState({
    isRunning: true,
  })
}
handlePause = () => {
  this.setState({
    isPaused: true,
  })
}
handleStop = () => {
  this.setState({
    isRunning: false,
  })
}

render() {
	return (
		<TimeboxWrapper>
			<p>Dodaje Timeboxa</p>
			<Clock />
			<ButtonWrapper>
				<Button onClick={this.handleStart}>Start</Button>
				<Button onClick={this.handlePause}>Pauza</Button>
				<Button onClick={this.handleStop}>Stop</Button>
			</ButtonWrapper>
			<p>Liczba przerw: 2</p>
		</TimeboxWrapper>
	)
}
}

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
  }
  &:hover > * {
    stroke: #3498db;
  }
`
const TimeboxWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid grey;
`