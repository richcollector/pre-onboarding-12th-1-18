import * as S from '../../utils/styles/Todo.styles';
import TodoApi from '../../api/todoApi';
import { useEffect, useState } from 'react';
import { IData } from '../../utils/types/Todo.types';

export default function Todo() {
	const [data, setData] = useState([]);
	const [edit, setEdit] = useState(0);
	const [todo, setTodo] = useState('');
	const [change, setChange] = useState(true);

	const todoup = {
		todo: '',
		isCompleted: false,
	};

	const { handleCreate, getTodo, handleDelete, handleUpdate, onClickLogout }: any = TodoApi({
		todo,
		todoup,
		change,
		edit,
		data,
		setData,
		setEdit,
		setTodo,
		setChange,
	});

	useEffect(() => {
		getTodo();
	}, [change]);

	const onChangeTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTodo(event.currentTarget.value);
	};

	const onChangeUpdateTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
		todoup.todo = event.currentTarget.value;
	};

	const onChangeUpdate = (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
		const updateTodo: IData[] = data?.filter((el: IData) => el.id === id);

		todoup.isCompleted = !updateTodo[0].isCompleted;
		todoup.todo = updateTodo[0].todo;

		handleUpdate();
	};

	return (
		<>
			<S.TodoBox>
				<S.LogoutBox>
					<S.LogoutBtn onClick={onClickLogout}>로그아웃</S.LogoutBtn>
				</S.LogoutBox>
				<S.LogoBox>
					<S.ImgBox src="/logo.png" />
					<S.ToDoTile>To-Do List</S.ToDoTile>
				</S.LogoBox>
				<S.InputBox>
					<S.InsertInput
						data-testid="new-todo-input"
						onChange={onChangeTodo}
						value={todo}
						type="text"
					/>
					<S.InputBtn data-testid="new-todo-add-button" onClick={handleCreate}>
						추가
					</S.InputBtn>
				</S.InputBox>
				<S.ListBox>
					{data.map((el: IData) => (
						<S.ListItem key={el.id}>
							<li style={{ width: '100%', textAlign: 'center' }}>
								<label>
									<S.ItemCheckBox
										onChange={onChangeUpdate(el.id)}
										defaultChecked={el.isCompleted}
										type="checkbox"
									/>
									{edit === el.id ? (
										<S.ItemInput
											data-testid="modify-input"
											onChange={onChangeUpdateTodo}
											defaultValue={el.todo}
											type="text"
										/>
									) : (
										<S.ItemSpan>{el.todo}</S.ItemSpan>
									)}
								</label>
								{edit === el.id ? (
									<S.ItemBtn data-testid="submit-button" onClick={handleUpdate(el.id)}>
										제출
									</S.ItemBtn>
								) : (
									<S.ItemBtn data-testid="modify-button" onClick={handleUpdate(el.id)}>
										수정
									</S.ItemBtn>
								)}
								{edit === el.id ? (
									<S.ItemBtn data-testid="cancel-button" onClick={handleDelete(el.id)}>
										취소
									</S.ItemBtn>
								) : (
									<S.ItemBtn data-testid="delete-button" onClick={handleDelete(el.id)}>
										삭제
									</S.ItemBtn>
								)}
							</li>
						</S.ListItem>
					))}
				</S.ListBox>
			</S.TodoBox>
		</>
	);
}
