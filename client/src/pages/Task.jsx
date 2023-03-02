import { useNavigate, useParams } from '@solidjs/router';
import { createResource } from 'solid-js';
import TaskCard from '../components/card/TaskCard';
import { useAuth } from '../hooks/useAuth';
import { getTasks } from '../services/tasks.service';

const Task = () => {
	const { token } = useAuth();
	const params = useParams();
	const navigate = useNavigate();

	const fetchTask = async () => {
		const task = await getTasks(token(), params.id);
		const res = await task.json();
		return res;
	};

	const [task] = createResource(fetchTask);

	const deleteTask = () => {
		navigate('/');
	};

	return <>{task.loading ? <span>Loading...</span> : <TaskCard task={task()} id={0} delete={deleteTask} />}</>;
};

export default Task;
