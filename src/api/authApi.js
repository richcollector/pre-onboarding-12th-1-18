// 회원가입 api
export const signUpApi = async (formData, navigate) => {
	const { email, password } = formData;
	try {
		const response = await fetch('https://www.pre-onboarding-selection-task.shop/auth/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});

		const data = await response.json();

		if (response.ok) {
			alert('가입이 완료되었습니다! 로그인해주세요.');
			navigate('/signin');
		} else {
			alert(data.message);
		}
	} catch (error) {
		alert('An error occurred while signing up.');
	}
};

// 로그인 api
export const signInApi = async formData => {
	const { email, password } = formData;

	try {
		const response = await fetch('https://www.pre-onboarding-selection-task.shop/auth/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});

		const data = await response.json();

		if (response.ok) {
			localStorage.setItem('access_token', data.access_token);
			window.location.reload();
		} else {
			alert(data.message);
		}
	} catch (error) {
		alert('An error occurred while signing in.');
	}
};
