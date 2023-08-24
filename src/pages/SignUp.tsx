import { FormEvent } from 'react';
import useValidation from '../hooks/useValidation';
import { Link, useNavigate } from 'react-router-dom';
import useInputs from '../hooks/useInputs';
import { AuthForm } from '../types/type';
import { authApi } from '../api/authApi';

const SignIn = () => {
	const initialValue = { email: '', password: '' };

	const { formData, handleChange, reset } = useInputs(initialValue);
	const { email, password } = formData as AuthForm;
	const isPassed = useValidation({ email, password });

	const navigate = useNavigate();

	const handleClickSignUp = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await authApi.signup({ email, password });
		reset();
		navigate('/signin');
	};

	return (
		<form onSubmit={handleClickSignUp}>
			<input
				name="email"
				data-testid="email-input"
				type="email"
				onChange={handleChange}
				value={email}
			/>
			<input
				name="password"
				data-testid="password-input"
				type="password"
				onChange={handleChange}
				value={password}
			/>
			<button data-testid="signup-button" disabled={!isPassed} type="submit">
				회원가입
			</button>
			<Link to={'/signin'}>로그인하기</Link>
		</form>
	);
};

export default SignIn;
