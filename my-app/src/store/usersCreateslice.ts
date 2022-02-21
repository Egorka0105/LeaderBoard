import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../core/interfaces/interfaces';
import { fetchLeaders } from '../core/services/getRequest';

interface InitialState {
	usersLeaders: IUser[];
}

const initialState: InitialState = { usersLeaders: [] };

const users = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchLeaders.fulfilled, (state, action: PayloadAction<IUser>) => {
			state.usersLeaders.push(action.payload);
		});
	},
});

// eslint-disable-next-line no-empty-pattern
export const {} = users.actions;
export default users.reducer;
