import Image from 'next/image';
import { useState } from 'react';
import styles from '../../styles/components/Product.module.scss'

const Product = () => {
	const [size, setSize] = useState(0)

	const pizza = {
		id: 1,
		img: "/img/pizza.png",
		name: "CAMPAGNOLA",
		price: [19.9, 23.9, 27.9],
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
	};

	return (
		<div className={styles.product}>

			{/* <div className={styles.left}>

			</div> */}
			<div className={styles.img}>
				<Image src={pizza.img} width={100} height={100} alt="" />
			</div>
			<div className={styles.right}>

				<h1>{pizza.name}</h1>
				<span>
					${pizza.price[size]}
				</span>
				<p>{pizza.desc}</p>
				<h3> Choose the size </h3>

				<div className={styles.sizes}>

					<div className={styles.size} onClick={() => setSize(0)}>
						<Image src="/img/size.png" width="1000" height="1000" alt="" />
						<span>small</span>
					</div>
					<div className={styles.size} onClick={() => setSize(1)}>
						<Image src="/img/size.png" width="1000" height="1000" alt="" />
						<span>medium</span>
					</div>
					<div className={styles.size} onClick={() => setSize(2)}>
						<Image src="/img/size.png" width="1000" height="1000" alt="" />
						<span>large</span>
					</div>

				</div>


				<h3>Choose additional ingredients</h3>
				<div className={styles.ingredients}>
					<div className={styles.cb}>
						<input type="checkbox" id="checkbox1" />
					</div>
					<label htmlFor="checkbox1">Double Ingredients</label>
				</div>

			</div>

		</div>
	);
}

export default Product;	