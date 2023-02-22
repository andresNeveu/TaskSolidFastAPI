import { Route, Routes } from '@solidjs/router';
import { RouteGuard } from '../components/tools/RouteGuard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Tasks from '../pages/Tasks';

const TaskRoutes = () => {
	return (
		<>
			<Routes>
				<Route path={'/login'} component={Login} />
				<Route path={['/home', '/']} component={Home} />
				<Route
					path={'/tasks'}
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

export default TaskRoutes;
