import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from '../styles/Navbar.module.scss'

const Navbar = () => {

	const { quantity } = useSelector(state => state.cart)

	return (
		<div className={styles.navbar}>
			<div className={styles.left}>
				<Link href={'/'} passHref>
					<div className={styles.callButton}>
						<Image width={100} height={100} src="/img/telephone.png" alt="" />
					</div>
				</Link>

				<div className={styles.texts}>
					<span>ORDER NOW!</span>
					<span>012 345 678</span>
				</div>
			</div>
			<div className={styles.center}>
				<ul>
					<li>Homepage</li>
					<li>Products</li>
					<li>Menu</li>
					<Image width={100} height={100} src="/img/logo.png" alt="" />
					<li>Events</li>
					<li>Blog</li>
					<li>Contact</li>
				</ul>
			</div>

			<div className={styles.right}>
				<Link href={'/cart'} passHref >
					<div className={styles.cart}>
						<Image src="/img/cart.png" width={100} height={100} alt="" />
						<div>{quantity}</div>
					</div>
				</Link>
			</div>

		</div>
	);
}

export default Navbar;