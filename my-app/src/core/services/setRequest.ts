import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IAddUserRequest, IAddUserResponse } from '../interfaces/interfaces';

const addUserUrl = 'http://coding-test.cube19.io/frontend/v1/process-user';

export const addNewUser = createAsyncThunk(
	'users/addNewUser',
	async (data: IAddUserRequest): Promise<IAddUserResponse> => {
		const { name, score } = data;
		const response = await axios.post(addUserUrl, { username: name });

		return {
			displayName: response.data['display-name'],
			score,
		};
	}
);
