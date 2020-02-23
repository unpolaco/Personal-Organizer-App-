import React, {Component} from 'react';
import AddTask from './components/AddTask'
import TasksLists from './components/TaskList'

class App extends Component {
  state={
    tasks: [
      {
        id: 0,
        name: "first task",
        finishDate: "2020-02-22",
        createDate: "",
        priority: false,
        done: false,
      },
      {
        id: 1,
        name: "second task",
        finishDate: "2020-02-28",
        createDate: "",
        priority: false,
        done: true,
      },
      {
        id: 2,
        name: "third task",
        finishDate: "2020-02-25",
        createDate: "",
        priority: true,
        done: false,
      }
    ]
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
    tasks[id].done = !tasks[id].done;
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
          />
      </>
  )}
}
export default App;
