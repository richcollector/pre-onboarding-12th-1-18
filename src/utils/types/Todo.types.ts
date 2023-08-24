import React from 'react';

export interface IData {
	id: number;
	todo: string;
	isCompleted: boolean;
	userId: number;
}

export interface IProps {
	todo: string;
	todoup: {
		todo: string;
		isCompleted: boolean;
	};
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	change: boolean;
	setChange: React.Dispatch<React.SetStateAction<boolean>>;
	edit: number;
	setEdit: React.Dispatch<React.SetStateAction<number>>;
	data: IData[];
	setData: React.Dispatch<React.SetStateAction<never[]>>;
}
