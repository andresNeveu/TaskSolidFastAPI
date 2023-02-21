import { Show } from 'solid-js';
import { useAuth } from '../../hooks/useAuth';
import Login from '../../pages/Login';

export const RouteGuard = (props) => {
	const { token } = useAuth();
	return (
		<Show when={token()} fallback={<Login />}>
			{props.children}
		</Show>
	);
};
