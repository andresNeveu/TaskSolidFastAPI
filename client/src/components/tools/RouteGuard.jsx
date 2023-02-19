import { Navigate } from '@solidjs/router';
import { useAuth } from '../../hooks/useAuth';

export const RouteGuard = (props) => {
	const { token } = useAuth();
	if (token) {
		return props.children;
	}
	return <Navigate to='/' replace={true} />;
};
