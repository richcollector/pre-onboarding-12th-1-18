import * as S from '../../utils/styles/Layout.styles';
import { Outlet } from 'react-router-dom';

export default function Layout() {
	return (
		<>
			<S.Container>
				<S.Wrapper>
					<Outlet />
				</S.Wrapper>
			</S.Container>
		</>
	);
}
