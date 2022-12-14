import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./assets/styles/GlobalStyles";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { useState } from "react";
import { LoginContext } from "./assets/contexts/UserContext";
import HomePage from "./pages/HomePage";
import NewExpensePage from "./pages/NewExpensePage";
import UpdateExpensePage from "./pages/UpdateExpense";

function App() {
	const [user, setUser] = useState({ name: "", email: "", token: "" });

	return (
		<LoginContext.Provider value={user}>
			<Router>
				<GlobalStyles />
				<Routes>
					<Route
						path='/'
						element={<SignInPage setUser={setUser} />}
					/>
					<Route
						path='/sign-up'
						element={<SignUpPage />}
					/>
					<Route
						path='/home'
						element={<HomePage />}
					/>
					<Route
						path='/entry'
						element={<NewExpensePage />}
					></Route>
					<Route
						path='/update'
						element={<UpdateExpensePage />}
					></Route>
				</Routes>
			</Router>
		</LoginContext.Provider>
	);
}

export default App;
