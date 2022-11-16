import styled from "styled-components";
import { buttoncolor, textColor } from "./Colors";

export const FullWidthButton = styled.button`
	all: unset;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 326px;
	height: 46px;
	border-radius: 5px;
	background-color: ${buttoncolor};
	color: ${textColor};
	cursor: pointer;
	font-size: 20px;
	font-weight: 700;
`;

export const HalfWidthButton = styled(FullWidthButton)`
	flex-flow: column nowrap;
	align-items: initial;
	justify-content: space-between;
	width: 155px;
	height: 114px;
	font-size: 17px;
`;
