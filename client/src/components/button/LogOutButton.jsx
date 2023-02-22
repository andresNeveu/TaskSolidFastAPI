import { useNavigate } from '@solidjs/router';
import { useAuth } from '../../hooks/useAuth';
import styles from '../styles/Button.module.css';

const LogOutButton = () => {
	const { logOut } = useAuth();
	const navigate = useNavigate();

	const handleClick = (event) => {
		logOut();
		const route = '/home';
		navigate(route);
	};
	return (
		<div class={styles.containerLogOutButton}>
			<button onclick={handleClick} class={styles.logOutButton}>
				Cerrar Sesión
			</button>
		</div>
	);
};

export default LogOutButton;
