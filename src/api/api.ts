import { getToken } from '../utils/token';

const baseURL = 'https://www.pre-onboarding-selection-task.shop';

const createHeaders = () => {
	const headers = new Headers();
	const token = getToken();

	if (token) {
		headers.append('Authorization', `Bearer ${token}`);
	}

	return headers;
};

export const callApi = async (endpoint: string, method: string, data: object = {}) => {
	const url = `${baseURL}${endpoint}`;
	const headers = createHeaders();

	if (method === 'GET') {
		try {
			const response = await fetch(url, {
				method,
				headers,
			});
			return await handleResponse(response);
		} catch (e) {
			console.error(e);
		}
	} else {
		headers.append('Content-Type', 'application/json');
		try {
			const response = await fetch(url, {
				method,
				headers,
				body: JSON.stringify(data),
			});
			return await handleResponse(response);
		} catch (e) {
			console.error(e);
		}
	}
};

const handleResponse = async (response: Response) => {
	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.message || response.statusText);
	}
	return await response.json();
};
