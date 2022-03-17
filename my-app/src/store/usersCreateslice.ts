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
	},
	extraReducers: builder => {
		builder.addCase(fetchLeaders.fulfilled, (state: any, action: PayloadAction<Array<IUser>>) => {
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
				.sort((a: any, b: any) => (a.score > b.score ? -1 : b.score > a.score ? 1 : 0))
				.slice(0, 4);
		});
	},
});

// eslint-disable-next-line no-empty-pattern
export const { prevDay, nextDay } = users.actions;
export default users.reducer;
