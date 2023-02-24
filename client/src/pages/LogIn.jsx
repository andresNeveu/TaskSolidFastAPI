import { createSignal } from 'solid-js';
import { useAuth } from '../hooks/useAuth';
import logInService from '../services/logIn.service';
import { validateEmail, validatePassword } from '../utils/validate';
import styles from './styles/Login.module.css';

const LogIn = () => {
	const [data, setData] = createSignal({ username: '', password: '' });
	const { logIn } = useAuth();

	const checkPassword = () => {
		if (validatePassword(data().password) || data().password.length === 0) {
			return styles.input;
		}
		return styles.inputError;
	};
	const checkEmail = () => {
		if (validateEmail(data().username) || data().username.length === 0) {
			return styles.input;
		}
		return styles.inputError;
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setData({
			...data(),
			[name]: value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const res = await logInService(data());
		if (res) {
			const token = await res.json();
			logIn(token);
		}
	};

	return (
		<>
			<div class={styles.container} onsubmit={handleSubmit}>
				<form class={styles.form}>
					<div>
						<label for='email'>Correo:</label>
						<br />
						<input
							onInput={handleChange}
							class={checkEmail()}
							type='text'
							name='username'
							id='email'
							placeholder='Tu Correo'
							required
						/>
						<br />
					</div>
					<div>
						<label for='pass'>Contraseña: </label>
						<br />
						<input
							onInput={handleChange}
							class={checkPassword()}
							type='password'
							name='password'
							id='pass'
							placeholder='Tu Contraseña'
							required
						/>
						<br />
					</div>
					<div class={styles.submitContainer}>
						<button class={styles.submit} type='submit'>
							Ingresar
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default LogIn;
