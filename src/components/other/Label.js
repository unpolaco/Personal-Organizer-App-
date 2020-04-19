import styled from 'styled-components';

const Label = styled.label`
	font-size: ${({ theme }) => theme.fontM};
`
const AnimatedLabel = styled.label`
	position: absolute;
	top: 23px;
	left: 20px;
	color: ${({ theme }) => theme.ghostWhite};
	font-size: ${({ theme }) => theme.fontM};
	pointer-events: none;
	transition: 0.3s ease all;
`;	

const IconLabel = styled.label`

`

export { AnimatedLabel, Label, IconLabel }