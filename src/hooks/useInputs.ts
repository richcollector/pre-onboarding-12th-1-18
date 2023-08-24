import { useCallback, useState, ChangeEvent } from 'react';
import { AuthForm, TodoForm } from '../types/type';

const useInputs = (
	initialForm: AuthForm | TodoForm,
): {
	formData: AuthForm | TodoForm;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
	reset: () => void;
} => {
	const [formData, setFormData] = useState<AuthForm | TodoForm>(initialForm);
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	const reset = useCallback(() => setFormData(initialForm), [initialForm]);
	return { formData, handleChange, reset };
};

export default useInputs;
