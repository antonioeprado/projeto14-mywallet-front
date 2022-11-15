import styled from "styled-components";
import { backgroundColor } from "./Colors";

export const StyledWrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	width: 375px;
	height: 667px;
	background-color: ${backgroundColor};
`;
