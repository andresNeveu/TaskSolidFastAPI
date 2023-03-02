import style from '../styles/Dialog.module.css';
import { createSignal } from 'solid-js';
import { useAuth } from '../../hooks/useAuth';
import { createTask } from '../../services/tasks.service';

const NewTaskDialog = (props) => {
	const [data, setData] = createSignal({ title: '' });
	const { token } = useAuth();

	const handleClose = (event) => {
		props.close();
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const res = await createTask(token(), data());
		if (res.status === 201) {
			const newTask = await res.json();
			props.close();
			props.add(newTask);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setData({
			[name]: value,
		});
	};

	return (
		<dialog open={props.open} class={style.dialogContainer} onClose={handleClose}>
			<header class={style.header}>
				<h2>Create New Task</h2>
				<button onClick={handleClose} type="button">
					&#x2716
				</button>
			</header>
			<section>
				<form onsubmit={handleSubmit}>
					<div>
						<label for="title">Set the title </label>
						<input type='text' name='title' id='title' onInput={handleChange} />
					</div>
					<div style={{ display: 'flex', 'justify-content': 'flex-end' }}>
						<button type='submit' class={style.createButton} disabled={data().title.length === 0}>
							Create
						</button>
					</div>
				</form>
			</section>
		</dialog>
	);
};
export default NewTaskDialog;
