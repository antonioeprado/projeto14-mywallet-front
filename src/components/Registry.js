import React from "react";
import styled from "styled-components";

function Registry(props) {
	const { expenses } = props;
	return (
		<RegistryWrapper>
			<StyledParagraph>
				{expenses
					? expenses.map((expense) => <p>{expense}</p>)
					: "Não há registros de entrada ou saída"}
			</StyledParagraph>
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
`;

const StyledParagraph = styled.p`
	width: 180px;
	height: 46px;
	font-size: 20px;
	line-height: 24px;
	color: #868686;
	text-align: center;
`;

export default Registry;
