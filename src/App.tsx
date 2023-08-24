import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

// 동적으로 불러오기 위한 lazy 사용
const Signup = lazy(() => import('./pages/Signup'));
const Signin = lazy(() => import('./pages/Signin'));
const Todo = lazy(() => import('./pages/Todo'));
const PublicRoute = lazy(() => import('./route/PublicRoute'));
const AuthRoute = lazy(() => import('./route/AuthRoute'));

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<PublicRoute />}>
					<Route path="/" element={<Signin />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
				</Route>
				<Route element={<AuthRoute />}>
					<Route path="/todo" element={<Todo />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
