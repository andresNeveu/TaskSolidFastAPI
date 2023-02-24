const host = import.meta.env.VITE_HOST || 'http://localhost:8000/';

const toAuthorization = (token) => {
	return `${token.token_type} ${token.access_token}`;
};

export const getAllTasks = async (token, params = '') => {
	const route = `${host}api/v1/to-do/${params}`;
	const authorization = toAuthorization(token);
	try {
		const res = await fetch(route, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				accept: 'application/json',
				Authorization: authorization,
			},
		});
		return res;
	} catch (error) {
		console.log(error);
	}
};
