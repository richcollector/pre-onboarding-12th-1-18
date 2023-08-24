import { type FormEvent, useEffect, useState } from 'react';
import * as S from '../../utils/styles/Todo.styles';
import useInputs from '../../hooks/useInputs';
import type { TypeTodo, TodoForm } from '../../utils/types/Todo.interface';
import { todoApi } from '../../api/TodoApi';
import TodoItem from './TodoItem';
import { useNavigate } from 'react-router';
import { removeToken } from '../../utils/token/Token';

export default function TodoPage() {
	const [todos, setTodos] = useState<TypeTodo[]>([]);
	const initialValue = { todo: '' };
	const { data, handleChange, reset } = useInputs(initialValue);
	const { todo: todoValue } = data as TodoForm;
	const navigate = useNavigate();

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

	const handleClickLogOut = async () => {
		removeToken();
		navigate('/');
	};

	useEffect(() => {
		const fetchTodos = async () => {
			const data = await todoApi.getTodo();
			setTodos(data);
		};

		fetchTodos();
	}, []);

	return (
		<S.TodoBox>
			<S.LogoutBox>
				<S.LogoutBtn onClick={handleClickLogOut}>로그아웃</S.LogoutBtn>
			</S.LogoutBox>
			<S.LogoBox>
				<S.ImgBox src="/logo.png" />
				<S.ToDoTile>To-Do List</S.ToDoTile>
			</S.LogoBox>

			<form onSubmit={handleClickAddBtn}>
				<S.InputBox>
					<S.InsertInput
						name="todo"
						data-testid="new-todo-input"
						onChange={handleChange}
						value={todoValue}
						type="text"
					/>
					<S.InputBtn data-testid="new-todo-add-button">추가</S.InputBtn>
				</S.InputBox>
			</form>
			<S.ListBox>
				{todos.map(todo => (
					<TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
				))}
			</S.ListBox>
		</S.TodoBox>
	);
}
