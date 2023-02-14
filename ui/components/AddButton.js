
import styles from '../styles/components/AddButton.module.scss'

const AddButton = ({ setOpen }) => {
	return (
		<div className={styles.addButton}>

			<button onClick={() => setOpen(true)}>Add New Pizza</button>

		</div>
	);
}

export default AddButton;