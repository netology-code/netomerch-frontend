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
      itemDiscount: 10,
      itemSize: 'M',
      itemNumber: 5,
      itemImage: 'https://upload.wikimedia.org/wikipedia/ru/1/1b/Simpsons.png',
    },
    {
      itemName: 'название',
      itemPrice: 1000,
      itemColor: 'red',
      itemSize: 'M',
      itemDiscount: 10,
      itemNumber: 5,
      itemImage: 'https://upload.wikimedia.org/wikipedia/ru/1/1b/Simpsons.png',
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
