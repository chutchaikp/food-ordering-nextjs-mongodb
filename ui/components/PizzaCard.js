import Image from 'next/image';
import styles from '../styles/components/PizzaCard.module.scss'
const PizzaCard = () => {
	return (
		<div className={styles.pizzaCard}>

			<Image src="/img/pizza.png" alt="" width="100" height="100" />
			<h1>FIORI DI ZUCCA</h1>
			<span>$19.90</span>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, a.
			</p>

		</div>
	);
}

export default PizzaCard;