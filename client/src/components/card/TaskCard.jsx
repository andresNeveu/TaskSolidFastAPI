import DeleteButton from '../button/DeleteButton';
import MarkButton from '../button/MarkButton';
import style from '../styles/Card.module.css';

const TaskCard = (props) => {
	const handleClick = (e) => {
		console.log('here');
	};
	return (
		<div class={style.cardContainer}>
			<div>
				<div>{`Id: ${props.task.id}`}</div>
				<div>{`Title: ${props.task.title}`}</div>
				<div>{`Done: ${props.task.is_done ? 'yes' : 'no'}`}</div>
				<div>{`Created At: ${props.task.created_at.slice(0, 10)}`}</div>
			</div>
			<div>
				<MarkButton onClick={handleClick} />
				<br />
				<DeleteButton onClick={handleClick} />
			</div>
		</div>
	);
};

export default TaskCard;
