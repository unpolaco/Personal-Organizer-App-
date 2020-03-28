import React, { Component } from 'react'
import Timebox from './Timebox'
import TimeboxCreator from './TimeboxCreator'
import uuid from 'uuid';

const timeboxes = [
  {id:0, timeboxName: "Pierwszy timebox", timeboxTimeInMinutes: "23", active: false,},
  {id:1, timeboxName: "Drugi timebox", timeboxTimeInMinutes: "2", active: false},
  {id:2, timeboxName: "Trzeci timebox", timeboxTimeInMinutes: "12", active: false},
]

function wait(ms=1000) {
  return new Promise(
    (resolve) => {
      setTimeout(resolve, ms);
    }
  )
}
const TimeboxesAPI = {
  getAllTimeboxes: async function() {
    await wait(2000);
    return [...timeboxes];
  },
  addTimebox: async function(timeboxToAdd) {
    await wait(1000);
    const addedTimebox = {...timeboxToAdd, id: uuid.v4()}
    timeboxes.unshift(addedTimebox);
    return addedTimebox
  }
}

export default class TimeboxList extends Component {
  state = {
    timeboxes: [],
    loading: true,
    error: null,
  }

  componentDidMount() {
    TimeboxesAPI.getAllTimeboxes().then(
      (timeboxes) => this.setState({ timeboxes })
    ).catch(
      (error) => this.setState({ error })
    ).finally(
      () => this.setState({loading: false})
    )
  }
  handleDelete = (indexToDelete) => {
    this.setState(prevState => {
      const timeboxes = prevState.timeboxes.filter((timebox, index) => index !== indexToDelete)
      return { timeboxes }
    })
  }
  addTimebox = (timebox) => {
    TimeboxesAPI.addTimebox(timebox).then(
      (addedTimebox) => this.setState(prevState => {
        const timeboxes = [addedTimebox, ...prevState.timeboxes]
        return { timeboxes };
      })
    )
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
        {this.state.loading ? "Poczekaj na wczytanie danych..." : null}
        {this.state.error ? "Wystąpił błąd podczas wczytywania danych..." : null}
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
