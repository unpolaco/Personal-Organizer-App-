import React from 'react'
import Task from './Task'

function TaskList(props) {
  const {tasks} = props;
  return (
    <div>
    <h2>Zadania do zrobienia</h2>

      {tasks.map(task => {
        return (
          !task.done ? <Task key={task.id} tasks={task}/> : false
        )
      }
      )}
    <h2>Zadania zrobione</h2>

    {tasks.map(task => {
        return (
          task.done ? <Task key={task.id} tasks={task}/> : false
        )
      }
      )}
    </div>
  )
}

export default TaskList;
