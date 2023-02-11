import Image from 'next/image';
import styles from '../styles/pages/Cart.module.scss';

const Cart = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.left}>
        <table>
          <tr>
            <th>Product</th>
            <th>name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>

          <tr>
            <td>
              <div className={styles.img}>
                <Image src="/img/pizza.png" width={100} height={100} alt="" />
              </div>
            </td>
            <td>
              <div className={styles.name}>CORALZO</div>
            </td>
            <td>
              <div className="extras">Double ingredient, spicy sauce</div>
            </td>
            <td>
              <div className={styles.price}>$19.9</div>
            </td>
            <td>
              <div className="quantity">2</div>
            </td>
            <td>
              <div className={styles.total}>$39.80</div>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.img}>
                <Image src="/img/pizza.png" width={100} height={100} alt="" />
              </div>
            </td>
            <td>
              <div className={styles.name}>CORALZO</div>
            </td>
            <td>
              <div className="extras">Double ingredient, spicy sauce</div>
            </td>
            <td>
              <div className={styles.price}>$19.9</div>
            </td>
            <td>
              <div className="quantity">2</div>
            </td>
            <td>
              <div className={styles.total}>$39.80</div>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.img}>
                <Image src="/img/pizza.png" width={100} height={100} alt="" />
              </div>
            </td>
            <td>
              <div className={styles.name}>CORALZO</div>
            </td>
            <td>
              <div className="extras">Double ingredient, spicy sauce</div>
            </td>
            <td>
              <div className="price">$19.9</div>
            </td>
            <td>
              <div className="quantity">2</div>
            </td>
            <td>
              <div className={styles.total}>$39.80</div>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.img}>
                <Image src="/img/pizza.png" width={100} height={100} alt="" />
              </div>
            </td>
            <td>
              <div className={styles.name}>CORALZO</div>
            </td>
            <td>
              <div className="extras">Double ingredient, spicy sauce</div>
            </td>
            <td>
              <div className="price">$19.9</div>
            </td>
            <td>
              <div className="quantity">2</div>
            </td>
            <td>
              <div className={styles.total}>$39.80</div>
            </td>
          </tr>
        </table>
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

          <button>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
