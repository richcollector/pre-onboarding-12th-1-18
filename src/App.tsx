import { Suspense } from 'react';
import { Global } from '@emotion/react';
import { globalStyles } from './styles/globalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './components/layout/Loader';

import { lazy } from 'react';
import PublicRoute from './components/route/PublicRoute';
import AuthRoute from './components/route/AuthRoute';

// 동적으로 불러오기 위한 lazy 사용
const Layout = lazy(() => import('./components/layout/Layout'));
const SignUp = lazy(() => import('./pages/SignUp'));
const SignIn = lazy(() => import('./pages/SignIn'));
const TodoList = lazy(() => import('./pages/TodoList'));
const Main = lazy(() => import('./pages/Main'));

function ThemeRoutes() {
	return (
		<BrowserRouter>
			<Global styles={globalStyles} />
			<Layout>
				<Routes>
					<Route element={<PublicRoute />}>
						<Route path="/" element={<Main />} />
						<Route path="/signin" element={<SignIn />} />
						<Route path="/signup" element={<SignUp />} />
					</Route>
					<Route element={<AuthRoute />}>
						<Route path="/todo" element={<TodoList />} />
					</Route>
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

function App() {
	return (
		<Suspense fallback={<Loader />}>
			<ThemeRoutes />
		</Suspense>
	);
}

export default App;
