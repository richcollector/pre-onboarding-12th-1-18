export interface AuthForm {
	email: string;
	password: string;
}

export interface TodoForm {
	todo: string;
}

export interface Todo {
	id: number;
	todo: string;
	isCompleted: boolean;
}
