import { useNavigate } from '@solidjs/router';
import { useAuth } from '../../hooks/useAuth';
import styles from '../styles/Button.module.css';

const LoginButton = () => {
	const { token } = useAuth();
	const navigate = useNavigate();

	const textButton = token() ? 'Entrar' : 'Inicia sesión';

	const handleClick = (event) => {
		const route = token() ? '/home' : '/login';
		navigate(route);
	};
	return (
		<div class={styles.containerLoginButton}>
			<button onclick={handleClick} class={styles.loginButton}>
				{textButton}
			</button>
		</div>
	);
};

export default LoginButton;
