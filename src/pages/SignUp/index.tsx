//import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../utils/constants/Routes';
import * as authApi from '../../api/authApi';
import { isValidEmail, isValidPassword } from '../../utils/Validation';
import useInputs from '../../hooks/useInputs';

function SignUp() {
	// const [email, setEmail] = useState<string>('');
	// const [password, setPassword] = useState<string>('');
	const initialValue = { email: '', password: '' };
	const { formData, handleChange, reset } = useInputs(initialValue);
	const { email, password } = formData;

	const navigate = useNavigate();

	// const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	const { value } = e.target;
	// 	setEmail(value);
	// };

	// const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	const { value } = e.target;
	// 	setPassword(value);
	// };

	const handleSignupBtnClick = async () => {
		try {
			// await authApi.signUp({ email, password });
			await authApi.signUp(formData);
			reset();
			navigate(ROUTES.SIGNIN);
		} catch (err) {
			alert('해당 이메일을 사용할 수 없습니다.');
			return;
		}
	};

	return (
		<div>
			<div>
				<h2>회원가입</h2>
			</div>
			<div>
				<span>이메일</span>
				<input
					data-testid="email-input"
					type="email"
					name="email"
					placeholder="이메일을 입력해주세요"
					value={email}
					onChange={handleChange}
				></input>
			</div>
			<div>
				<span>비밀번호</span>
				<input
					data-testid="password-input"
					type="password"
					name="password"
					placeholder="비밀번호를 입력해주세요"
					value={password}
					onChange={handleChange}
				></input>
			</div>
			<div>
				<button
					data-testid="signup-button"
					onClick={handleSignupBtnClick}
					disabled={!isValidEmail(email) || !isValidPassword(password)}
				>
					회원가입
				</button>
			</div>
		</div>
	);
}

export default SignUp;
