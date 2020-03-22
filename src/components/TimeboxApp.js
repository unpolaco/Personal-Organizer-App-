import React from 'react'
import styled from 'styled-components'
import Timebox from './Timebox'
import TimeboxEditor from './TimeboxEditor'

export default class TimeboxApp extends React.Component {
  state = {
    taskName: "",
    taskTimeInMinutes: "",
  }

  handleNameChange = (e) => {
    this.setState({
      taskName: e.target.value,
    })
  }
  handleTimeChange = (e) => {
    this.setState({
      taskTimeInMinutes: e.target.value,
    })
  }


  render() {
    const { taskName, taskTimeInMinutes } = this.state;
    return (
      <TimeboxWrapper>
        <TimeboxEditor 
          onNameChange={this.handleNameChange} 
          taskName={taskName} 
          onTimeChange={this.handleTimeChange} 
          taskTimeInMinutes={taskTimeInMinutes}
        />
        <Timebox
          taskName={taskName}
        />
      </TimeboxWrapper>
    )
  }
}

const TimeboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 600px;
  margin-top: 15px;
  padding: 10px;
  background-color: #fff;
  /* border: 1px solid red; */
`
