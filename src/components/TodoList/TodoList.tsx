import React, { useState, useEffect } from 'react';
import * as todoApi from '../../api/todoApi';
import { useNavigate } from 'react-router-dom';
import TodoListChange from './TodoListChange';

interface TodoItem {
	id: number;
	todo: string;
	isCompleted: boolean;
}

function TodoList() {
	const [todo, setTodo] = useState<string>('');
	const [todos, setTodos] = useState<TodoItem[]>([]);

	const navigate = useNavigate();

	useEffect(() => {
		getTodos();
	}, []);

	const handleTodoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setTodo(value);
	};

	const handleCreateTodo = async () => {
		try {
			const res = await todoApi.createTodo({ todo });

			setTodos([...todos, { id: res.id, todo, isCompleted: false }]);
			setTodo(''); // Todo 추가 후 입력창 초기화
		} catch (err) {
			alert('Todo 등록이 되지 않았습니다.');
			return;
		}
	};

	const getTodos = async () => {
		try {
			const res = await todoApi.getTodos();
			setTodos(res);
		} catch (err) {
			alert('Todo를 가져오지 못했습니다.');
			return;
		}
	};

	const deleteTodo = async (todoId: number) => {
		try {
			await todoApi.deleteTodo(todoId);

			// 서버에서 Todo를 삭제한 후에 새로운 Todo 리스트를 업데이트
			setTodos(prevTodos => prevTodos.filter(todoItem => todoItem.id !== todoId));
		} catch (err) {
			alert('Todo를 삭제하지 못했습니다.');
			return;
		}
	};

	return (
		<div>
			<div>
				<h2>TODOLIST</h2>
			</div>
			<div>
				<input
					data-testid="new-todo-input"
					type="text"
					value={todo}
					onChange={handleTodoInput}
				></input>
				<button data-testid="new-todo-add-button" onClick={handleCreateTodo}>
					추가
				</button>
			</div>
			<div>
				<ul>
					{todos.map(todoItem => (
						<TodoListChange
							key={todoItem.id}
							todoItem={todoItem}
							deleteTodo={deleteTodo}
							setTodos={setTodos}
						/>
					))}
				</ul>
			</div>
			<div>
				<button onClick={() => navigate('/')}>메인페이지</button>
			</div>
		</div>
	);
}

export default TodoList;
