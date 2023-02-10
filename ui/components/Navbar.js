import Image from 'next/image';
import styles from '../styles/Navbar.module.scss'
const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.left}>
				<div className={styles.callButton}>
					<Image width={100} height={100} src="/img/telephone.png" alt="" />
				</div>
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
				<div className={styles.cart}>
					<Image src="/img/cart.png" width={100} height={100} alt="" />
					<div>2</div>
				</div>
			</div>

		</div>
	);
}

export default Navbar;