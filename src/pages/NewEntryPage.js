import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { URLS } from "../assets/constants/URLS";
import { FullWidthButton } from "../assets/styles/Buttons";
import { StyledWrapper } from "../assets/styles/PageWrapper";
import { StyledInput } from "../assets/styles/Input";
import { LoginContext } from "../assets/contexts/UserContext";

function NewEntryPage() {
	const { token } = useContext(LoginContext);
	const [form, setForm] = useState({ value: "", description: "", type: "in" });
	const navigate = useNavigate();

	function handleForm(e) {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	}

	function sendExpense(e) {
		e.preventDefault();
		const config = {
			method: "post",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: {
				...form,
			},
		};
		axios(URLS.expenses, config)
			.then(navigate("/home"))
			.catch((err) => console.log(err));
	}

	return (
		<Wrapper>
			<p>Nova Entrada</p>
			<form onSubmit={sendExpense}>
				<StyledInput
					name='value'
					placeholder='Valor'
					value={form.value}
					onChange={handleForm}
				/>
				<StyledInput
					name='description'
					placeholder='Descrição'
					value={form.description}
					onChange={handleForm}
				/>
				<FullWidthButton>Salvar entrada</FullWidthButton>
			</form>
		</Wrapper>
	);
}

const Wrapper = styled(StyledWrapper)`
	justify-content: initial;
	align-items: initial;
	& > * {
		margin-left: 24px;
	}
	& > p {
		font-size: 26px;
		line-height: 31px;
		color: #fff;
		font-weight: 700;
		margin-top: 25px;
		margin-bottom: 27px;
	}
`;

export default NewEntryPage;
