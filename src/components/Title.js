import styled from 'styled-components';

const Title = styled.p`
	font-size: ${({ size, theme }) => size || theme.fontXl};
	color: ${({ color, theme }) => color || theme.ghostWhite};
`;

export { Title };
