import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/pages/Cart.module.scss';

import { useEffect, useState } from 'react';
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import axios from 'axios';
import { useRouter } from 'next/router';
import { reset } from '@/redux/cartSlice';
import OrderDetail from '@/components/OrderDetail';
// // This values are the props in the UI
// const amount = '2';
// const currency = 'USD';
// const style = { layout: 'vertical' };

const Cart = () => {
  const [cash, setCash] = useState(false);
  const router = useRouter();
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // This values are the props in the UI
  // const amount = '2';
  const currency = 'USD';
  const style = { layout: 'vertical' };

  let total = 0;
  products.map((a) => {
    total += a.price * parseInt(a.quantity); // + b.price * parseInt(b.quantity);
  });

  const amount = total;

  //#regioin PAYMENT METHOD

  const CreateOrder = async (data) => {
    // const dispatch = useDispatch();
    // const router = useRouter();
    try {
      const res = await axios.post('http://localhost:3000/api/orders/x', data);
      res.status === 201 && router.push('/orders/' + res.data._id);
      dispatch(reset());
    } catch (err) {
      debugger;
      console.log(err);
    }
  };

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: 'resetOptions',
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (detail) {
              // Your code here after capture the order
              console.log(detail);

              try {
                CreateOrder({
                  customer: detail.payer.name.given_name,
                  address: detail.payer.address.country_code,
                  total: detail.purchase_units[0].amount.value,
                  status: detail.status === 'COMPLETED' ? 1 : 0,
                  method: 1,
                });
              } catch (error) {
                debugger;
              }
            });
          }}
        />
      </>
    );
  };

  //#endregion

  return (
    <div className={styles.cart}>
      <div className={styles.left}>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p, index) => (
              <tr key={p._id + String(index)}>
                <td>
                  <div className={styles.img}>
                    <Image src={p.img} width={100} height={100} alt="" />
                  </div>
                </td>
                <td>
                  <div className={styles.name}>{p.title}</div>
                </td>
                <td>
                  <div className="extras">
                    {p.extras &&
                      p.extras.map((ex) => (
                        <span key={ex._id + String(p._id) + String(index)}>
                          {ex.title}
                        </span>
                      ))}
                  </div>
                </td>
                <td>
                  <div className={styles.price}>${p.price}</div>
                </td>
                <td>
                  <div className="quantity">{p.quantity}</div>
                </td>
                <td>
                  <div className={styles.total}>${p.price * p.quantity}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h1>CART TOTAL</h1>

          <div className={styles.subtotal}>
            <span>Subtotal: </span> ${total}
          </div>
          <div className={styles.discount}>
            <span>Discount:</span> $0.00
          </div>
          <div className={styles.total}>
            <span>Total: </span> ${total}
          </div>

          <button>CHECKOUT NOW!</button>

          <button onClick={() => setCash(true)}>CACH ON DELIVERY</button>

          <PayPalScriptProvider
            options={{
              'client-id':
                'Acf9zq6nsvY9I-z3F0RgS8wyOLA7t1VtQ4G3KFQcvJAKbFqN70WIl9zd7HoD84CqQbembrxePClk3MFE',
              components: 'buttons',
              currency: 'USD',
              'disable-funding': 'credit,card,p24',
            }}
          >
            <ButtonWrapper currency={currency} showSpinner={false} />
          </PayPalScriptProvider>
        </div>
      </div>

      {cash && <OrderDetail total={total} createOrder={CreateOrder} />}
    </div>
  );
};

export default Cart;
