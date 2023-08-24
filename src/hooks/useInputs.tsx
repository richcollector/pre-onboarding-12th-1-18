import React, { useCallback, useState } from 'react';

const useInputs = (initialForm: any) => {
	const [formData, setFormData] = useState(initialForm);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData: any) => ({ ...prevData, [name]: value }));
	};
	const reset = useCallback(() => setFormData(initialForm), [initialForm]);
	return { formData, handleChange, reset };
};

export default useInputs;
