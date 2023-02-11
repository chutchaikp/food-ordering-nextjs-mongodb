import Image from 'next/image';
import styles from '../../styles/pages/Order.module.scss';

const Order = () => {
  const status = 0;
  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className={styles.order}>
      <div className={styles.left}>
        <table>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Address</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>123456789</td>
            <td>John Doe</td>
            <td>Elton st.212558 LA</td>
            <td>$79.80</td>
          </tr>
        </table>

        <div className={styles.statuss}>
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div className="icon">
              <Image src="/img/checked.png" width={30} height={30} alt="" />
            </div>
          </div>

          <div className={statusClass(1)}>
            <Image src="/img/bake.png" width={30} height={30} alt="" />
            <span>Preparing</span>
            <div className="icon">
              <Image src="/img/checked.png" width={30} height={30} alt="" />
            </div>
          </div>

          <div className={statusClass(2)}>
            <Image src="/img/bike.png" width={30} height={30} alt="" />
            <span>On the way</span>
            <div className="icon">
              <Image src="/img/checked.png" width={30} height={30} alt="" />
            </div>
          </div>

          <div className={statusClass(3)}>
            <Image src="/img/delivered.png" width={30} height={30} alt="" />
            <span>Delivered</span>

            <div className="icon">
              <Image src="/img/checked.png" width={30} height={30} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h1>CART TOTAL</h1>

          <div className={styles.subtotal}>
            <span>Subtotal: </span> $79.60
          </div>
          <div className={styles.discount}>
            <span>Discount:</span> $0.00
          </div>
          <div className={styles.total}>
            <span>Total: </span>$79.60
          </div>

          <button>PAID!</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
