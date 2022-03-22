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
	reducers: {
		prevDay: state => {
			state.day -= 1;
		},
		nextDay: state => {
			state.day += 1;
		},
		sortUsers: state => {
			state.usersLeaders[state.day] = state.usersLeaders[state.day].sort((a: IUser, b: IUser) =>
				a.score > b.score ? -1 : b.score > a.score ? 1 : 0
			);
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchLeaders.fulfilled, (state, action: PayloadAction<Array<IUser>>) => {
			state.usersLeaders = [
				...state.usersLeaders,
				action.payload.map((el, i) =>
					state.day === 0
						? { ...el, changePosition: 0 }
						: {
								...el,
								changePosition: state.usersLeaders[state.day - 1].findIndex((item: IUser) => item.name === el.name) - i,
						  }
				),
			];
			state.topUsers = state.usersLeaders
				.flat()
				.sort((a: IUser, b: IUser) => (a.score > b.score ? -1 : b.score > a.score ? 1 : 0))
				.slice(0, 4);
		});
	},
});

export const { prevDay, nextDay, sortUsers } = users.actions;
export default users.reducer;
