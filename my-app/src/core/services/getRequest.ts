import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../API';
import { baseApiUrl } from './baseApi';

// eslint-disable-next-line consistent-return
export const fetchLeaders = createAsyncThunk('users/fetchLeaders', async function (): Promise<any> {
	try {
		return await instance.get(baseApiUrl);
	} catch (e) {
		return e;
	}
});

/*

try {
	const response = await instance.get(baseApiUrl);
	const { data } = response;
	data.map((el: any) => {
		// eslint-disable-next-line no-param-reassign
		if (!el.score) el.score = 0;
		return el;
	});
	if (!response) {
		throw new Error();
	}
	return data;
} catch (e) {
	//	window.location.reload();
}
*/
