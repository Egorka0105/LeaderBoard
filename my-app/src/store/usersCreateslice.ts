import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import avatar from 'assets/images/user.png';
import { IUser, InitialState, IAddUserResponse } from '../core/interfaces/interfaces';
import { fetchLeaders } from '../core/services/getRequest';
import { addNewUser } from '../core/services/setRequest';

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
		editUserScore: (state, action) => {
			state.usersLeaders[state.day] = state.usersLeaders[state.day].map(el => {
				return {
					...el,
					score: el.id === action.payload.id ? action.payload.score : el.score,
				};
			});
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchLeaders.fulfilled, (state, action: PayloadAction<Array<IUser>>) => {
			state.usersLeaders = [
				...state.usersLeaders,
				action.payload.map((el, i) => {
					return {
						...el,
						changePosition:
							state.day === 0
								? 0
								: state.usersLeaders[state.day - 1].findIndex((item: IUser) => item.name === el.name) - i,
					};
				}),
			];
			state.topUsers = state.usersLeaders
				.flat()
				.sort((a: IUser, b: IUser) => (a.score > b.score ? -1 : b.score > a.score ? 1 : 0))
				.slice(0, 4);
		});
		builder.addCase(addNewUser.fulfilled, (state, action: PayloadAction<IAddUserResponse>) => {
			const { score, displayName } = action.payload;
			state.usersLeaders = [
				...state.usersLeaders.map((el, i) =>
					i === state.day ? [...el, { id: nanoid(), photo: avatar, score, name: displayName, changePosition: 0 }] : el
				),
			];
		});
	},
});

export const { prevDay, nextDay, sortUsers, editUserScore } = users.actions;
export default users.reducer;
