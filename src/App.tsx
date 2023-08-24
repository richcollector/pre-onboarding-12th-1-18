import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ROUTES from './constants/Routes';
import Main from './pages/Main';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Todo from './pages/TodoList';
import AuthRoute from './components/Route/AuthRoute';
import PublicRoute from './components/Route/PublicRoute';

// import { lazy } from 'react';

// const Main = lazy(() => import('./pages/Main'));
// const SignUp = lazy(() => import('./pages/SignUp'));
// const SignIn = lazy(() => import('./pages/SignIn'));
// const Todo = lazy(() => import('./pages/TodoList'));

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route element={<PublicRoute />}>
					<Route path={ROUTES.SIGNUP} element={<SignUp />} />
					<Route path={ROUTES.SIGNIN} element={<SignIn />} />
				</Route>
				<Route element={<AuthRoute />}>
					<Route path={ROUTES.TODOLIST} element={<Todo />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
