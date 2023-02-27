import { createSignal } from 'solid-js';
import { useAuth } from '../../hooks/useAuth';
import { deleteTask, markTask, unMarkTask } from '../../services/tasks.service';
import DeleteButton from '../button/DeleteButton';
import MarkButton from '../button/MarkButton';
import style from '../styles/Card.module.css';

const TaskCard = (props) => {
	const { token } = useAuth();
	const [mark, setMark] = createSignal(props.task.is_done);

	const handleDeleteButton = async (e) => {
		const res = await deleteTask(token(), props.task.id);
		if (res.status === 200) {
			props.delete(props.id);
		}
	};
	const handleMarkButton = async (e) => {
		if (mark()) {
			const res = await unMarkTask(token(), props.task.id);
			if (res.status === 200) {
				setMark(false);
			}
		} else {
			const res = await markTask(token(), props.task.id);
			if (res.status === 200) {
				setMark(true);
			}
		}
	};

	return (
		<div class={style.cardContainer}>
			<div>
				<div>{`Id: ${props.task.id}`}</div>
				<div>{`Title: ${props.task.title}`}</div>
				<div>{`Done: ${mark() ? 'yes' : 'no'}`}</div>
				<div>{`Created At: ${props.task.created_at.slice(0, 10)}`}</div>
			</div>
			<div>
				<MarkButton onClick={handleMarkButton} mark={mark()} />
				<br />
				<DeleteButton onClick={handleDeleteButton} />
			</div>
		</div>
	);
};

export default TaskCard;
