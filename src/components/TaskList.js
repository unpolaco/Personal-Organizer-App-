import React from 'react'
import Task from './Task'

function TaskList(props) {
  return (
    <div>
    <h2>Zadania do zrobienia</h2>
    
      {props.tasks.map(task => {
        return (
          <Task key={task.id} tasks={task} />
        )
      }
      )}
    </div>
  )
}

export default TaskList;
