import React from 'react'
import styled from 'styled-components'
import CheckMarkIcon from '../icons/checkmark.js'
import ImportantIcon from '../icons/important.js'
import TrashIcon from '../icons/trash.js'

function Task(props) {
  const {name, priority, finishDate, timeToFinishTask, id} = props.tasks;
  const {handleDoneTask, handleDeleteTask, handlePriorityTask} = props;

 

  return (
      <TaskItem important={priority}>
        <TextWrapper >
          <TextTaskName big>{name}</TextTaskName>
          <Text small>data: {finishDate}</Text>
          <Text small>do zrobienia {timeToFinishTask}</Text>
        </TextWrapper>
        <ButtonWrapper>
          <Button onClick={() => handleDoneTask(id)}><CheckMarkIcon/></Button>
          <Button 
            onClick={() => handleDeleteTask(id)}
            // onMouseOver={this.mouseOver}
            // onMouseOut={this.mouseOut}
          ><TrashIcon fill="red"/></Button>
          <Button onClick={() => handlePriorityTask(id)}><ImportantIcon/></Button>
        </ButtonWrapper>
      </TaskItem>
  )
}
const TaskItem= styled.div`
  display: flex;
  margin: 2px 0;
  padding: 5px;
  border-left: ${props => props.important ? '5px solid #e74c3c' : '5px solid #2ecc71'};
`
const ButtonWrapper= styled.div`
  position: absolute;
  width: 120px;
`
const TextWrapper= styled.div`
  display: flex; 
  flex: 1;
  max-width: 700px;
`
const Button = styled.button`
  position: relative;
  left: 690px;
  top: 10px;
  padding: 2px 5px;
  background-color: #fff;
  border: none;
  border: 1px solid black;
  &:hover > * {
  /* fill: green; */
  stroke: red;
  background-color: green;
  color: red;
  /* display: none; */
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


// const TrashIcon = styled(TrashIcon)`
//   width: 15px;
//   color: red;
//   fill: black;
//   transition: transform 300ms ease-in-out;
//   &:hover {
//   /* fill: black; */
//   /* stroke: green; */
//   /* transform: translate() */
//   width: 22px;
//   }
// `
export default Task;
