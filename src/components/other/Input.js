import styled from 'styled-components';

const Input = styled.input`
	margin: 15px 15px 10px 0;
	background-color: ${({ color, theme }) => color || theme.lime600};
	width: ${(props) => (props.nameInput ? '300px' : '120px')};
	height: 25px;
	padding: 5px;
	border: none;
	font-size: ${({ theme }) => theme.fontL};
	color: ${({ theme }) => theme.ghostWhite};
	border-bottom: 1px solid ${({ theme }) => theme.ghostWhite};
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	&[type='number'] {
		-moz-appearance: textfield;
	}
	&:focus {
		outline: none;
	}
	&:focus ~ label {
		top: -5px;
		left: 20px;
		font-size: ${({ theme }) => theme.fontS};
		color: ${({ theme }) => theme.ghostWhite};
	}
	&:valid ~ label {
		top: -5px;
		left: 20px;
		font-size: ${({ theme }) => theme.fontS};
		color: ${({ theme }) => theme.ghostWhite};
	}
`;
const InputDate = styled.input`
	background-color: ${({ theme }) => theme.ghostWhite};
	-webkit-mask-image: url(${({icon}) => icon});
	mask-image: url(${({icon}) => icon});
	background-repeat: no repeat;
	background-position: 50% 50%;
	background-size: 50%;
	height: 18px;
	width: 18px;

	border: none; 
 &::-webkit-inner-spin-button {
		display: none;
	}
	&::-webkit-calendar-picker-indicator {
		opacity: 1;
		left: 5px;
	}
`;

const CheckboxInput = styled.input`
	display: none;
`;

export { Input, InputDate, CheckboxInput };
