import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/components/Featured.module.scss'

const Featured = () => {

	const [index, setIndex] = useState(0)

	const images = [
		'/img/featured.jpeg',
		'/img/featured2.jpeg',
		'/img/featured3.jpeg',
	]

	const handleArrow = (direction) => {
		if (direction === 'l') {
			setIndex(index !== 0 ? index - 1 : 2)
		} else {
			setIndex(index !== 2 ? index + 1 : 0)
		}
	}

	console.log(index)

	return (
		<div className={styles.featured}>

			<div className={styles.leftArrow} onClick={() => handleArrow('l')}>
				<Image src='/img/arrowl.png' alt="" width={100} height={100} />

			</div>

			<div className={styles.wrapper} style={{ transform: `translateX(${-100 * index}vw)` }}>
				{images.map((img, idx) => (
					<div key={idx}>
						<Image src={img} alt="" width={2000} height={2000} />
					</div>
				))}

			</div>

			<div className={styles.rightArrow} onClick={() => handleArrow('r')}>
				<Image src='/img/arrowr.png' alt="" width={100} height={100} />

			</div>

		</div>
	);
}

export default Featured;