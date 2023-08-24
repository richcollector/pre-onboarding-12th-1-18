import React, { ReactNode } from 'react';
import * as S from './Layout.styles';

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<S.Container>
			<S.Wrapper>{children}</S.Wrapper>
		</S.Container>
	);
};
export default Layout;
