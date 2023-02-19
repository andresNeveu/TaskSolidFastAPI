import { Navigate, useNavigate } from '@solidjs/router';
import { useAuth } from '../../hooks/useAuth';

export const RouteGuard = (props) => {
	const navigate = useNavigate();
	const { token } = useAuth();
	if (token()) {
		return props.children;
	}
	return navigate('/home');
};
