import React, { ChangeEvent, useState } from 'react';
import { Todo } from '../../types/type';
import { todoApi } from '../../api/todoApi';

const TodoItem = ({
	todo,
	setTodos,
}: {
	todo: Todo;
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}) => {
	const { id, todo: todoText, isCompleted } = todo;
	const [isEdit, setIsEdit] = useState(false);
	const [editTodoInput, setEditTodoInput] = useState<string>(todoText);

	const handleCheckBoxChange = async (e: ChangeEvent<HTMLInputElement>) => {
		const isChecked = e.target.checked;
		await todoApi.updateTodo(id, todoText, isChecked);
		setTodos(prevTodos =>
			prevTodos.map(prevTodo =>
				prevTodo.id === id ? { ...prevTodo, isCompleted: isChecked } : prevTodo,
			),
		);
	};

	const onClickeRemoveTodo = async () => {
		if (window.confirm('삭제하시겠습니까?')) {
			await todoApi.deleteTodo(id);
			setTodos(prevTodos => prevTodos.filter(prevTodo => prevTodo.id !== id));
		}
	};

	const onClickEditStatus = () => {
		setIsEdit(true);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEditTodoInput(e.target.value);
	};

	const onClickSubmitBtn = async () => {
		await todoApi.updateTodo(id, editTodoInput, isCompleted);
		setTodos(prevTodos =>
			prevTodos.map(prevTodo =>
				prevTodo.id === id ? { ...prevTodo, todo: editTodoInput } : prevTodo,
			),
		);
		setIsEdit(false);
	};

	const onClickCancleBtn = () => {
		setEditTodoInput(todoText);
		setIsEdit(false);
	};

	return (
		<>
			{!isEdit ? (
				<li>
					<label>
						<input type="checkbox" checked={isCompleted} onChange={handleCheckBoxChange} />
						<span
							style={{
								textDecoration: isCompleted ? 'line-through' : 'none',
							}}
						>
							{todoText}
						</span>
					</label>
					<button data-testid="modify-button" onClick={onClickEditStatus}>
						수정
					</button>
					<button data-testid="delete-button" onClick={onClickeRemoveTodo}>
						삭제
					</button>
				</li>
			) : (
				<li>
					<input
						data-testid="modify-input"
						id="modify-input"
						name="modify-input"
						type="text"
						value={editTodoInput}
						onChange={handleChange}
					/>
					<button data-testid="submit-button" onClick={onClickSubmitBtn}>
						제출
					</button>
					<button data-testid="cancel-button" onClick={onClickCancleBtn}>
						취소
					</button>
				</li>
			)}
		</>
	);
};
export default TodoItem;
