interface Todo {
	id: number;
	todo: string;
	isCompleted: boolean;
	userId: number;
}

export type TypeTodo = Todo;

export type TypeUpdateTodo = Pick<Todo, 'todo' | 'isCompleted'>;
