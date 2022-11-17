import React, { useState } from "react";
import { StyledWrapper } from "../assets/styles/PageWrapper";
import { StyledInput } from "../assets/styles/Input";
import { FullWidthButton } from "../assets/styles/Buttons";
import { Link, useNavigate } from "react-router-dom";
import { textColor } from "../assets/styles/Colors";
import { StyledTitle } from "../assets/styles/TextLogo";
import axios from "axios";
import { URLS } from "../assets/constants/URLS";

function SignUpPage() {
	const [signUpForm, setSignUpForm] = useState({
		name: "",
		email: "",
		password: "",
		repassword: "",
	});

	const navigate = useNavigate();

	function handleForm(e) {
		const { name, value } = e.target;
		setSignUpForm({
			...signUpForm,
			[name]: value,
		});
	}
	function signUp(e) {
		e.preventDefault();
		const config = {
			method: "post",
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
			},
			data: {
				...signUpForm,
			},
		};
		axios(URLS.signUp, config)
			.then((res) => {
				console.log(res.data);
				navigate("/");
			})
			.catch((err) => console.log(err.response.data));
	}

	return (
		<StyledWrapper>
			<StyledTitle>MyWallet</StyledTitle>
			<form
				onSubmit={signUp}
				style={{ display: "flex", flexFlow: "column nowrap" }}
			>
				<StyledInput
					name='name'
					placeholder='Nome'
					onChange={handleForm}
					value={signUpForm.name}
				/>
				<StyledInput
					name='email'
					placeholder='E-mail'
					onChange={handleForm}
					value={signUpForm.email}
					type='email'
				/>
				<StyledInput
					name='password'
					placeholder='Senha'
					onChange={handleForm}
					value={signUpForm.password}
					type='password'
				/>
				<StyledInput
					name='repassword'
					placeholder='Confirme a senha'
					onChange={handleForm}
					value={signUpForm.repassword}
					type='password'
				/>
				<FullWidthButton>Cadastrar</FullWidthButton>
			</form>
			<Link
				to={"/"}
				style={LinkStyle}
			>
				Já tem uma conta? Entre agora!
			</Link>
		</StyledWrapper>
	);
}

const LinkStyle = {
	fontSize: "15px",
	lineHeight: "18px",
	color: textColor,
	marginTop: "36px",
	fontWeight: 700,
	textDecoration: "none",
};

export default SignUpPage;
