import { Routes, Route } from 'react-router-dom';

import ROUTES from './constants/routes';
import MainPage from './pages/MainPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import TodoPage from './pages/TodoPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
	return (
		<Routes>
			<Route path={ROUTES.MAIN} element={<MainPage />} />
			<Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
			<Route path={ROUTES.SIGNIN} element={<SignInPage />} />
			<Route path={ROUTES.TODO} element={<TodoPage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
