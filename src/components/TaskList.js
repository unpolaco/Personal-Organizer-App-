import React from 'react'
import Task from './Task'
import uuid from 'uuid'
import styled from 'styled-components'
import DownArrowIcon from '../icons/arrowDown'
import UpArrowIcon from '../icons/arrowUp'

function TaskList(props) {
  const {tasks, sortByNameGrowing, sortByDateGrowing, handlePriorityTask, handleDeleteTask, handleDoneTask, handleSortName, handleSortDate} = props;
  
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
    <Title>ZADANIA DO ZROBIENIA</Title>
    <SortingButtonWrapper>
      <Button onClick={handleSortName}>Sortuj po nazwie{!sortByNameGrowing ? <DownArrowIcon/> : <UpArrowIcon/>}
      </Button>
      <Button onClick={handleSortDate}>Sortuj po dacie  {!sortByDateGrowing ? <DownArrowIcon/> : <UpArrowIcon/>}
      </Button>
    </SortingButtonWrapper>
      {activeTasks}   
    <Title>ZADANIA ZROBIONE</Title>
      {doneTasks}
    </TasksLists>
  )
}

const Title = styled.h2`
font-size: 20px;
color: #34495e;
`
const TasksLists = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  margin-top: 15px;
  padding: 10px;
  background-color: #fff;
`
const SortingButtonWrapper= styled.div`
  display: flex;
  justify-content: flex-end;
`
const Button = styled.button`
  width: 200px;
  height: 25px;
  text-align: left;
  border: none;
  color: #34495e;
  font-size: 15px;
 
  & > * {
    fill: #34495e;
    /* stroke: #34495e; */
 
}
  &:hover > * {
    fill: #3498db;
    /* stroke: #3498db; */
}
`
export default TaskList;
