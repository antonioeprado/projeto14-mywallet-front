import React, { useContext } from "react";
import { LoginContext } from "../assets/contexts/UserContext";
import { StyledWrapper } from "../assets/styles/PageWrapper";
import Registry from "../components/Registry";
import Topbar from "../components/Topbar";
import styled from "styled-components";
import { HalfWidthButton } from "../assets/styles/Buttons";
import { useNavigate } from "react-router-dom";

function HomePage() {
	const { name } = useContext(LoginContext);
	const navigate = useNavigate();

	return (
		<StyledWrapper>
			<Topbar username={name} />
			<Registry />
			<ButtonsWrapper>
				<HalfWidthButton
					onClick={() => navigate("/entry", { state: { type: "in" } })}
				>
					<ion-icon name='add-circle-outline'></ion-icon>
					<ButtonsText>Nova entrada</ButtonsText>
				</HalfWidthButton>
				<HalfWidthButton
					onClick={() => navigate("/entry", { state: { type: "out" } })}
				>
					<ion-icon name='remove-circle-outline'></ion-icon>
					<ButtonsText>Nova saída</ButtonsText>
				</HalfWidthButton>
			</ButtonsWrapper>
		</StyledWrapper>
	);
}

const ButtonsWrapper = styled.div`
	display: flex;
	flex-flow: row nowrap;
	margin-top: 13px;
	button:last-child {
		margin-left: 15px;
	}
	& > button > ion-icon {
		font-size: 25px;
		margin: 9px 8px;
	}
`;

const ButtonsText = styled.p`
	width: 64px;
	height: 64px;
	margin-top: 23px;
	margin-left: 10px;
	font-size: 17px;
	font-weight: 700;
	line-height: 20px;
`;

export default HomePage;
