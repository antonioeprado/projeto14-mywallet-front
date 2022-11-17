import React from "react";
import styled from "styled-components";

function Registry(props) {
	const { expenses, totalBalance } = props;
	const numFormat = new Intl.NumberFormat("pt-BR", {
		maximumFractionDigits: 2,
		minimumFractionDigits: 2,
		trailingZeroDisplay: "auto",
	});
	return (
		<RegistryWrapper>
			<div>
				{expenses ? (
					expenses.map((expense) => (
						<StyledParagraph
							key={expense.item}
							type={expense.type}
						>
							<span>
								{expense.date}{" "}
								<span style={{ color: "#000000" }}>{expense.description}</span>
							</span>
							<span>
								{numFormat.format(expense.value)} <span>x</span>
							</span>
						</StyledParagraph>
					))
				) : (
					<div>Não há registros de entrada ou saída</div>
				)}
			</div>
			{totalBalance && (
				<TotalBalanceRegister total={totalBalance}>
					Saldo: <span>{numFormat.format(totalBalance)}</span>
				</TotalBalanceRegister>
			)}
		</RegistryWrapper>
	);
}

const RegistryWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
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

const StyledParagraph = styled.p`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 300px;
	height: 46px;
	font-size: 16px;
	line-height: 24px;
	color: #868686;
	span:last-child {
		line-height: 19px;
		text-align: right;
		color: ${(props) => (props.type === "in" ? "#03AC00" : "#C70000")};
		span {
			font-size: 16px;
			line-height: 19px;
			cursor: pointer;
			margin-left: 10px;
			color: #c6c6c6;
		}
	}
`;

const TotalBalanceRegister = styled.p`
	width: 300px;
	height: 46px;
	justify-content: space-between;
	font-size: 17px;
	font-weight: 700;
	line-height: 20px;
	color: #000000;
	& > span {
		font-weight: 400;
		float: right;
		color: ${(props) => (props.total > 0 ? "#03AC00" : "#C70000")};
	}
`;

export default Registry;
