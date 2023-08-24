import useValidation from '../hooks/useValidation';
import { signUpApi } from '../api/authApi';
import { useNavigate, Link } from 'react-router-dom';
import useInputValues from '../hooks/useInputValues';

function Signup() {
	const initialValue = { email: '', password: '' };
	const { inputData, handleChange, reset } = useInputValues(initialValue);
	const isPassed = useValidation(inputData);
	const navigate = useNavigate();

	const handleClickSignup = () => {
		signUpApi(inputData, navigate);
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
			<button data-testid="signup-button" disabled={!isPassed} onClick={handleClickSignup}>
				회원가입
			</button>
			<Link to={'/signin'}>로그인하기</Link>
		</div>
	);
}

export default Signup;
