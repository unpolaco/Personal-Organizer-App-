import React from 'react';
import styled from 'styled-components';
import 'moment/locale/pl';

function ActualDate(props) {
	const { now } = props;
	return (
		<DateWrapper>
			<DisplayDate>{now.format('dddd').toString().toUpperCase()}</DisplayDate>
			<DisplayDate day>{now.format('D')}</DisplayDate>
			<DisplayDate>{now.format('MMMM YYYY')}</DisplayDate>
		</DateWrapper>
	);
}
const DisplayDate = styled.div`
	font-size: ${(props) => (props.day ? '65px' : props.theme.fontM)};
	margin: 7px;
`;
const DateWrapper = styled.div`
	color: ${({ theme }) => theme.blueGrey200};
	height: 150px;
	margin-bottom: 50px;
	background-color: ${({ theme }) => theme.blueGrey800};
`;

export default ActualDate;
