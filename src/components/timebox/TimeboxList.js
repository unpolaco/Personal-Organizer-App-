import React, { Component } from 'react';
import Timebox from './Timebox';
import uuid from 'uuid';
import TimeboxesAPI from '../../api/FetchTimeboxesApi';
import styled from 'styled-components';

export default class TimeboxList extends Component {
	state = {
		timeboxes: [],
		loading: true,
		error: null,
	};

	componentDidMount() {
		TimeboxesAPI.getAllTimeboxes()
			.then((timeboxes) => this.setState({ timeboxes }))
			.catch((error) => this.setState({ error }))
			.finally(() => this.setState({ loading: false }));
	}
	handleDelete = (indexToDelete) => {
		TimeboxesAPI.deleteTimebox(this.state.timeboxes[indexToDelete]).then(() =>
			this.setState((prevState) => {
				const timeboxes = prevState.timeboxes.filter(
					(timebox, index) => index !== indexToDelete
				);
				return { timeboxes };
			})
		);
	};
	addTimebox = (timebox) => {
		TimeboxesAPI.addTimebox(timebox).then((addedTimebox) =>
			this.setState((prevState) => {
				const timeboxes = [addedTimebox, ...prevState.timeboxes];
				return { timeboxes };
			})
		);
	};
	handleCreate = (newTimebox) => {
		this.addTimebox(newTimebox);
	};
	setActiveTimebox = (activeIndex) => {
		this.setState((prevState) => {
			const timeboxes = [...prevState.timeboxes];
			timeboxes.map((timebox) => (timebox.active = false));
			timeboxes[activeIndex].active = true;
			return timeboxes;
		});
	};
	handleSetActiveTimebox = (index) => {
		this.setActiveTimebox(index);
	};

	render() {
		return (
			<>
				<TimeboxListWrapper>
					{this.state.loading ? 'Poczekaj, trwa wczytywanie danych...' : null}
					{this.state.error
						? 'Wystąpił błąd podczas wczytywania danych...'
						: null}
					{this.state.timeboxes.map((timebox, index) => (
						<Timebox
							key={uuid.v4()}
							timeboxName={timebox.timeboxName}
							timeboxTimeInMinutes={timebox.timeboxTimeInMinutes}
							isActive={timebox.active}
							onDelete={() => this.handleDelete(index)}
							onSetActiveTimebox={() => this.handleSetActiveTimebox(index)}
						/>
					))}
				</TimeboxListWrapper>
			</>
		);
	}
}

const TimeboxListWrapper = styled.div`
	margin-top: 180px;
`;
