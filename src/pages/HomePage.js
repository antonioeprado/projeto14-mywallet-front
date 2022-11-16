import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../assets/contexts/UserContext";
import { StyledWrapper } from "../assets/styles/PageWrapper";
import Registry from "../components/Registry";
import Topbar from "../components/Topbar";
import styled from "styled-components";
import { HalfWidthButton } from "../assets/styles/Buttons";
import { URLS } from "../assets/constants/URLS";
import axios from "axios";

function HomePage() {
	const User = useContext(LoginContext);

	const [expenses, setExpenses] = useState([]);

	useEffect(() => {
		const config = {
			method: "get",
			headers: {
				Authorization: `Bearer + ${User.token}`,
			},
		};
		axios(URLS.expenses, config)
			.then((res) => {
				setExpenses(res?.data.expenses);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<StyledWrapper>
			<Topbar username={User.name} />
			<Registry />
			<ButtonsWrapper>
				<HalfWidthButton>
					<ion-icon name='add-circle-outline'></ion-icon>
					<ButtonsText>Nova entrada</ButtonsText>
				</HalfWidthButton>
				<HalfWidthButton>
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
