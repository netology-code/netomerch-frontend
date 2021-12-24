import React from 'react';
import Title from '../ui/Title';
import CartItem from './CartItem/CartItem';
import styles from './cart.module.css';
import CartForm from './CartForm/CartForm';

const Cart = () => {
  const data = [
    {
      itemName: 'название',
      itemPrice: 1000,
      itemColor: 'red',
      itemSize: 'M',
      itemNumber: 5,
      itemImage: 'https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BC%D0%BF%D1%81%D0%BE%D0%BD%D1%8B#/media/%D0%A4%D0%B0%D0%B9%D0%BB:Simpsons.png',
    },
    {
      itemName: 'название',
      itemPrice: 1000,
      itemColor: 'red',
      itemSize: 'M',
      itemNumber: 5,
      itemImage: 'https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BC%D0%BF%D1%81%D0%BE%D0%BD%D1%8B#/media/%D0%A4%D0%B0%D0%B9%D0%BB:Simpsons.png',
    },
  ];
  return (
    <div className={styles.cart}>
      <Title cn={styles.cart_header} text="ваша корзина" sqColor="pink" />
      {data.map((item) => <CartItem cartItem={item} />)}
      <CartForm />
    </div>
  );
};

export default Cart;
