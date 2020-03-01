import React from 'react'
import styled from 'styled-components'

function Task(props) {
  const {name, finishDate, timeToFinishTask, id} = props.tasks;
  const {handleDoneTask, handleDeleteTask, handlePriorityTask} = props;
  return (
      <TaskItem >
        <TextWrapper >
          <Text big>{name}</Text>
          <Text small>data: {finishDate}</Text>
          <Text small>do zrobienia {timeToFinishTask}</Text>
        </TextWrapper>
        <ButtonWrapper>
          <Button onClick={() => handleDoneTask(id)}>Zrobione</Button>
          <Button onClick={() => handleDeleteTask(id)}>Usuń</Button>
          <Button onClick={() => handlePriorityTask(id)}>Ważne</Button>
        </ButtonWrapper>
      </TaskItem>
  )
}
const TaskItem= styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2px 0;
  padding: 5px;
  border-left: 5px solid #2ecc71;
`
const ButtonWrapper= styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
`
const TextWrapper= styled.div`
  display: flex; 
  justify-content: space-between;
  width: 500px;
`
const Button = styled.button`
  font-size: 14px;
  padding: 2px 10px;
  font-family: Lato, sans-serif;
  margin: 2px 5px;
`
const Text = styled.div`
  display: flex;
  align-items: center;
  font-size: ${props => props.small ? "12px" : "17px" };
  font-weight: ${props => props.small ? "light" :"bold" } ;
  margin: 10px;
`

export default Task;
