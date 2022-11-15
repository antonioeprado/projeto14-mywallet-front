import React from "react";
import { StyledWrapper } from "../assets/styles/PageWrapper";
import { StyledTitle } from "../assets/styles/TextLogo";
import { StyledInput } from "../assets/styles/Input";
import { FullWidthButton } from "../assets/styles/Buttons";
import { Link } from "react-router-dom";
import { textColor } from "../assets/styles/Colors";

function SignInPage(props) {
	const { form, setForm, signIn } = props;

	function handleForm(e) {
		const { name, value } = e.target;
		setForm({
			...form,
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
					value={form.email}
					onChange={handleForm}
				/>
				<StyledInput
					name='password'
					placeholder='Senha'
					value={form.password}
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
