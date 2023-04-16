import HomePage from './pages/home/HomePage';

import './App.css';
import LoginPage from './pages/login/LoginPage';

function App() {
	return (
		<div className="App">
			<LoginPage>
				<HomePage />
			</LoginPage>
		</div>
	);
}

export default App;
