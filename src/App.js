import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import moment from 'moment';
import ActualDate from './components/date/ActualDate';
import TimeboxApp from './components/timebox/TimeboxApp';
import TaskApp from './components/task/TaskApp';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/mainTheme';
import { SideBarButton } from './components/other/Button';

function wait(ms = 1000) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

class App extends Component {
	state = {
		timebox: false,
		taskList: true,
	};

	showTimebox = () => {
		this.setState({
			timebox: !this.state.timebox,
			taskList: !this.state.taskList,
		});
	};
	showTaskList = () => {
		this.setState({
			timebox: !this.state.timebox,
			taskList: !this.state.taskList,
		});
	};

	render() {
		const now = moment(new Date());
		return (
			<Wrapper>
				<GlobalStyle />
				<ThemeProvider theme={theme}>
					<>
						<SideBar>
							<ActualDate now={now} />
							<SideBarButton
								onClick={this.showTaskList}
								disabled={this.state.taskList}
							>
								LISTA ZADAŃ
							</SideBarButton>
							<SideBarButton
								onClick={this.showTimebox}
								disabled={this.state.timebox}
							>
								TIMEBOXY
							</SideBarButton>
						</SideBar>
						<MainSection>
							{this.state.taskList ? <TaskApp /> : null}
							{this.state.timebox ? <TimeboxApp /> : null}
						</MainSection>
					</>
				</ThemeProvider>
			</Wrapper>
		);
	}
}

const Wrapper = styled.div`
	display: flex;
`;
const SideBar = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #263238;
	position: fixed;
	height: 100vh;
`;
const MainSection = styled.div`
	margin-left: 200px;
	min-width: 800px;
	display: flex;
	flex-direction: column;
	flex: 1;
	align-content: center;
`;

export default App;
