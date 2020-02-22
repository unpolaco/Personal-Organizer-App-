import React, { Component } from 'react';

class AddTask extends Component {
  state = {
    newTaskName: "",
    newTaskDate: "",
    newTaskPriority: false,
    newTask: "",
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
        date: e.target.value,
      })
    }

    handleSubmit = (e) => {
      e.preventDefault()
      const {newTaskName, newTaskDate, newTaskPriority} = this.state;
      const newTask = {
        name: newTaskName,
        date: newTaskDate,
        priority: newTaskPriority,
        done: false,
      }
      this.setState({
        newTask,
      })
      console.log(newTask);
      
    }

  render() { 
    return ( 
      <form>
        <input type="text" placeholder="Wpisz zadanie" onChange={this.handleChangeTaskName} />
        <input type="date" value={this.state.date} onChange={this.handleChangeDate} />
        <input type="checkbox" onChange={this.handleCheckPriority} />
        <button onClick={this.handleSubmit} >Dodaj zadanie</button>
      </form>
     );
  }
}
 
export default AddTask;