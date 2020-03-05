import React from 'react'
import styled from 'styled-components'
import CheckMarkIcon from '../icons/checkmark-circle.js'
import StarOutlineIcon from '../icons/star-outline.js'
import TrashIcon from '../icons/trash.js'

function Task(props) {
  const {name, priority, finishDate, timeToFinishTask, id} = props.tasks;
  const {handleDoneTask, handleDeleteTask, handlePriorityTask} = props;

  return (
      <TaskItem important={priority}>
        <TextWrapper>
          <TextTaskName big>{name}</TextTaskName>
          <Text small>{finishDate ? 'data: ' + finishDate : ""}</Text>
          <Text small>do zrobienia {finishDate ? timeToFinishTask : "kiedyś"}</Text>
        </TextWrapper>
        <ButtonWrapper>
          <Button 
            onClick={() => handleDoneTask(id)}>
            <CheckMarkIcon/>
          </Button>
          <Button 
            onClick={() => handleDeleteTask(id)}>
            <TrashIcon/>
          </Button>
          <Button 
            onClick={() => handlePriorityTask(id)}>
            <StarOutlineIcon/>
          </Button>
        </ButtonWrapper>
      </TaskItem>
  )
}

const TaskItem= styled.div`
  display: flex;
  margin: 2px 0;
  padding: 5px;
  transition: 100ms ease-in-out;
  border-left: ${props => props.important ? '5px solid #e74c3c' : '5px solid #2ecc71'};
&:hover {
  box-shadow: 1px 1px 3px 1px #ccc;
  transition: 300ms ease-in-out;
  background-color: #f6fafd;
&:hover > * {
  background-color: #f6fafd;
}
}
`
const ButtonWrapper= styled.div`
  /* position: relative; */
  width: 120px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const TextWrapper= styled.div`
  display: flex; 
  flex: 1;
  max-width: 700px;
`
const Button = styled.button`
  /* position: absolute;
  left: 0px;
  top: 10px; */
  /* fill: #34495e; */
  /* stroke: #34495e; */
  padding: 2px 5px;
  background-color: #fff;
  border: none;

  & > * {
    fill: #34495e;
    stroke: #34495e;

  }
  &:hover > * {
    fill: #3498db;
    stroke: #3498db;
  }
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
export default Task;
