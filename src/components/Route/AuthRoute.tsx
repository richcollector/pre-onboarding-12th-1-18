import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from '../../utils/Token';

const AuthRoute = () => {
	const isAuth = getToken();
	if (isAuth) {
		return <Outlet />;
	} else {
		alert('로그인이 필요합니다!');
		return <Navigate to="/signin" />;
	}
};

export default AuthRoute;
