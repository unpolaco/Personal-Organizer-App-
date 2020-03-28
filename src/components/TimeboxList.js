import React, { Component } from 'react'
import Timebox from './Timebox'
import TimeboxCreator from './TimeboxCreator'
import uuid from 'uuid';


export default class TimeboxList extends Component {
  state = {
    timeboxes: [
      {id:0, timeboxName: "Pierwszy timebox", timeboxTimeInMinutes: "23", active: false,},
      {id:1, timeboxName: "Drugi timebox", timeboxTimeInMinutes: "2", active: false},
      {id:2, timeboxName: "Trzeci timebox", timeboxTimeInMinutes: "12", active: false},
    ],
    activeTimeboxId: "",
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

  setActiveTimebox = (activeIndex) => {
    this.setState(prevState => {
      const timeboxes = [...prevState.timeboxes]
      timeboxes.map(timebox => timebox.active = false)
      timeboxes[activeIndex].active = true;
      return timeboxes;
    })
  }
  handleSetActiveTimebox = (index) => {
    this.setActiveTimebox(index)
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
            isActive={timebox.active}
            onDelete={() => this.handleDelete(index)}
            onSetActiveTimebox={() => this.handleSetActiveTimebox(index)}
          />
        ))}
      </>
    )
  }
}
