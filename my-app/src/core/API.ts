import axios from 'axios';

const axiosConfig = {
	baseURL: 'http://coding-test.cube19.io/frontend/v1/starting-state',
};

const instance = axios.create(axiosConfig);

instance.interceptors.response.use(
	response => {
		const { data } = response;
		data.map((el: any) => {
			// eslint-disable-next-line no-param-reassign
			if (!el.score) el.score = 0;
			return el;
		});
		return data;
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
