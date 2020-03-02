import React, {Component} from 'react';
import AddTask from './components/AddTask'
import ActualDate from './components/ActualDate'
import TasksLists from './components/TaskList'
import uuid from 'uuid'
import { createGlobalStyle } from 'styled-components'
import moment from 'moment';

class App extends Component {
  state={
    tasks: [
      {
        name: "first task",
        finishDate: "2020-02-22",
        createDate: "",
        priority: false,
        done: false,
        id: uuid.v4(),
      },
      {
        name: "second task",
        finishDate: "2020-02-28",
        createDate: "",
        priority: false,
        done: true,
        id: uuid.v4(),
      },
      {
        name: "third task",
        finishDate: "2020-02-25",
        createDate: "",
        priority: true,
        done: false,
        id: uuid.v4(),
      }
    ],
    sortByDateGrowing: false,
    sortByNameGrowing: false,
   }

   deleteTask = (id) => {
    const tasks = [...this.state.tasks];

    const index = tasks.findIndex(task => task.id === id);
   
    tasks.splice(index, 1)
    this.setState({
      tasks,
    })
   }
   doneTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks[index].done = !tasks[index].done;
    this.setState({
      tasks,
    })
   }
   priorityTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks[index].priority = !tasks[index].priority;
    this.setState({
      tasks,
   })
  }
   addNewTask = (newTask) => {
    const tasks = [...this.state.tasks]
    tasks.unshift(newTask)
    this.setState({
      tasks,
    })
   }
 
  nameSorting = (sortByGrowing) => {
    const tasks = [...this.state.tasks]
    tasks.sort((a, b) => {
      if (a.name < b.name) 
        return sortByGrowing ? 1 : -1 
      if (a.name > b.name)
        return sortByGrowing ? -1 : 1 
      return 0;
     })
     
    this.setState({
      tasks,
      sortByNameGrowing: sortByGrowing ? true : false,
    }) 
  }

  sortByName = () => {
    let sortByGrowing
    this.state.sortByNameGrowing ? this.nameSorting(sortByGrowing) : this.nameSorting(!sortByGrowing)
 }

  dateSorting = (sortByGrowing) => {
    const tasks = [...this.state.tasks]
    tasks.sort((a, b) => {
      if (a.finishDate < b.finishDate) 
        return sortByGrowing ? 1 : -1 
      if (a.finishDate > b.finishDate)
        return sortByGrowing ? -1 : 1 
      return 0;
     })
    this.setState({
      tasks,
      sortByDateGrowing: sortByGrowing ? true : false,
    }) 
  }

  sortByDate = () => {
    let sortByGrowing
    this.state.sortByDateGrowing ? this.dateSorting(sortByGrowing) : this.dateSorting(!sortByGrowing)
 }
 
  
  render() {
    const now = moment(new Date())
    const {tasks, sortByDateGrowing, sortByNameGrowing} = this.state;
    return (
      <>
      <GlobalStyle />
        <ActualDate now={now}/>
      <div>
        <h2>Moja lista rzeczy do zrobienia</h2>
        <AddTask 
          now={now} 
          addNewTask={this.addNewTask}/>
      </div>
        <TasksLists 
          tasks={tasks}
          sortByDateGrowing={sortByDateGrowing}
          sortByNameGrowing={sortByNameGrowing}
          handleDeleteTask={this.deleteTask}
          handleDoneTask={this.doneTask}
          handlePriorityTask={this.priorityTask}
          handleSortName={this.sortByName}
          handleSortDate={this.sortByDate}
          />         
      </>
  )}
}

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #ecf0f1;
    text-align: center;
  & > * {
    font-size: 15px;
    font-family: Lato, sans-serif;
    color: #34495e;
  }
  }
`

export default App;
