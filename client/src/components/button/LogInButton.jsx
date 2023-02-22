import { useNavigate } from '@solidjs/router';
import { useAuth } from '../../hooks/useAuth';
import styles from '../styles/Button.module.css';

const LogInButton = () => {
	const { token } = useAuth();
	const navigate = useNavigate();

	const textButton = token() ? 'Entrar' : 'Inicia sesión';

	const handleClick = (event) => {
		const route = token() ? '/' : '/login';
		navigate(route);
	};
	return (
		<div class={styles.containerLogInButton}>
			<button onclick={handleClick} class={styles.logInButton}>
				{textButton}
			</button>
		</div>
	);
};

export default LogInButton;
