import styles from '../styles/Button.module.css';

const MarkButton = (props) => {
	return (
		<button class={styles.markButton} type='button' onClick={props.onClick}>
			{props.mark ? 'Unmarked Done' : 'Mark Done'}
		</button>
	);
};
export default MarkButton;
