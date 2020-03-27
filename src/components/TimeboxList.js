import React, { Component } from 'react'
import Timebox from './Timebox'
import TimeboxCreator from './TimeboxCreator'
import uuid from 'uuid';


export default class TimeboxList extends Component {
  state = {
    timeboxes: [
      {id:0, timeboxName: "Pierwszy timebox", timeboxTimeInMinutes: "23"},
      {id:1, timeboxName: "Drugi timebox", timeboxTimeInMinutes: "2"},
      {id:2, timeboxName: "Trzeci timebox", timeboxTimeInMinutes: "12"},
      
    ]
  }

  handleDelete = (indexToDelete) => {
    this.setState(prevState => {
      const timeboxes = prevState.timeboxes.filter((timebox, index) => index !== indexToDelete)
      return { timeboxes }
    })
  }
  addTimebox = (timebox) => {
    this.setState(prevState => {
      const timeboxes = [timebox, ...prevState.timeboxes]
      return { timeboxes };
    })
  }
  handleCreate = (newTimebox) => {
      this.addTimebox(newTimebox)
    }

  render() {
    return (
      <>
      <TimeboxCreator 
        onCreate={this.handleCreate}
      />
        {this.state.timeboxes.map((timebox, index) => (
          <Timebox 
            key={uuid.v4()}
            timeboxName={timebox.timeboxName}
            timeboxTimeInMinutes={timebox.timeboxTimeInMinutes}
            onDelete={() => this.handleDelete(index)}

          />
        ))}
      </>
    )
  }
}
