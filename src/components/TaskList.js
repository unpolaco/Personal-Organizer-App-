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
    <h2>Zadania do zrobienia</h2>
    <SortingButtonWrapper>
      <Button onClick={handleSortName}>Sortuj po nazwie{!sortByNameGrowing ? <DownArrowIcon/> : <UpArrowIcon/>}
      </Button>
      <Button onClick={handleSortDate}>Sortuj po dacie  {!sortByDateGrowing ? <DownArrowIcon/> : <UpArrowIcon/>}
      </Button>
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
`
const Icon = styled.img`
  width: 15px;
  fill: red;
`
export default TaskList;
