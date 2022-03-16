import { configureStore } from '@reduxjs/toolkit';
import usersList from 'store/usersCreateslice';

const store = configureStore({
	reducer: {
		leaders: usersList,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
