import React, { Component } from 'react'
import AddIcon from '../../icons/add'
import { SubmitButton } from '../other/Button';
import { Input } from '../other/Input';
import { AnimatedLabel } from '../other/Label';
import { FieldSet } from '../other/FieldSet';
import { Form } from '../other/Form';
import { Title } from '../other/Title';
import { TopPanel } from '../other/TopPanel';


export default class TimeboxCreator extends Component {
state = {
  newTimeboxName: "",
  newTimeboxTime: "",
}
  handleNewTimeboxName = (e) => {
    this.setState({
      newTimeboxName: e.target.value,
    })
  }
  handleNewTimeboxTime = (e) => {
    this.setState({
      newTimeboxTime: e.target.value,
    })
  }
  handleCreateNewTimebox = (e) => {
    e.preventDefault();
    this.props.onCreate({
      timeboxName: this.state.newTimeboxName,
      timeboxTimeInMinutes: this.state.newTimeboxTime,
      active: true,
    })
    this.setState({
      newTimeboxName: "",
      newTimeboxTime: "",
     })
  }

  render() {
    const { newTimeboxName, newTimeboxTime } = this.state;
    return (
      <TopPanel>
        <Title>TIMEBOX</Title>
        <Form 
            onSubmit={this.handleCreateNewTimebox}>
          <FieldSet>
			      <Input
              required
              id="timeboxName"
              nameInput
			      	type='text'
			      	onChange={this.handleNewTimeboxName}
              value={newTimeboxName}
			      />
            <AnimatedLabel htmlFor="timeboxName">Nazwa timeboxa</AnimatedLabel>
          </FieldSet>
          <FieldSet>
			      <Input 
              required
              id="timeboxTime"
              type='number' 
              onChange={this.handleNewTimeboxTime}
              value={newTimeboxTime}
            />
            <AnimatedLabel htmlFor="timeboxTime">Czas timeboxa</AnimatedLabel>
          </FieldSet>
          <SubmitButton>
            <AddIcon/>Dodaj Timeboxa
          </SubmitButton>
		    </Form>
      </TopPanel>
    )
  }
}



