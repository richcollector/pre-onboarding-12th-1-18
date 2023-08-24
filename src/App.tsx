import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import ROUTES from './constants/routes';
import AuthRoute from './components/route/AuthRoute';
import PublicRoute from './components/route/PublicRoute';
import Layout from './components/layout/Layout';
import LoadingPage from './pages/LoadingPage';

const MainPage = lazy(() => import('./pages/MainPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const TodoPage = lazy(() => import('./pages/TodoPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
	return (
		<Layout>
			<Suspense fallback={<LoadingPage />}>
				<Routes>
					<Route element={<PublicRoute />}>
						<Route path={ROUTES.MAIN} element={<MainPage />} />
						<Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
						<Route path={ROUTES.SIGNIN} element={<SignInPage />} />
					</Route>
					<Route element={<AuthRoute />}>
						<Route path={ROUTES.TODO} element={<TodoPage />} />
					</Route>
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Suspense>
		</Layout>
	);
}

export default App;
