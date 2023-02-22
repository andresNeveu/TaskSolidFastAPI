import { Show } from 'solid-js';
import { useAuth } from '../../hooks/useAuth';
import LogIn from '../../pages/LogIn';

export const RouteGuard = (props) => {
	const { token } = useAuth();
	return (
		<Show when={token()} fallback={<LogIn />}>
			{props.children}
		</Show>
	);
};
