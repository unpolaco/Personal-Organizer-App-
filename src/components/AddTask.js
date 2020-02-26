import React, { Component } from 'react';
import uuid from 'uuid'

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
      <form>
        <input type="text" placeholder="Wpisz zadanie" onChange={this.handleChangeTaskName} />
        <input type="date" value={this.state.date} onChange={this.handleChangeDate} />
        <input id="checkbox" type="checkbox" onChange={this.handleCheckPriority} />
        <label htmlFor="checkbox">Ważne</label>
        <button onClick={this.handleSubmit} >Dodaj zadanie</button>
      </form>
     );
  }
}
 
export default AddTask;