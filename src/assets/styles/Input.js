import styled from "styled-components";
import { placeholderColor } from "./Colors";

export const StyledInput = styled.input`
	width: 326px;
	height: 58px;
	border-radius: 5px;
	margin-bottom: 13px;
	text-indent: 10px;

	&::placeholder {
		font-size: 20px;
		line-height: 23px;
		color: ${placeholderColor};
	}
`;
