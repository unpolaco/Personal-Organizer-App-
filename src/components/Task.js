import React from 'react'
import uuid from 'uuid'

function Task(props) {
  const {name, finishDate, createDate, id} = props.tasks;
  const {handleDoneTask, handleDeleteTask, handlePriorityTask} = props;
  return (
      <div >
      {name}
      {finishDate}
      {createDate}
      {id}
      
      <button onClick={() => handleDoneTask(id)}>Zrobione</button>
      <button onClick={() => handleDeleteTask(id)}>Usuń</button>
      <button onClick={() => handlePriorityTask(id)}>Ważne</button>
      </div>
      
  )
}

export default Task;
