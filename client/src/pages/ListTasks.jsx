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

	const handleClick = (e) => {
		mutate([...tasks(), { title: 'Create tasks list', id: 7, is_done: false, created_at: '2023-02-22T' }]);
		console.log(tasks());
	};
	return (
		<>
			<h3 style={{ margin: '0.5rem' }}>Things To Do</h3>
			<For each={tasks()}>{(task, i) => <TaskCard task={task} id={i()} />}</For>
			<button onclick={handleClick}>boton</button>
		</>
	);
};

export default ListTasks;
