import { createSignal } from 'solid-js';

export const useLocalStorage = (keyName, defaultValue) => {
	/**
	 * get value on localStorage
	 * @returns the value of the element by key
	 */
	const getValue = () => {
		try {
			const value = localStorage.getItem(keyName);
			if (value) {
				return JSON.parse(value);
			} else {
				localStorage.setItem(keyName, JSON.stringify(defaultValue));
				return defaultValue;
			}
		} catch (err) {
			return defaultValue;
		}
	};
	/**
	 * set new value on localStorage
	 * @param {Any} newValue
	 */
	const setValue = (newValue) => {
		try {
			localStorage.setItem(keyName, JSON.stringify(newValue));
		} catch (err) {
			console.error(err);
		}
		setStoredValue(newValue);
	};

	const [storedValue, setStoredValue] = createSignal(getValue());

	return [storedValue, setValue];
};
