import { Route, Routes } from '@solidjs/router';
import { RouteGuard } from '../components/tools/RouteGuard';
import Home from '../pages/Home';
import Login from '../pages/Login';

const TaskRoutes = () => {
	return (
		<>
			<Routes>
				<Route path={'/home'} component={Home} />
				<Route
					path={'*'}
					component={
						<RouteGuard>
							<Home />
						</RouteGuard>
					}
				/>
				<Route path={'/login'} component={Login} />
			</Routes>
		</>
	);
};

export default TaskRoutes;
