import * as S from '../../utils/styles/Sign.styles';
import ROUTES from '../../constants/Routes';
import { isValidEmail, isValidPassword } from '../../hooks/Validation';
import useInputs from '../../hooks/useInputs';
import useAuthApi from '../../api/useAuthApi';

export default function SignIn() {
	const initialValue = { email: '', password: '' };
	const { formData, handleChange, reset } = useInputs(initialValue);
	const { email, password } = formData;
	const { signin }: any = useAuthApi;

	const isValid = {
		email: isValidEmail(email),
		password: isValidPassword(password),
		emailErrorMessage: '',
		passwordErrorMessage: '',
	};

	const handleLogin = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		signin(formData);
		reset();
	};

	return (
		<>
			<S.SignWrapper>
				<S.SignBox>
					<S.SignLink to={ROUTES.SIGNUP}>회원가입</S.SignLink>
				</S.SignBox>
				<S.LogoBox>
					<S.ImgBox src="/logo.png" />
					<S.ToDoTile>SignIn Page</S.ToDoTile>
				</S.LogoBox>
				<S.FormBox>
					<S.InputBox>
						<S.Input
							data-testid="email-input"
							type="email"
							name="email"
							placeholder="이메일을 입력해주세요."
							onChange={handleChange}
							value={email}
							autoComplete="off"
						/>
						<S.ErrorBox>{isValid.emailErrorMessage}</S.ErrorBox>
						<S.Input
							data-testid="password-input"
							type="password"
							name="password"
							placeholder="비밀번호를 입력해주세요."
							onChange={handleChange}
							value={password}
						/>
						<S.ErrorBox>{isValid.passwordErrorMessage}</S.ErrorBox>
					</S.InputBox>
					<S.LogBox>
						<S.LogBtn
							data-testid="signin-button"
							style={{
								backgroundColor: isValid.email && isValid.password ? 'yellow' : '',
							}}
							disabled={!isValid.email || !isValid.password}
							onClick={handleLogin}
						>
							로그인하기
						</S.LogBtn>
					</S.LogBox>
				</S.FormBox>
			</S.SignWrapper>
		</>
	);
}
