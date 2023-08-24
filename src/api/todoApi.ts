import * as Api from './Api';
import * as Todo from '../utils/interfaces/Todo.interface';

const API_URL = 'https://www.pre-onboarding-selection-task.shop';

export async function createTodo(data: { todo: string }): Promise<Todo.TypeTodo> {
	const params = `todos`;
	return await Api.post(API_URL, params, true, data);
}

export async function getTodos(): Promise<Todo.TypeTodo[]> {
	const params = `todos`;
	return await Api.get(API_URL, params, true);
}

export async function updateTodo(
	todoId: number,
	data: { todo: string; isCompleted: boolean },
): Promise<Todo.TypeUpdateTodo> {
	const params = `todos/${todoId}`;
	return await Api.put(API_URL, params, true, data);
}

export async function deleteTodo(todoId: number): Promise<void> {
	const params = `todos/${todoId}`;
	return await Api.delete(API_URL, params, true);
}
