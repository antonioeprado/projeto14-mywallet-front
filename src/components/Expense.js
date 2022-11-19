import React, { useContext } from "react";
import axios from "axios";
import { LoginContext } from "../assets/contexts/UserContext";
import { URLS } from "../assets/constants/URLS";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Expense(props) {
	const { trigger, setTrigger, num } = props;
	const { _id, date, description, type, value } = props.expense;
	const { token } = useContext(LoginContext);
	const navigate = useNavigate();

	function confirmDelete(item) {
		const res = window.confirm("Você deseja deletar esse registro?");
		if (res) {
			removeExpense(item);
		}
	}

	function removeExpense(item) {
		const config = {
			method: "delete",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: {
				item,
			},
		};
		axios(URLS.expenses, config)
			.then((res) => {
				setTrigger(!trigger);
			})
			.catch((err) => console.log(err.response.data));
	}

	function handleNavigation() {
		const item = {
			_id,
			description,
			type,
			value,
		};
		navigate("/update", {
			state: {
				item,
			},
		});
	}

	return (
		<StyledParagraph type={type}>
			<span>
				{date}{" "}
				<span
					style={{ color: "#000000" }}
					onClick={handleNavigation}
				>
					{description}
				</span>
			</span>
			<span>
				{num.format(value)} <span onClick={() => confirmDelete(_id)}>x</span>
			</span>
		</StyledParagraph>
	);
}

const StyledParagraph = styled.p`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 300px;
	height: 46px;
	font-size: 16px;
	line-height: 24px;
	color: #868686;
	cursor: pointer;
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

export default Expense;
