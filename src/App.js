import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./assets/styles/GlobalStyles";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
	return (
		<Router>
			<GlobalStyles />
			<Routes>
				<Route
					path='/'
					element={<SignInPage />}
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
