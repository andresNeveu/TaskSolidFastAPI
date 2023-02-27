import { createResource, For } from 'solid-js';
import { getAllTasks } from '../services/tasks.service';
import { useAuth } from '../hooks/useAuth';
import TaskCard from '../components/card/TaskCard';

const ListTasks = () => {
	const { token } = useAuth();
	const fetchTasks = async () => {
		const tasks = await getAllTasks(token());
		const resData = await tasks.json();
		return resData;
	};
	const [tasks, { mutate, refetch }] = createResource(fetchTasks);

	const deleteTask = (i) => {
		mutate(tasks().filter((elem, index) => index !== i));
	};
	return (
		<>
			<h3 style={{ margin: '0.5rem' }}>Things To Do</h3>
			<For each={tasks()}>{(task, i) => <TaskCard task={task} id={i()} delete={deleteTask} />}</For>
		</>
	);
};

export default ListTasks;
