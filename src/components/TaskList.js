import React from 'react'
import Task from './Task'

function TaskList(props) {
  const {tasks, handlePriorityTask, handleDeleteTask, handleDoneTask, handleSortName, handleSortDate} = props;
  
  const activeList = tasks.filter(task => !task.done);
  const activeTasks = activeList.map(task => <Task 
                handleDeleteTask={handleDeleteTask} 
                handleDoneTask={handleDoneTask} 
                handlePriorityTask={handlePriorityTask}
                key={task.id} 
                tasks={task}/>)
  const doneList = tasks.filter(task => task.done);
  const doneTasks = doneList.map(task => <Task 
                handleDeleteTask={handleDeleteTask} 
                handleDoneTask={handleDoneTask} 
                handlePriorityTask={handlePriorityTask}
                key={task.id} 
                tasks={task}/>)
                
  return (
    <div>
    <h2>Zadania do zrobienia</h2>
    <button onClick={handleSortName} >Sortuj po nazwie</button>
    <button onClick={handleSortDate}>Sortuj po dacie ukończenia</button>
      {activeTasks}
   
    <h2>Zadania zrobione</h2>
      {doneTasks}
    </div>
  )
}

export default TaskList;
