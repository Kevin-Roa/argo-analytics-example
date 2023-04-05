import { useState, useEffect } from 'react';
import HomePage from './pages/home/HomePage';

import './App.css';
import LoginPage from './pages/login/LoginPage';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const onLogin = () => {
		setIsLoggedIn(true);
		window.history.replaceState(
			{},
			'Home',
			window.location.href.replace('/login', '/')
		);
	};

	useEffect(() => {
		if (window.location.pathname.includes('/login')) {
			setIsLoggedIn(false);
		} else {
			onLogin();
		}
	}, []);

	return (
		<div className="App">
			{isLoggedIn ? <HomePage /> : <LoginPage onLogin={onLogin} />}
		</div>
	);
}

export default App;
