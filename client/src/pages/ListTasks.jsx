import { createResource, createSignal, For } from 'solid-js';
import { getAllTasks } from '../services/tasks.service';
import { useAuth } from '../hooks/useAuth';
import TaskCard from '../components/card/TaskCard';
import NewTaskDialog from '../components/dialog/NewTaskDialog';
import style from './styles/ListTasks.module.css';

const ListTasks = () => {
	const { token } = useAuth();
	const [openDialog, setOpenDialog] = createSignal(false);

	const fetchTasks = async () => {
		const tasks = await getAllTasks(token());
		const resData = await tasks.json();
		return resData;
	};

	const [tasks, { mutate, refetch }] = createResource(fetchTasks);

	const deleteTask = (i) => {
		mutate(tasks().filter((elem, index) => index !== i));
	};

	const createTask = (elem) => {
		mutate([...tasks(), elem]);
	};

	const setFalseDialog = () => {
		setOpenDialog(false);
	};

	const setTrueDialog = () => {
		setOpenDialog(true);
	};

	return (
		<>
			<NewTaskDialog open={openDialog()} add={createTask} close={setFalseDialog} />
			<header class={style.header}>
				<h3 class={style.h3}>Things To Do</h3>
				<button class={style.newTaskButton} type='button' onclick={setTrueDialog}>
					New Task
				</button>
			</header>
			<For each={tasks()}>{(task, i) => <TaskCard task={task} id={i()} delete={deleteTask} />}</For>
		</>
	);
};

export default ListTasks;
