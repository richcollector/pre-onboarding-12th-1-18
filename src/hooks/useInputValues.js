import { useCallback, useState } from 'react';

const useInputValues = initialForm => {
	const [inputData, setFormData] = useState(initialForm);
	const handleChange = e => {
		const { name, value } = e.target;
		setFormData({ ...inputData, [name]: value });
	};
	const reset = useCallback(() => setFormData(initialForm), [initialForm]);
	return { inputData, handleChange, reset };
};

export default useInputValues;
