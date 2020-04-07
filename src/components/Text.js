import styled from 'styled-components';

const Text = styled.div`
	display: flex;
	align-items: center;
	margin: 10px;
	font-size: ${({ theme }) => theme.fontS};
	color: ${({ theme }) => theme.blueGrey800};
  font-weight: ${({ bold }) => bold || '300'};
`;
const TextBig = styled(Text)`
	display: flex;
	flex: 1;
	font-size: ${({ theme }) => theme.fontL};
`;

export { Text, TextBig }
