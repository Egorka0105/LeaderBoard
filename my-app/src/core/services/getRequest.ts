import { createAsyncThunk } from '@reduxjs/toolkit';
import userPhoto from 'assets/images/user.png';
import { nanoid } from 'nanoid';
import instance, { axiosConfig } from '../API';
import { IUser } from '../interfaces/interfaces';

export const fetchLeaders = createAsyncThunk('users/fetchLeaders', async function (): Promise<any> {
	try {
		const response = await instance.get(axiosConfig.baseURL);
		const { data } = response;
		return data.map((el: IUser) => ({
			...el,
			id: nanoid(),
			score: el.score || 0,
			photo: userPhoto,
			changePosition: 0,
		}));
	} catch (e) {
		return e;
	}
});
