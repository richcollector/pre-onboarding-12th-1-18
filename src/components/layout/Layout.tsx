import React from 'react';
import { Link } from 'react-router-dom';

function Layout(props: { children: React.ReactNode }) {
	return (
		<>
			<header>
				<nav>
					<ul>
						<li>
							<Link to="/signup">회원가입</Link>
						</li>
						<li>
							<Link to="/signin">로그인</Link>
						</li>
						<li>
							<Link to="/todo">ToDo</Link>
						</li>
					</ul>
				</nav>
			</header>
			{props.children}
		</>
	);
}

export default Layout;
