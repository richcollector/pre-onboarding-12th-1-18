import { lazy, Suspense } from 'react';
import { Global } from '@emotion/react';
import { globalStyles } from './utils/styles/globalStyles';
import { Routes, Route } from 'react-router-dom';
// import { AuthRoute, AuthTodoRoute } from './components/route/AuthRoute';
import ROUTES from './constants/Routes';

// 동적으로 불러오기 위한 lazy 사용
// const Layout = lazy(() => import('./pages/layouts'));
const SignUp = lazy(() => import('./pages/signUp/SignUp'));
const SignIn = lazy(() => import('./pages/signIn/SignIn'));
const Todo = lazy(() => import('./pages/todo/Todo'));
const Main = lazy(() => import('./pages/main/Main'));
// const Error = lazy(() => import('./pages/error/Error'));

function App() {
	return (
		<>
			<Global styles={globalStyles} />
			<Suspense fallback="..loading">
				<Routes>
					{/* <Route element={<AuthRoute />}> */}
					<Route path={ROUTES.MAIN} element={<Main />} />
					<Route path={ROUTES.SIGNUP} element={<SignUp />} />
					<Route path={ROUTES.SIGNIN} element={<SignIn />} />
					{/* </Route> */}
					{/* <Route element={<AuthTodoRoute />}> */}
					<Route path={ROUTES.TODOLIST} element={<Todo />} />
					{/* </Route> */}
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
