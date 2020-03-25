import React, { Component } from 'react'
import Timebox from './Timebox'
import uuid from 'uuid'


export default class TimeboxList extends Component {
  state = {
    timeboxes: [
      {id:0, taskName: "Pierwszy timebox", taskTimeInMinutes: "23"},
      {id:1, taskName: "Drugi timebox", taskTimeInMinutes: "2"},
      {id:2, taskName: "Trzeci timebox", taskTimeInMinutes: "12"},
    ]
  }
  handleDelete = (indexToDelete) => {
    this.setState(prevState => {
      const timeboxes = prevState.timeboxes.filter((timebox, index) => index !== indexToDelete)
      return { timeboxes }
    })
  }

  render() {
   
    return (
      <>
        {this.state.timeboxes.map((timebox, index) => (
          <Timebox 
            key={timebox.id}
            taskName={timebox.taskName}
            taskTimeInMinutes={timebox.taskTimeInMinutes}
            onDelete={() => this.handleDelete(index)}
          />
        ))}
      </>
    )
  }
}
