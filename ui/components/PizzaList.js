import styles from '../styles/components/PizzaList.module.scss'
import PizzaCard from './PizzaCard';

const PizzaList = () => {
	return (
		<div className={styles.pizzaList}>
			<div className={styles.listTitle}>
				<h1>
					THE BEST PIZZA IN TOWN
				</h1>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias hic sapiente quod nemo nobis officia cupiditate voluptatibus placeat culpa dolorem, laboriosam accusamus asperiores maxime temporibus provident ut perferendis obcaecati dolor?
				</p>
			</div>
			<div className={styles.items}>
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
			</div>
		</div>
	);
}

export default PizzaList;