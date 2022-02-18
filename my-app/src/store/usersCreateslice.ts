import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from '../core/interfaces/interfaces';
import { baseApiUrl } from '../core/services/baseApi';

interface InitialState {
	loading: boolean;
	error: null | string;
	usersLeaders: IUser[];
}

export const fetchUser = createAsyncThunk('users/fetchByIdStatus', async () => {
	const response = await axios.get(baseApiUrl);
	return response.data;
});

const initialState: InitialState = { usersLeaders: [], loading: false, error: null };

const users = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchUser.fulfilled, (state, action) => {
			state.usersLeaders.push(action.payload);
		});
	},
});

// eslint-disable-next-line no-empty-pattern
export const {} = users.actions;
export default users.reducer;
