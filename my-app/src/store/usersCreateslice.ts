import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../core/interfaces/interfaces';
import { fetchLeaders } from '../core/services/getRequest';

interface InitialState {
	day: number;
	usersLeaders: IUser[];
}

const initialState: InitialState = { day: 0, usersLeaders: [] };

const users = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchLeaders.fulfilled, (state, action: PayloadAction<IUser>) => {
			state.usersLeaders.push(action.payload);
			// eslint-disable-next-line no-param-reassign
			state.day += 1;
		});
	},
});

// eslint-disable-next-line no-empty-pattern
export const {} = users.actions;
export default users.reducer;
