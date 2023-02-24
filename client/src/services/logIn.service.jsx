const host = import.meta.env.VITE_HOST || 'http://localhost:8000/';

/**
 * Format object with username and password in x-www-form-urlencoded
 * @param {Object} data
 * @returns String
 */
const toForm = (data) => {
	return `username=${data.username}&password=${data.password}`;
};

/**
 * Request to login
 * @param {JSON} data email, password
 * @returns jwt {String}
 */
const logInService = async (data) => {
	const route = `${host}api/v1/login/`;
	const dataForm = toForm(data);
	try {
		const res = await fetch(route, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				accept: 'application/json',
			},
			body: dataForm,
		});
		return res;
	} catch (error) {
		console.log(error);
	}
};

export default logInService;
