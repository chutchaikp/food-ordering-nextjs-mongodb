import Image from 'next/image';
import styels from '../styles/components/Footer.module.scss'

const Footer = () => {
	return (
		<div className={styels.footer}>
			<div>
				<Image src="/img/bg.png" width="100" height="100" alt="" />
			</div>
			<div>

			</div>
		</div>
	);
}

export default Footer;