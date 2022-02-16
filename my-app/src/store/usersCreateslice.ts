import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseApiUrl } from '../core/services/baseApi';
import { IUser } from '../core/interfaces/interfaces';

interface InitialState {
	usersLeaders: IUser[];
}

const initialState = { usersLeaders: [] } as InitialState;

export const fetchUserById = createAsyncThunk('users/fetchByIdStatus', async () => {
	const response = await axios({
		method: 'get',
		url: baseApiUrl,
	});
	return response.data;
});

const users = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchUserById.fulfilled, (state, action: PayloadAction<IUser[]>) => {
			action.payload.forEach(user => {
				state.usersLeaders.push(user);
			});
		});
	},
});

// eslint-disable-next-line no-empty-pattern
export const {} = users.actions;
export default users.reducer;
