import styled from 'styled-components';

const TopPanel = styled.div`
	position: fixed;
	height: 150px;
	width: calc(100% - 200px);
	min-width: 800px;
	z-index: 5;
	background-color: ${({ color, theme }) => color || theme.lime600};
	color: ${({ theme }) => theme.ghostWhite};
`;

export { TopPanel };
