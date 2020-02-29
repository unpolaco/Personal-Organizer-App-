import React from 'react'
import Task from './Task'
import uuid from 'uuid'
import styled from 'styled-components'

function TaskList(props) {
  const {tasks, handlePriorityTask, handleDeleteTask, handleDoneTask, handleSortName, handleSortDate} = props;
  
  const activeList = tasks.filter(task => !task.done);
  const activeTasks = activeList.map(task => <Task 
                handleDeleteTask={handleDeleteTask} 
                handleDoneTask={handleDoneTask} 
                handlePriorityTask={handlePriorityTask}
                key={uuid.v4()}
                tasks={task}/>)
  const doneList = tasks.filter(task => task.done);
  const doneTasks = doneList.map(task => <Task 
                handleDeleteTask={handleDeleteTask} 
                handleDoneTask={handleDoneTask} 
                handlePriorityTask={handlePriorityTask}
                key={uuid.v4()}
                tasks={task}/>)
                
  return (
    <TasksLists>
    <h2>Zadania do zrobienia</h2>
    <SortingButtonWrapper>
      <Button onClick={handleSortName} >Sortuj po nazwie</  Button>
      <Button onClick={handleSortDate}>Sortuj po dacie  ukończenia</Button>
    </SortingButtonWrapper>
      {activeTasks}
   
    <h2>Zadania zrobione</h2>
      {doneTasks}
    </TasksLists>
  )
}

const TasksLists = styled.div`
  display: flex;
  flex-direction: column;
  align-items: wrap;
  height: 400px;
  margin: 15px;
  padding: 10px;
  width: 800px;
  background-color: #fff;
`
const SortingButtonWrapper= styled.div`
  display: flex;
`
const Button = styled.button`
  flex-basis: 40%;
  font-size: 14px;
  padding: 2px 10px;
  font-family: Lato, sans-serif;
  margin: 2px 5px;
`

export default TaskList;
