import { useState, useEffect } from 'react';

// 이메일과 패스워드를 받아 유효성 검사 후 통과 여부를 불리언 값으로 반환합니다.
const useValidation = inputData => {
	const [isPassed, setIsPassed] = useState(false);
	const { email, password } = inputData;

	useEffect(() => {
		if (email.includes('@') && password.length >= 8) {
			setIsPassed(true);
		} else {
			setIsPassed(false);
		}
	}, [email, password]);

	return isPassed;
};

export default useValidation;
