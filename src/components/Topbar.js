import React from "react";
import { textColor } from "../assets/styles/Colors";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Topbar(props) {
	const navigate = useNavigate();
	const { username } = props;
	return (
		<TopbarWrapper>
			<StyledParagraph>Olá, {username}</StyledParagraph>
			<ion-icon
				onClick={() => navigate("/")}
				name='exit-outline'
			></ion-icon>
		</TopbarWrapper>
	);
}

const TopbarWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 375px;
	height: 78px;
	& > ion-icon {
		margin-right: 24px;
		font-size: 28px;
		color: ${textColor};
		cursor: pointer;
	}
`;

const StyledParagraph = styled.p`
	margin-left: 24px;
	font-size: 26px;
	font-weight: 700;
	line-height: 31px;
	color: ${textColor};
`;

export default Topbar;
