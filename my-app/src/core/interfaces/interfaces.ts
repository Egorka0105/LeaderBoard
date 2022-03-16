import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from 'store/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export interface IUser {
	name: string;
	score: number;
	photo: string;
	id: string;
	changePosition: number;
}

export interface InitialState {
	day: number;
	usersLeaders: IUser[][] | [];
	topUsers: IUser[];
}
