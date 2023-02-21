import { createSignal } from 'solid-js';
import { validateEmail, validatePassword } from '../utils/validate';
import styles from './styles/Login.module.css';

const Login = () => {
	const [data, setData] = createSignal({ email: '', pass: '' });

	const checkPassword = () => {
		if (validatePassword(data().pass) || data().pass.length === 0) {
			return styles.input;
		}
		return styles.inputError;
	};
	const checkEmail = () => {
		if (validateEmail(data().email) || data().email.length === 0) {
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

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(data());
	};

	return (
		<>
			<div class={styles.container} onsubmit={handleSubmit}>
				<form class={styles.form}>
					<div>
						<label for='email'>Correo:</label>
						<br />
						<input
							onkeydown={handleChange}
							class={checkEmail()}
							type='text'
							name='email'
							id='email'
							placeholder='Tu Correo'
						/>
						<br />
					</div>
					<div>
						<label for='pass'>Contraseña: </label>
						<br />
						<input
							onkeydown={handleChange}
							class={checkPassword()}
							type='password'
							name='pass'
							id='pass'
							placeholder='Tu Contraseña'
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

export default Login;
