import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ROUTES from './constants/Routes';
import { lazy, Suspense } from 'react';

const Main = lazy(() => import('./pages/Main'));
const SignUp = lazy(() => import('./pages/SignUp'));
const SignIn = lazy(() => import('./pages/SignIn'));
const Todo = lazy(() => import('./pages/TodoList'));
const AuthRoute = lazy(() => import('./components/Route/AuthRoute'));
const PublicRoute = lazy(() => import('./components/Route/PublicRoute'));

function App() {
	return (
		<BrowserRouter>
			<Suspense fallback="Loading">
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
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
