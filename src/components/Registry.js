import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { URLS } from "../assets/constants/URLS";
import { LoginContext } from "../assets/contexts/UserContext";
import Balance from "./Balance";
import Expense from "./Expense";

function Registry() {
	const [expenses, setExpenses] = useState([]);
	const [totalBalance, setTotalBalance] = useState(0);
	const [trigger, setTrigger] = useState(false);

	const { token } = useContext(LoginContext);

	const numFormat = new Intl.NumberFormat("pt-BR", {
		maximumFractionDigits: 2,
		minimumFractionDigits: 2,
		trailingZeroDisplay: "auto",
	});

	useEffect(() => {
		setTimeout(() => {
			const config = {
				method: "get",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
			axios(URLS.expenses, config)
				.then((res) => {
					setExpenses(res.data.expenses);
					setTotalBalance(res.data.total);
				})
				.catch((err) => console.log(err));
		}, 500);
	}, [token, trigger]);

	return (
		<RegistryWrapper expense={expenses}>
			<div>
				{expenses ? (
					expenses.map((expense, index) => (
						<Expense
							key={index}
							expense={expense}
							num={numFormat}
							token={token}
							trigger={trigger}
							setTrigger={setTrigger}
						/>
					))
				) : (
					<div>Não há registros de entrada ou saída</div>
				)}
			</div>
			{expenses && (
				<Balance
					numFormat={numFormat}
					totalBalance={totalBalance}
				/>
			)}
		</RegistryWrapper>
	);
}

const RegistryWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: ${(props) => (props.expense ? "space-between" : "center")};
	flex-flow: column nowrap;
	width: 326px;
	height: 446px;
	border-radius: 5px;
	background-color: #fff;
	& > div > div {
		width: 180px;
		height: 46px;
		text-align: center;
		font-size: 20px;
		color: #868686;
		margin: auto;
	}
`;

export default Registry;
