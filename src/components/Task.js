import React from 'react'
import styled from 'styled-components'
// import trashIcon from '../img/trash-outline.svg'
import CheckMarkIcon from '../icons/checkmark.js'
import ImportantIcon from '../icons/important.js'
import TrashIcon from '../icons/trash.js'

function Task(props) {
  const {name, finishDate, timeToFinishTask, id} = props.tasks;
  const {handleDoneTask, handleDeleteTask, handlePriorityTask} = props;
  return (
      <TaskItem >
        <TextWrapper >
          <TextTaskName big>{name}</TextTaskName>
          <Text small>data: {finishDate}</Text>
          <Text small>do zrobienia {timeToFinishTask}</Text>
        </TextWrapper>
        <ButtonWrapper>
          <Button onClick={() => handleDoneTask(id)}><CheckMarkIcon/></Button>
          <Button onClick={() => handleDeleteTask(id)}><TrashIcon fill="blue"/></Button>
          <Button onClick={() => handlePriorityTask(id)}><ImportantIcon/></Button>
        </ButtonWrapper>
      </TaskItem>
  )
}
const TaskItem= styled.div`
  display: flex;
  margin: 2px 0;
  padding: 5px;
  border-left: 5px solid #2ecc71;
`
const ButtonWrapper= styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
`
const TextWrapper= styled.div`
  display: flex; 
  flex: 1;
`
const Button = styled.button`
  padding: 2px 5px;
  background-color: #fff;
  border: none;
`
const Text = styled.div`
  display: flex;
  align-items: center;
  width: 120px;
  font-size: 12px;
  margin: 10px;
`
const TextTaskName = styled(Text)`
  flex: 1;
  font-size: 17px;
`


const Icon = styled.svg`
  color: red;
  fill: black;
&:hover {
  fill: black;
  width: 18px;
  }
`
export default Task;
