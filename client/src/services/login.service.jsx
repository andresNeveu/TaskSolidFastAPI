const host = import.meta.env.VITE_HOST || 'http://localhost:8000/';

/**
 * Request to login
 * @param {JSON} data email, password
 * @returns jwt {String}
 */
const loginService = async (data) => {
	const route = `${host}api/v1/login/`;
	return await fetch(route, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			accept: 'application/json',
		},
		body: data,
	}).then((res) => res);
};

export default loginService;
