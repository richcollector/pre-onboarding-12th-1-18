import { API_ENDPOINTS } from './Api';
import { useNavigate } from 'react-router-dom';

function useAuthApi() {
	const navigate = useNavigate();

	const tokenConfig = {
		headers: {
			'Content-type': 'application/json',
		},
	};

	const signup = async (form: any) => {
		try {
			await fetch(API_ENDPOINTS.AUTH_SIGNUP, {
				method: 'POST',
				headers: tokenConfig.headers,
				body: JSON.stringify({ email: form.email, password: form.password }),
			});
			navigate('/signin');
		} catch (error) {
			if (error instanceof Error) alert('로그인 정보가 올바르지 않습니다. 다시 시도해주세요.');
		}
	};

	const signin = async (form: any) => {
		try {
			const response = await fetch(API_ENDPOINTS.AUTH_SIGNIN, {
				method: 'POST',
				headers: tokenConfig.headers,
				body: JSON.stringify({ email: form.email, password: form.password }),
			});

			const data = await response.json();
			const access_token = data?.access_token;
			localStorage.setItem('access_token', access_token);
			navigate('/todo');
		} catch (error) {
			if (error instanceof Error) alert('로그인 정보가 올바르지 않습니다. 다시 시도해주세요.');
		}
	};
	return { signup, signin };
}

export default useAuthApi;
