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
      },
      {
        id: 1,
        name: "second task",
        priority: false,
      }
    ]
   }
  render() {
    return (
      <>
        <AddTask />
        <TasksLists tasks={this.state.tasks}/>

      </>
  )}
}

export default App;
