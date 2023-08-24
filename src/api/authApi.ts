import * as Api from './Api';
import Auth from '../utils/interfaces/Auth.interface';

const API_URL = 'https://www.pre-onboarding-selection-task.shop';

export async function signUp(data: { email: string; password: string }): Promise<void> {
	const params = `auth/signup`;
	return await Api.post(API_URL, params, false, data);
}

export async function signIn(data: { email: string; password: string }): Promise<Auth> {
	const params = `auth/signin`;
	return await Api.post(API_URL, params, false, data);
}
