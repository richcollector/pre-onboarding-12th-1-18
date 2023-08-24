import { useNavigate } from 'react-router-dom';
import ROUTES from '../../utils/constants/Routes';

function Main() {
	const navigate = useNavigate();

	const handleSignupBtnClick = () => {
		navigate(ROUTES.SIGNUP);
	};

	const handleSigninBtnClick = () => {
		navigate(ROUTES.SIGNIN);
	};

	const handleTodoListBtnClick = () => {
		navigate(ROUTES.TODOLIST);
	};

	return (
		<div>
			<h2>메인페이지</h2>
			<button onClick={handleSignupBtnClick}>회원가입</button>
			<button onClick={handleSigninBtnClick}>로그인</button>
			<button onClick={handleTodoListBtnClick}>투두리스트</button>
		</div>
	);
}

export default Main;
