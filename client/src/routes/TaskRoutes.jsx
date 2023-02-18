import { Route, Routes } from '@solidjs/router';

const TaskRoutes = () => {
	return (
		<>
			<Routes>
				<Route path={'*'} component={<Home id='2' />} />
			</Routes>
		</>
	);
};

const Home = () => {
	return <div>Hello World</div>;
};

export default TaskRoutes;
