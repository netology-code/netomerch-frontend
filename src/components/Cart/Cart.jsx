import React from 'react';
import { useSelector } from 'react-redux';
import Title from '../ui/Title';
import CartItem from './CartItem/CartItem';
import styles from './cart.module.css';
import CartForm from './CartForm/CartForm';
import '../Product/Card/card.css';

const Cart = () => {
  const { products } = useSelector((state) => state.productInCart);
  return (
    <div className={styles.cart}>
      <Title cn={styles.cart_header} text="ваша корзина" sqColor="pink" />
      {products.map((item) => <CartItem key={item.id} cartItem={item} />)}
      <CartForm />
    </div>
  );
};

export default Cart;
