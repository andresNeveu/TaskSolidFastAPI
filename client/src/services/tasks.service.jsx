const host = import.meta.env.VITE_HOST || 'http://localhost:8000/';

const toAuthorization = (token) => {
	return `${token.token_type} ${token.access_token}`;
};

export const createTask = async (token, data) => {
	const route = `${host}api/v1/to-do/`;
	const authorization = toAuthorization(token);
	try {
		const res = await fetch(route, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				accept: 'application/json',
				Authorization: authorization,
			},
			body: JSON.stringify(data),
		});
		return res;
	} catch (error) {
		console.log(error);
	}
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

export const markTask = async (token, params) => {
	const route = `${host}api/v1/to-do/${params}/mark_done`;
	const authorization = toAuthorization(token);
	try {
		const res = await fetch(route, {
			method: 'PATCH',
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

export const unMarkTask = async (token, params) => {
	const route = `${host}api/v1/to-do/${params}/un_mark_done`;
	const authorization = toAuthorization(token);
	try {
		const res = await fetch(route, {
			method: 'PATCH',
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

export const deleteTask = async (token, params) => {
	const route = `${host}api/v1/to-do/${params}/`;
	const authorization = toAuthorization(token);
	try {
		const res = await fetch(route, {
			method: 'DELETE',
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
