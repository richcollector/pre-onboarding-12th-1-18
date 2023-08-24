import React, { useState } from 'react';
import { editListApi, deleteListApi } from '../api/todoApi';

const ListItemEdit = ({ item, setData }) => {
	const [isEdit, setIsEdit] = useState(false);
	const [editContent, setEditContent] = useState(item.todo);
	const [isCompleted, setIsCompleted] = useState(item.isCompleted);

	const handleClickEdit = () => {
		setIsEdit(true);
	};

	const handleClickCancel = () => {
		setIsEdit(false);
		setEditContent(item.todo);
	};

	const handleChangeEditInput = e => {
		setEditContent(e.target.value);
	};

	const handleChangeCheck = e => {
		setIsCompleted(e.target.checked);
		editListApi(editContent, e.target.checked, item.id, setData);
	};

	const handleClickSubmit = () => {
		editListApi(editContent, isCompleted, item.id, setData);
		setIsEdit(false);
	};

	const handleClickDelete = () => {
		deleteListApi(item.id, setData);
		setIsEdit(false);
	};

	return (
		<li>
			{!isEdit ? (
				<div>
					<label>
						<input type="checkbox" onChange={handleChangeCheck} checked={item.isCompleted} />
						<span>{item.todo}</span>
					</label>
					<button data-testid="modify-button" onClick={handleClickEdit}>
						수정
					</button>
					<button data-testid="delete-button" onClick={handleClickDelete}>
						삭제
					</button>
				</div>
			) : (
				<div>
					<input data-testid="modify-input" value={editContent} onChange={handleChangeEditInput} />
					<button data-testid="submit-button" onClick={handleClickSubmit}>
						제출
					</button>
					<button data-testid="cancel-button" onClick={handleClickCancel}>
						취소
					</button>
				</div>
			)}
		</li>
	);
};

export default ListItemEdit;
