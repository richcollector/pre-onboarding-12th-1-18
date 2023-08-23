import React, { useCallback, useState } from 'react';

const useInputs = (initialForm: FormData) => {
	const [formData, setFormData] = useState(initialForm);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	const reset = useCallback(() => setFormData(initialForm), [initialForm]);
	return { formData, handleChange, reset };
};

export default useInputs;
