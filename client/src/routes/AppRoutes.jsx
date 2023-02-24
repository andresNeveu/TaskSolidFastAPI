import { Route, Routes } from '@solidjs/router';
import { RouteGuard } from '../components/tools/RouteGuard';
import Home from '../pages/Home';
import LogIn from '../pages/LogIn';
import Tasks from '../pages/Tasks';

const AppRoutes = () => {
	return (
		<>
			<Routes>
				<Route path={'/login'} element={<LogIn />} />
				<Route path={'/home'} element={<Home />} />
				<Route
					path={'*'}
					element={
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
