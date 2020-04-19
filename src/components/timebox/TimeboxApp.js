import React from 'react';
import styled from 'styled-components';
import TimeboxCreator from './TimeboxCreator';
import TimeboxList from './TimeboxList';

export default class TimeboxApp extends React.Component {
	state = {
		timeboxName: '',
		timeboxTimeInMinutes: '',
	};

	handleNameChange = (e) => {
		this.setState({
			timeboxName: e.target.value,
		});
	};
	handleTimeChange = (e) => {
		this.setState({
			timeboxTimeInMinutes: e.target.value,
		});
	};

	render() {
		const { timeboxName, timeboxTimeInMinutes } = this.state;
		return (
			<TimeboxWrapper>
				<TimeboxCreator onCreate={this.handleCreate} />
				<TimeboxList />
			</TimeboxWrapper>
		);
	}
}

const TimeboxWrapper = styled.div``;
