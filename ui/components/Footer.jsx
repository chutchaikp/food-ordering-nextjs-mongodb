import Image from 'next/image';
import styles from '../styles/components/Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.col}>
        <Image src="/img/bg.png" width="100" height="100" alt="" />
      </div>
      <div className={styles.col}>
        OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
      </div>

      <div className={styles.col}>
        <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
        <p className={styles.text}>
          1654 R. Don Road #304.
          <br /> NewYork, 85022
          <br /> (602) 867-1010
        </p>
        <p className={styles.text}>
          2356 K. Laquie Rd #235.
          <br /> NewYork, 85022
          <br /> (602) 867-1011
        </p>
        <p className={styles.text}>
          1614 E. Erwin St #104.
          <br /> NewYork, 85022
          <br /> (602) 867-1012
        </p>
        <p className={styles.text}>
          1614 W. Caroll St #125.
          <br /> NewYork, 85022
          <br /> (602) 867-1013
        </p>
      </div>

      <div className={styles.col}>
        <h1 className={styles.title}>WORKING HOURS</h1>
        <p className={styles.text}>
          MONDAY UNTIL FRIDAY
          <br /> 9:00 – 22:00
        </p>
        <p className={styles.text}>
          SATURDAY - SUNDAY
          <br /> 12:00 – 24:00
        </p>
      </div>
    </div>
  );
};

export default Footer;
