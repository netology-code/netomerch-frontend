import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Title from '../ui/Title';
import CartItem from './CartItem/CartItem';
import styles from './cart.module.css';
import CartForm from './CartForm/CartForm';
import '../Product/Card/card.css';

const Cart = () => {
  const { products } = useSelector((state) => state.productInCart);
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
            <Link className={styles.btn} to="/catalog">В каталог</Link>
          </div>
        )}
    </>
  );
};

export default Cart;
