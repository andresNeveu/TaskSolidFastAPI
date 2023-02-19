/**
 * Validate email format
 * @param {String} str
 * @returns {Boolean}
 */
export const validateEmail = (str) => {
	const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
	return regex.test(str);
};

/**
 * Validate password format
 * @param {String} str
 * @returns {Boolean}
 */
export const validatePassword = (str) => {
	const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;
	return regex.test(str);
};
