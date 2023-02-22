import { useNavigate } from '@solidjs/router';
import { createContext, useContext } from 'solid-js';
import { useLocalStorage } from './useLocalStorage';

const AuthContext = createContext();

export const AuthProvider = (props) => {
	const navigate = useNavigate();
	const [token, setToken] = useLocalStorage('token', null);

	/**
	 * delete token save in local storage
	 */
	const logOut = () => {
		setToken(null);
		navigate('/', { replace: true });
	};

	/**
	 * save token in local storage
	 * @param {string} key
	 */
	const logIn = (key) => {
		setToken(key);
		navigate('/');
	};

	const value = { token, logIn, logOut };
	return (
		<>
			<AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
		</>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
