import { AuthProvider } from './hooks/useAuth';
import TaskRoutes from './routes/TaskRoutes';

export const App = () => {
	return (
		<>
			<AuthProvider>
				<TaskRoutes />
			</AuthProvider>
		</>
	);
};

export default App;
