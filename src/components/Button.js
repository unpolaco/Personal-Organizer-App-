import styled from 'styled-components';

const Button = styled.button`
	display: flex;
	justify-content: space-around;
	align-items: center;
	border: none;
`;
const SideBarButton = styled(Button)`
	width: 200px;
	height: 35px;
	color: ${({ theme }) => theme.blueGrey200};
	background-color: ${({ theme }) => theme.blueGrey900};
	font-size: ${({ theme }) => theme.fontM};
	}
	&:hover,
	&:disabled {
		color: ${({ theme }) => theme.blueGrey900};
		background-color: ${({ theme }) => theme.blueGrey200};
	}
`;
const SubmitButton = styled(Button)`
	width: 150px;
	height: 35px;
	padding: 2px 10px;
	margin: 2px 10px;
	background-color: ${({ color, theme }) => color || theme.lime600};
	color: ${({ theme }) => theme.ghostWhite};
	font-size: ${({ theme }) => theme.fontM};
	& > * {
		stroke: ${({ theme }) => theme.ghostWhite};
	}
	&:hover {
		color: ${({ color, theme }) => color || theme.lime600};
		background-color: ${({ theme }) => theme.ghostWhite};
	}
	&:hover > * {
		stroke: ${({ color, theme }) => color || theme.lime600};
	}
`;
const IconButton = styled(Button)`
	width: ${({ size }) => size || '17px'};
	height: ${({ size }) => size || '17px'};
	background-color: ${({ theme }) => theme.blueGrey800};
	-webkit-mask-image: url(${({ icon }) => icon});
	mask-image: url(${({ icon }) => icon});

	background-repeat: no repeat;
	background-position: 50% 50%;
	background-size: 40%;
	&:hover {
		background-color: ${({ theme }) => theme.ufoGreen};
	}
	&:disabled {
		background-color: ${({ color, theme }) => color || theme.blueGrey200};
	}
`;
const SortingButton = styled(Button)`
	width: 200px;
	height: 25px;
	text-align: left;
	background-color: ${({ theme }) => theme.teal300};
	color: ${({ theme }) => theme.ghostWhite};
	font-size: ${({ theme }) => theme.fontM};
	border-right: 1px solid #f1f8e9;
	& > * {
		fill: ${({ theme }) => theme.ghostWhite};
	}
	&:hover > * {
		fill: ${({ theme }) => theme.ghostWhite};
	}
`;

export { SortingButton, IconButton, SideBarButton, SubmitButton, Button };
