import React, { Component } from 'react';
import uuid from 'uuid'
import styled from 'styled-components'

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
      const actualDate = new Date().toISOString().slice(0, 10);

      const {newTaskName, newTaskFinishDate, newTaskPriority} = this.state;
      const newTask = {
        name: newTaskName,
        finishDate: newTaskFinishDate,
        createDate: actualDate,
        priority: newTaskPriority,
        done: false,
        id: uuid.v4(),
      }
      const addNewTask = this.props.addNewTask(newTask)

    }

  render() { 
    return ( 
      <AddTaskWrapper>
        <Input type="text" placeholder="Wpisz zadanie" onChange={this.handleChangeTaskName} />
        <Input type="date" value={this.state.date} onChange={this.handleChangeDate} />
        <Input id="checkbox" type="checkbox" onChange={this.handleCheckPriority} />
        <label htmlFor="checkbox">Ważne</label>
        <Button onClick={this.handleSubmit} >Dodaj zadanie</Button>
      </AddTaskWrapper>
     );
  }
}
const AddTaskWrapper = styled.form`
  display: flex;
  justify-content: space-around;
  margin: 15px;
  padding: 10px 50px;
  width: 700px;
  background-color: #fff;
`
const Input = styled.input`
  border: none;
  font-size: 15px;
  font-family: Lato, sans-serif;
  text-align: left;
`
const Button = styled.button`
    font-size: 14px;
    padding: 2px 10px;
    font-family: Lato, sans-serif;
    margin: 2px 10px;
`
export default AddTask;