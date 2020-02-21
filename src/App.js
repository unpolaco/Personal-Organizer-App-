import React, {Component} from 'react';
import AddTask from './components/AddTask'
import TasksLists from './components/TaskList'

class App extends Component {
  state={
    tasks: [
      {
        id: 0,
        name: "first task",
        priority: false,
        done: false,
      },
      {
        id: 1,
        name: "second task",
        priority: false,
        done: true,
      },
      {
        id: 2,
        name: "third task",
        priority: true,
        done: false,
      }
    ]
   }
  render() {
    const {tasks} = this.state
    return (
      <>
        <AddTask />
        <TasksLists tasks={tasks}/>

      </>
  )}
}

export default App;
