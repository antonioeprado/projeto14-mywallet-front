import React from "react";
import styled from "styled-components";

function Registry(props) {
	const { expenses } = props;
	return (
		<RegistryWrapper>
			{expenses ? (
				expenses.map((expense) => (
					<StyledParagraph
						key={expense.id}
						type={expense.type}
					>
						<span>
							{expense.date}{" "}
							<span style={{ color: "#000000" }}>{expense.description}</span>
						</span>
						<span>{expense.value}</span>
					</StyledParagraph>
				))
			) : (
				<div>Não há registros de entrada ou saída</div>
			)}
		</RegistryWrapper>
	);
}

const RegistryWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column nowrap;
	width: 326px;
	height: 446px;
	border-radius: 5px;
	background-color: #fff;
	& > div {
		width: 180px;
		height: 46px;
		text-align: center;
		font-size: 20px;
		color: #868686;
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
		color: ${(props) => (props.type === "in" ? "#03AC00" : "#C70000")};
	}
`;

export default Registry;
