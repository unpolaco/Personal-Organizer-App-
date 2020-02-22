import React from 'react'
import Task from './Task'

function TaskList(props) {
  const {tasks, handleDeleteTask, handleDoneTask} = props;
  
  const activeList = tasks.filter(task => !task.done);
  const activeTasks = activeList.map(task => <Task 
                handleDeleteTask={handleDeleteTask} 
                handleDoneTask={handleDoneTask} 
                key={task.id} 
                tasks={task}/>)
  const doneList = tasks.filter(task => task.done);
  const doneTasks = doneList.map(task => <Task 
                handleDeleteTask={handleDeleteTask} 
                handleDoneTask={handleDoneTask} 
                key={task.id} 
                tasks={task}/>)
  return (
    <div>
    <h2>Zadania do zrobienia</h2>
      {activeTasks}
   
    <h2>Zadania zrobione</h2>
      {doneTasks}
    </div>
  )
}

export default TaskList;
