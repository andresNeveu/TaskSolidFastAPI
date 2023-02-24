import { Route, Routes } from '@solidjs/router';
import ListTasks from '../pages/ListTasks';
import Task from '../pages/Task';

const TaskRoutes = () => {
	return (
		<>
			<Routes>
				<Route path={'/'} element={<ListTasks />} />
				<Route path={'/:id'} element={<Task />} />
			</Routes>
		</>
	);
};

export default TaskRoutes;
