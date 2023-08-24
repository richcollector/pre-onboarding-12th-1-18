import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
	const isAuth = localStorage.getItem('access_token');
	return !isAuth ? <Outlet /> : <Navigate to="/todo" />;
};

export default PublicRoute;
