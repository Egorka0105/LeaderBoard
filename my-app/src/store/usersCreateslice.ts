import { AsyncThunk, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { IUser } from '../core/interfaces/interfaces';

export const getUsers: AsyncThunk<AxiosResponse<any, any> | undefined, void, {}> = createAsyncThunk(
	'users/getUsers',
	// eslint-disable-next-line consistent-return
	async () => {
		try {
			const response = await axios.get('http://coding-test.cube19.io/frontend/v1/starting-state');
			if (response.statusText !== 'OK') {
				throw new Error('server error');
			}
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
);

// @ts-ignore
const users = createSlice({
	name: 'users',
	initialState: {
		usersLeaders: [],
		status: null,
		error: null,
	},
	reducers: {},
	extraReducers: {
		[getUsers.pending]: (state: { status: string; error: null | string }) => {
			state.status = 'loading';
			state.error = null;
		},
		[getUsers.fulfilled]: (state: { status: string; usersLeaders: any }, action: PayloadAction<any>) => {
			state.status = 'loaded';
			state.usersLeaders = action.payload;
		},
		[getUsers.rejected]: (state: { status: string; payload: any }, action: PayloadAction<any>) => {
			state.status = 'rejected';
			state.payload = action.payload;
		},
	},
});

// eslint-disable-next-line no-empty-pattern
export const {} = users.actions;
export default users.reducer;
