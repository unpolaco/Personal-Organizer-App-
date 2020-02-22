import React from 'react'

function Task(props) {
  const {name, date, id} = props.tasks;
  const {handleDoneTask, handleDeleteTask} = props;
  return (
      <div>
      {name}
      {date}
      <button onClick={() => handleDoneTask(id)}>Zrobione</button>
      <button onClick={() => handleDeleteTask(id)}>Usuń</button>
      </div>
      
  )
}

export default Task;
