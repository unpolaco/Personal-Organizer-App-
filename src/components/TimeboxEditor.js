import React from 'react';
import styled from 'styled-components';

export default function TimeboxEditor(props) {
  const { onNameChange, timeboxName, onTimeChange, timeboxTimeInMinutes } = props;
	return (
		<TimeboxEditorWrapper>
			<Input
				type='text'
				onChange={onNameChange}
        value={timeboxName}
			/>
			<Input 
        type='number' 
        onChange={onTimeChange}
        value={timeboxTimeInMinutes}
      />
			<Button>Dodaj</Button>
		</TimeboxEditorWrapper>
	);
}


const TimeboxEditorWrapper = styled.div`
display: flex;
padding: 10px 0;
justify-content: center;
`
const Input = styled.input`
  border: none;
  width: ${props => props.timeboxName ? "250px" : "100px"};
  text-align: left;
  font-size: 17px;
  padding: 0 5px;
  border: 1px solid grey;
  &:hover {
    color: #3498db;
  }
`
const Button = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid grey;
    width: 100px;
    padding: 2px 10px;
    margin: 2px 10px;
    height: 25px;
    background-color: #fff;
    font-size: 15px;
  & > * {
    stroke: #34495e;
  }
  &:hover {
    color: #3498db;
    border: 1px solid #3498db;
  }
  &:hover > * {
    stroke: #3498db;
  }
`