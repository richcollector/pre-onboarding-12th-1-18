import { IData, IProps } from '../utils/types/Todo.types';
import { API_ENDPOINTS } from './Api';
import { useNavigate } from 'react-router-dom';

function TodoApi(props: IProps) {
	const navigate = useNavigate();

	const access_token = localStorage.getItem('access_token');
	const tokenConfig = {
		headers: {
			Authorization: `Bearer ${access_token}`,
			'Content-type': 'application/json',
		},
	};

	const handleCreate = async (event: React.ChangeEvent<HTMLInputElement>) => {
		try {
			const response = await fetch(API_ENDPOINTS.TODO_CREATE, {
				method: 'POST',
				headers: tokenConfig.headers,
				body: JSON.stringify({ todo: props.todo }),
			});
			const data = await response.json();
			props.setTodo('');
			props.setChange(!props.change);
			console.log(data);
		} catch (error) {
			if (error instanceof Error) alert('로그인 정보가 올바르지 않습니다. 다시 시도해주세요.');
		}
	};

	const getTodo = async () => {
		try {
			const response = await fetch(API_ENDPOINTS.TODO_GET, {
				method: 'GET',
				headers: tokenConfig.headers,
			});
			const data = await response.json();
			props.setData(data);
		} catch (error) {
			if (error instanceof Error) alert('로그인 정보가 올바르지 않습니다. 다시 시도해주세요.');
		}
	};

	const handleUpdate = (id: string) => async (event: React.ChangeEvent<HTMLInputElement>) => {
		const updateTodo: IData[] = props.data?.filter((el: IData) => el.id === Number(id));

		props.todoup.isCompleted = !updateTodo[0].isCompleted;
		props.todoup.todo = updateTodo[0].todo;

		try {
			const response = await fetch(API_ENDPOINTS.TODO_UPDATE(id), {
				method: 'PUT',
				headers: tokenConfig.headers,
				body: JSON.stringify({
					todo: updateTodo[0].todo,
					isCompleted: !updateTodo[0].isCompleted,
				}),
			});
			const data = await response.json();
			console.log(data);
			props.setEdit(0);
			props.setChange(!props.change);
		} catch (error) {
			if (error instanceof Error) alert('로그인 정보가 올바르지 않습니다. 다시 시도해주세요.');
		}
	};

	const handleDelete = (id: string) => async (event: React.ChangeEvent<HTMLInputElement>) => {
		try {
			const response = await fetch(API_ENDPOINTS.TODO_DELETE(id), {
				method: 'DELETE',
				headers: tokenConfig.headers,
			});
			const data = await response.json();
			console.log(data);
			props.setChange(!props.change);
		} catch (error) {
			if (error instanceof Error) alert('로그인 정보가 올바르지 않습니다. 다시 시도해주세요.');
		}
	};

	const onClickLogout = () => {
		localStorage.removeItem('access_token');
		navigate('/signin');
	};

	return { getTodo, handleCreate, handleDelete, handleUpdate, onClickLogout };
}

export default TodoApi;
