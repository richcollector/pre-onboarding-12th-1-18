import API_ENDPOINTS from '../constants/api';
import { AuthForm } from '../types/type';
import { setToken } from '../utils/token';
import { callApi } from './api';

export const authApi = {
	signup: async ({ email, password }: AuthForm): Promise<any> => {
		const data = { email, password };
		const responseData = await callApi(API_ENDPOINTS.SIGNUP, 'POST', data);
		return responseData;
	},

	signin: async ({ email, password }: AuthForm): Promise<any> => {
		const data = { email, password };
		const responseData = await callApi(API_ENDPOINTS.SIGNIN, 'POST', data);
		setToken(responseData.access_token);
	},
};
