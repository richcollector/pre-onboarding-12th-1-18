import useValidation from '../hooks/useValidation';
import { signInApi } from '../api/authApi';
import { Link } from 'react-router-dom';
import useInputValues from '../hooks/useInputValues';

function Signin() {
	const initialValue = { email: '', password: '' };
	const { inputData, handleChange, reset } = useInputValues(initialValue);
	const isPassed = useValidation(inputData);

	const handleClickSignin = () => {
		signInApi(inputData);
		reset();
	};

	return (
		<div>
			<input
				data-testid="email-input"
				type="email"
				name="email"
				onChange={handleChange}
				value={inputData.email}
				placeholder="이메일"
			/>
			<input
				data-testid="password-input"
				type="password"
				name="password"
				onChange={handleChange}
				value={inputData.password}
				placeholder="비밀번호"
			/>
			<button data-testid="signup-button" disabled={!isPassed} onClick={handleClickSignin}>
				로그인
			</button>
			<Link to={'/signup'}>회원가입하기</Link>
		</div>
	);
}

export default Signin;
