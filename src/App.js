import React, {Component} from 'react';
import AddTask from './components/AddTask'
import TasksLists from './components/TaskList'
import uuid from 'uuid'

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
    tasks[id].priority = !tasks[id].priority;
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
    const {tasks} = this.state;
    return (
      <>
        <h2>Moja lista rzeczy do zrobienia</h2>
        <AddTask addNewTask={this.addNewTask}/>
        <TasksLists 
          tasks={tasks}
          handleDeleteTask={this.deleteTask}
          handleDoneTask={this.doneTask}
          handlePriorityTask={this.priorityTask}
          handleSortName={this.sortByName}
          handleSortDate={this.sortByDate}
          />
      </>
  )}
}
export default App;
