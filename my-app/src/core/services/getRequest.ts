import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseApiUrl } from './baseApi';

// eslint-disable-next-line consistent-return
export const fetchLeaders = createAsyncThunk('todos/fetchTodos', async function () {
	try {
		const response = await axios.get(baseApiUrl);
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
		window.location.reload();
	}
});

/*

const axiosConfig = {
	baseURL: 'http://coding-test.cube19.io/frontend/v1/starting-state',
};

const instance = axios.create(axiosConfig);

instance.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		if (error.response.status === 500) {
			console.log('Retrying...');
			return instance(error.config);
		}
		return Promise.reject(error);
	}
);

export default instance;
*/
