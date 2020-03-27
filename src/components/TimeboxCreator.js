import React, { Component } from 'react'
import styled from 'styled-components';
import uuid from 'uuid';

export default class TimeboxCreator extends Component {
state = {
  newTimeboxName: "",
  newTimeboxTime: "",
}
  handleNewTimeboxName = (e) => {
    this.setState({
      newTimeboxName: e.target.value,
    })
  }
  handleNewTimeboxTime = (e) => {
    this.setState({
      newTimeboxTime: e.target.value,
    })
  }
  handleCreateNewTimebox = (e) => {
    e.preventDefault();
    this.props.onCreate({
      id: uuid.v4(),
      timeboxName: this.state.newTimeboxName,
      timeboxTimeInMinutes: this.state.newTimeboxTime,
    })
    this.setState({
      newTimeboxName: "",
      newTimeboxTime: "",
     })
  }

  render() {
    const { newTimeboxName, newTimeboxTime } = this.state;
    return (
      <>
        <h1>Dodaj Timebox</h1>
        <TimeboxCreatorWrapper 
          onSubmit={this.handleCreateNewTimebox}>
			  <Input
			  	type='text'
			  	onChange={this.handleNewTimeboxName}
          value={newTimeboxName}
			  />
			  <Input 
          type='number' 
          onChange={this.handleNewTimeboxTime}
          value={newTimeboxTime}
        />
			  <Button>Dodaj</Button>
		    </TimeboxCreatorWrapper>
      </>
    )
  }
}

const TimeboxCreatorWrapper = styled.form`
display: flex;
padding: 10px 0;
justify-content: center;
`
const Input = styled.input`
  border: none;
  width: ${props => props.taskName ? "300px" : "100px"};
  text-align: left;
  font-size: 17px;
  padding: 0 5px;
  border: 1px solid grey;
  &:hover {
    color: #3498db;
  }
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
`