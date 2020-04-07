import React from 'react'
import styled from 'styled-components'
import Timebox from './Timebox'
import TimeboxEditor from './TimeboxEditor'
import TimeboxList from './TimeboxList'

export default class TimeboxApp extends React.Component {
  state = {
    timeboxName: "",
    timeboxTimeInMinutes: "",
  }

  handleNameChange = (e) => {
    this.setState({
      timeboxName: e.target.value,
    })
  }
  handleTimeChange = (e) => {
    this.setState({
      timeboxTimeInMinutes: e.target.value,
    })
  }


  render() {
    const { timeboxName, timeboxTimeInMinutes } = this.state;
    return (
      <TimeboxWrapper>
        {/* <TimeboxEditor
          onNameChange={this.handleNameChange} 
          timeboxName={timeboxName} 
          onTimeChange={this.handleTimeChange} 
          timeboxTimeInMinutes={timeboxTimeInMinutes}
        />
        <Timebox
          timeboxName={timeboxName}
          timeboxTimeInMinutes={timeboxTimeInMinutes}
        /> */}
        <TimeboxList/>
      </TimeboxWrapper>
    )
  }
}

const TimeboxWrapper = styled.div`
`
