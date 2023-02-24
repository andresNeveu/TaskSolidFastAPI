import styles from '../styles/Button.module.css';

const MarkButton = (props) => {
	return (
		<button class={styles.markButton} type='button' onClick={props.onClick}>
			Mark Done
		</button>
	);
};
export default MarkButton;
