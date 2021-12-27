/* eslint-disable camelcase */
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Title from '../ui/Title';
import CartItem from './CartItem/CartItem';
import styles from './cart.module.css';
import CartForm from './CartForm/CartForm';
import '../Product/Card/card.css';
// import { fetchOrder, fetchPromo } from '../../actions/actionCreators';

const Cart = () => {
  const { products } = useSelector((state) => state.productInCart);
  // const dispatch = useDispatch();

  // const checkPromo = () => {
  //   dispatch(fetchPromo('R2D2', 'xex103@yandex.ru'));
  // };

  // const checkOrder = () => {
  //   const template = {
  //     name: 'Шерлок Холмс',
  //     email: 'xex103@yandex.ru',
  //     phone: '+79999999999',
  //     total_sum: 3999.00,
  //     final_sum: 3999.00,
  //     address: 'Бейкер-стрит, 221b',
  //     comment: 'Надоело ходить в пальто, хочу ваш мерч',
  //     code: 'R2D2',
  //     items: [
  //       {
  //         item_id: 145,
  //         count: 1,
  //         size: 'M',
  //         color: '#000000',
  //         price: 3999.00,
  //       },
  //     ],
  //   };

  //   dispatch(fetchOrder(template));
  // };

  return (
    <>
      { products[0] ? (
        <div className={styles.cart}>
          <Title cn={styles.cart_header} text="ваша корзина" sqColor="pink" />
          {products.map((item) => <CartItem key={item.id} cartItem={item} />)}
          <div className={styles.lowerLine}>
            <CartForm />
            <div className={styles.cartSum}>
              <p className={styles.label}>Итого</p>
              <div className={styles.sumText}>
                {products.reduce((item1, item2) => item1 + (item2.price * item2.count), 0)}
                {' '}
                ₽
              </div>
            </div>
          </div>
        </div>
      )
        : (
          <div className={styles.cart}>
            <Title cn={styles.cart_header} text="ваша корзина пуста" sqColor="pink" />
            <Link className={styles.btn} to="/catalog">Вернуться в каталог</Link>
            <CartForm />
          </div>
        )}
    </>
  );
};

export default Cart;
