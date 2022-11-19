import React from "react";
import styled from "styled-components";

function Balance(props) {
	const { numFormat, totalBalance } = props;
	return (
		<TotalBalanceRegister total={totalBalance}>
			Saldo: <span>{numFormat.format(totalBalance)}</span>
		</TotalBalanceRegister>
	);
}

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

export default Balance;
