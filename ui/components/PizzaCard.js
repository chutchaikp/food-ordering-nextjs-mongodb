import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/PizzaCard.module.scss'
const PizzaCard = ({ pizza }) => {
	// debugger;	
	return (
		<div className={styles.pizzaCard}>

			<Link href={`/product/${pizza._id}`} >
				<Image src={pizza.img} alt="" width="1000" height="1000" />
			</Link>

			<h1>{pizza.title}</h1>
			<span>${pizza.prices[0]}</span>
			<p>
				{pizza.desc}
			</p>

		</div>
	);
}

export default PizzaCard;