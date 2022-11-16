import React, { useState } from "react";
import { StyledWrapper } from "../assets/styles/PageWrapper";
import { StyledTitle } from "../assets/styles/TextLogo";
import { StyledInput } from "../assets/styles/Input";
import { FullWidthButton } from "../assets/styles/Buttons";
import { Link, useNavigate } from "react-router-dom";
import { textColor } from "../assets/styles/Colors";
import axios from "axios";
import { URLS } from "../assets/constants/URLS";

function SignInPage(props) {
	const [signInForm, setSignInForm] = useState({ email: "", password: "" });
	const { setUser } = props;
	const navigate = useNavigate();

	function signIn(e) {
		e.preventDefault();
		const config = {
			method: "post",
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
			},
			data: {
				...signInForm,
			},
		};
		axios(URLS.signIn, config)
			.then((res) => {
				setUser(res.data);
				navigate("/home");
			})
			.catch((err) => console.log(err.response.data));
	}

	function handleForm(e) {
		const { name, value } = e.target;
		setSignInForm({
			...signInForm,
			[name]: value,
		});
	}

	return (
		<StyledWrapper>
			<StyledTitle>MyWallet</StyledTitle>
			<form
				onSubmit={signIn}
				style={{ display: "flex", flexFlow: "column nowrap" }}
			>
				<StyledInput
					name='email'
					placeholder='E-mail'
					value={signInForm.email}
					onChange={handleForm}
				/>
				<StyledInput
					name='password'
					placeholder='Senha'
					value={signInForm.password}
					onChange={handleForm}
				/>
				<FullWidthButton>Entrar</FullWidthButton>
			</form>
			<Link
				to={"/sign-up"}
				style={LinkStyle}
			>
				Primeira vez? Cadastre-se!
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

export default SignInPage;
