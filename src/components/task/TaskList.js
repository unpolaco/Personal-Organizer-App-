import React from 'react'
import Task from './Task'
import uuid from 'uuid'
import styled from 'styled-components'
import DownArrowIcon from '../../icons/arrowDown'
import UpArrowIcon from '../../icons/arrowUp'
import { SortingButton } from '../other/Button';
import { Title } from '../other/Title';

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
      <Title 
        size='fontL' 
        color='#4DB6AC'>ZADANIA DO ZROBIENIA</Title>
      <SortingButtonWrapper>
        <SortingButton onClick={handleSortName}>Sortuj po nazwie{!sortByNameGrowing ? <DownArrowIcon/> : <UpArrowIcon/>}
        </SortingButton>
        <SortingButton onClick={handleSortDate}>Sortuj po dacie  {!sortByDateGrowing ? <DownArrowIcon/> : <UpArrowIcon/>}
        </SortingButton>
      </SortingButtonWrapper>
        {activeTasks}   
      <Title 
        size='fontL' 
        color='#4DB6AC'>ZADANIA ZROBIONE</Title>
        {doneTasks}
    </TasksLists>
  )
}


const TasksLists = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  margin: 180px auto 0 auto;
  padding: 10px;
  width: 80%;
  min-width: 800px;
  max-width: 1000px;
`
const SortingButtonWrapper= styled.div`
  display: flex;
  justify-content: flex-end;
`

export default TaskList;
