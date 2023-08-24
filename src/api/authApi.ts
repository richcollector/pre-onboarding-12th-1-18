import API_ENDPOINTS from '../utils/endpoint/api';
import { AuthForm, Auth } from '../utils/types/Auth.interface';
import { setToken } from '../utils/token/Token';
import { callApi } from './api';

export const authApi = {
	signup: async ({ email, password }: AuthForm): Promise<any> => {
		const data = { email, password };
		await callApi(API_ENDPOINTS.SIGNUP, 'POST', data);
	},

	signin: async ({ email, password }: AuthForm): Promise<Auth> => {
		const data = { email, password };
		const responseData = await callApi(API_ENDPOINTS.SIGNIN, 'POST', data);
		setToken(responseData.access_token);
		return responseData;
	},
};
