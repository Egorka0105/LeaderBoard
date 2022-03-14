import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, InitialState } from '../core/interfaces/interfaces';
import { fetchLeaders } from '../core/services/getRequest';

const initialState: InitialState = {
	day: 0,
	usersLeaders: [],
	topUsers: [],
};

const users = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchLeaders.fulfilled, (state, action: PayloadAction<Array<IUser>>) => {
			// eslint-disable-next-line no-param-reassign
			state.usersLeaders = [...state.usersLeaders, action.payload];
			// eslint-disable-next-line no-param-reassign
			state.topUsers = state.usersLeaders
				.flat()
				// eslint-disable-next-line no-nested-ternary
				.sort((a, b) => (a.score > b.score ? -1 : b.score > a.score ? 1 : 0))
				.slice(0, 4);
		});
	},
});

// eslint-disable-next-line no-empty-pattern
export const {} = users.actions;
export default users.reducer;
