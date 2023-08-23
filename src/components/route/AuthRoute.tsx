import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute = () => {
	const isAuth = localStorage.getItem('token');
	return isAuth ? <Outlet /> : <Navigate to="/signin" />;
};

export default AuthRoute;
