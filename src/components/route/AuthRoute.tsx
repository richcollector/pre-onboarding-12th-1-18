import { Navigate, Outlet } from 'react-router-dom';

export const AuthRoute = () => {
	const isAuth = localStorage.getItem('token');
	return isAuth ? <Outlet /> : <Navigate to="/signin" />;
};

export const AuthTodoRoute = () => {
	const isAuth = localStorage.getItem('token');
	return isAuth ? <Outlet /> : <Navigate to="/todo" />;
};
