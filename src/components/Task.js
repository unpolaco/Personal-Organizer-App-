import React from 'react'

function Task(props) {
  const {tasks} = props;
  return (
      <div>
      {tasks.name}
      </div>
      
  )
}

export default Task;
