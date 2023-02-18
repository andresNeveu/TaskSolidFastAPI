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
	const logout = () => {
		setToken(null);
		navigate('/', { replace: true });
	};

	/**
	 * save token in local storage
	 * @param {string} key
	 */
	const login = (key) => {
		setToken(key);
		navigate('/home', { replace: true });
	};

	const value = { token, login, logout };
	return (
		<>
			<AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
		</>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
