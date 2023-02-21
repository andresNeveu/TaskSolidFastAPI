const host = import.meta.env.VITE_HOST || 'http://localhost:8080/';

/**
 * Request to login
 * @param {JSON} data email, password
 * @returns jwt {String}
 */
const loginService = async (data) => {
	const route = `${host}login/`;
	return await fetch(route, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}).then((res) => res);
};

export default loginService;
