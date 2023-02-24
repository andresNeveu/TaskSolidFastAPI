import styles from '../styles/Button.module.css';

const DeleteButton = (props) => {
	return (
		<button class={styles.deleteButton} type='button' onclick={props.onClick}>
			Delete
		</button>
	);
};
export default DeleteButton;
