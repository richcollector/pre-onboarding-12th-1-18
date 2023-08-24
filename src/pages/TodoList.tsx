import { FormEvent, useEffect, useState } from 'react';
import TodoItem from '../components/todo/TodoItem';
import { Todo, TodoForm } from '../types/type';
import useInputs from '../hooks/useInputs';
import { todoApi } from '../api/todoApi';

const TodoList = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const initialValue = { todo: '' };
	const { formData, handleChange, reset } = useInputs(initialValue);
	const { todo: todoValue } = formData as TodoForm;

	const handleClickAddBtn = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (todoValue === '') {
			alert('내용을 입력해주세요');
			return;
		}

		const newTodo = await todoApi.createTodo(todoValue);
		setTodos(prevTodos => [...prevTodos, newTodo]);
		reset();
	};

	useEffect(() => {
		const fetchTodos = async () => {
			const data = await todoApi.getTodo();
			setTodos(data);
		};

		fetchTodos();
	}, []);

	return (
		<>
			<form onSubmit={handleClickAddBtn}>
				<div>
					<input
						name="todo"
						data-testid="new-todo-input"
						onChange={handleChange}
						value={todoValue}
					/>
					<button data-testid="new-todo-add-button" type="submit">
						추가
					</button>
				</div>
			</form>
			<ul>
				{todos.map(todo => (
					<TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
				))}
			</ul>
		</>
	);
};

export default TodoList;
