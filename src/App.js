import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./assets/styles/GlobalStyles";
import { useState } from "react";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import axios from "axios";
import { URLS } from "./assets/constants/URLS";

function App() {
	const [signInForm, setSignInForm] = useState({ email: "", password: "" });

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
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err.response.data));
	}

	return (
		<Router>
			<GlobalStyles />
			<Routes>
				<Route
					path='/'
					element={
						<SignInPage
							form={signInForm}
							setForm={setSignInForm}
							signIn={signIn}
						/>
					}
				/>
				<Route
					path='/sign-up'
					element={<SignUpPage />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
