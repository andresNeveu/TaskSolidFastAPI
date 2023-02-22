import { Route, Routes } from '@solidjs/router';
import { RouteGuard } from '../components/tools/RouteGuard';
import Home from '../pages/Home';
import LogIn from '../pages/LogIn';
import Tasks from '../pages/Tasks';

const AppRoutes = () => {
	return (
		<>
			<Routes>
				<Route path={'/login'} component={LogIn} />
				<Route path={'/home'} component={Home} />
				<Route
					path={'/'}
					component={
						<RouteGuard>
							<Tasks />
						</RouteGuard>
					}
				/>
			</Routes>
		</>
	);
};

export default AppRoutes;
