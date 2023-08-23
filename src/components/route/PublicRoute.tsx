import { Navigate, Outlet } from 'react-router-dom';

function PublicRoute() {
	const isAuth = localStorage.getItem('token');
	return !isAuth ? <Outlet /> : <Navigate to="/todo" />;
}

export default PublicRoute;
