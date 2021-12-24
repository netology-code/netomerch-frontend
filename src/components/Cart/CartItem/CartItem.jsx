/* eslint-disable react/prop-types */
import React from 'react';
import Title from '../../ui/Title';
import styles from './cartItem.module.css';

const Cart = (props) => {
  const { cartItem } = props;
  return (
    <div className={styles.cart}>
      <Title cn={styles.item_header} text={cartItem.itemName} sqColor="blue" />
      <img src={cartItem.itemImage} alt={cartItem.itemName} />
      <div>
        <p>Размер</p>
        <div>{cartItem.itemSize}</div>
      </div>
      <div>
        <p>Цвет</p>
        <div>{cartItem.itemColor}</div>
      </div>
      <div>Количество</div>
    </div>
  );
};

export default Cart;
