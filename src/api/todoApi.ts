import API_ENDPOINTS from '../constants/api';
import { callApi } from './api';

export const todoApi = {
	createTodo: async (newTodo: string): Promise<any> => {
		const data = { todo: newTodo };
		const responseData = await callApi(API_ENDPOINTS.TODO_CREATE, 'POST', data);
		return responseData;
	},

	getTodo: async (): Promise<any> => {
		const responseData = await callApi(API_ENDPOINTS.TODO_GET, 'GET');
		return responseData;
	},

	updateTodo: async (id: number, editTodo: string, isCompleted: boolean): Promise<any> => {
		const data = { todo: editTodo, isCompleted };
		const responseData = await callApi(API_ENDPOINTS.TODO_UPDATE(id), 'PUT', data);
		return responseData;
	},

	deleteTodo: async (id: number): Promise<any> => {
		await callApi(API_ENDPOINTS.TODO_DELETE(id), 'DELETE');
	},
};
