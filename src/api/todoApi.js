// 리스트 가져오기 api
export const getListApi = async setData => {
	try {
		const token = localStorage.getItem('access_token');
		const response = await fetch('https://www.pre-onboarding-selection-task.shop/todos', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const data = await response.json();

		if (response.ok) {
			setData(data);
		} else {
			alert('Error fetching the list.');
		}
	} catch (error) {
		alert('An error occurred while fetching the list.');
	}
};

// 리스트 작성 api
export const createListApi = async (content, setData) => {
	try {
		const token = localStorage.getItem('access_token');
		const response = await fetch('https://www.pre-onboarding-selection-task.shop/todos', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				todo: content,
			}),
		});

		if (response.ok) {
			await getListApi(setData);
		} else {
			alert('Error creating the list.');
		}
	} catch (error) {
		alert('An error occurred while creating the list.');
	}
};

// 리스트 수정 api
export const editListApi = async (editContent, isCompleted, id, setData) => {
	try {
		const token = localStorage.getItem('access_token');
		const response = await fetch(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				todo: editContent,
				isCompleted,
			}),
		});

		if (response.ok) {
			await getListApi(setData);
		} else {
			alert('Error editing the list.');
		}
	} catch (error) {
		alert('An error occurred while editing the list.');
	}
};

// 리스트 삭제 api
export const deleteListApi = async (id, setData) => {
	try {
		const token = localStorage.getItem('access_token');
		const response = await fetch(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		if (response.ok) {
			await getListApi(setData);
		} else {
			alert('Error deleting the list.');
		}
	} catch (error) {
		alert('An error occurred while deleting the list.');
	}
};
