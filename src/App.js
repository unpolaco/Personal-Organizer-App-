import React, {Component} from 'react';
import AddTask from './components/AddTask'
import TasksLists from './components/TaskList'

class App extends Component {
  state={ }
  render() {
    return (
      <>
        <AddTask />
        <TasksLists />

      </>
  )}
}

export default App;
