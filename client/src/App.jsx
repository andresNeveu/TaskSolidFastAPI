import { AuthProvider } from './hooks/useAuth';
import AppRoutes from './routes/AppRoutes';

export const App = () => {
	return (
		<>
			<AuthProvider>
				<AppRoutes />
			</AuthProvider>
		</>
	);
};

export default App;
