import React, { Component } from 'react';
import uuid from 'uuid'
import styled from 'styled-components'
import moment from 'moment';
import AddIcon from '../icons/add'

class AddTask extends Component {
  
  state = {
    newTaskName: "",
    newTaskFinishDate: "",
    newTaskPriority: false,
    }

    handleCheckPriority = () => {
      this.setState({
        newTaskPriority: !this.state.newTaskPriority,
      })
    }
    handleChangeTaskName = (e) => {
      this.setState({
        newTaskName: e.target.value,
      })
    }
    handleChangeDate = (e) => {
      this.setState({
        newTaskFinishDate: e.target.value,
      })
    }
    handleSubmit = (e) => {
      e.preventDefault()

      const { newTaskName, newTaskFinishDate, newTaskPriority} = this.state;
      const { now } = this.props;
      const newTask = {
        name: newTaskName,
        finishDate: newTaskFinishDate,
        createDate: now,
        priority: newTaskPriority,
        done: false,
        id: uuid.v4(),
        timeToFinishTask: moment(newTaskFinishDate).from(now),
      }
      const addNewTask = this.props.addNewTask(newTask)
    }

  render() { 
    return ( 
      <AddTaskWrapper>
        <Input taskName type="text" placeholder="Wpisz zadanie" onChange={this.handleChangeTaskName} />
        <InputDate 
          min={this.props.now} 
          id="dateInput" 
          type="date" 
          value={this.state.date} 
          onChange={this.handleChangeDate}/>
        <CheckboxWrapper>
          <Input id="checkbox" type="checkbox" onChange= {this.handleCheckPriority} />
          <label htmlFor="checkbox">Ważne</label>
        </CheckboxWrapper>
        <Button onClick={this.handleSubmit}><AddIcon/>Dodaj zadanie</Button>
      </AddTaskWrapper>
     );
  }
}
const AddTaskWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 800px;
  background-color: #fff;
  & > * {
    border: none;
    padding: 2px;
    color: #34495e;
  }
`
const Input = styled.input`
  border: none;
  width: ${props => props.taskName ? "250px" : "100px"};
  text-align: left;
`
const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 70px;
`
const InputDate = styled.input`
  background: url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  97% 50% no-repeat ;
  border: none;
  &::-webkit-inner-spin-button {
  display: none;
  }
  &::-webkit-calendar-picker-indicator {
  opacity: 0;
  }
`
const Button = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 150px;
    padding: 2px 10px;
    margin: 2px 10px;
    height: 100%;
    background-color: #fff;
  &:hover {
    background-color: #ecf0f1;
  }
`
const Icon = styled.img`
  width: 22px;
&:hover {
  fill: black;
  width: 25px;
  }
`
export default AddTask;