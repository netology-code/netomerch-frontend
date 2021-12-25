/* eslint-disable react/prop-types */
import React from 'react';
import Title from '../../ui/Title';
import styles from './cartItem.module.css';

const Cart = (props) => {
  const { cartItem } = props;
  return (
    <div className={styles.cart}>
      <Title cn={styles.item_header} text={cartItem.itemName} sqColor="blue" />
      <div className={styles.bucket} />
      <div className={styles.cartContent}>
        <img src={cartItem.itemImage} alt={cartItem.itemName} className={styles.cartImage} />
        <div className={styles.cartContentData}>
          <div className={styles.contentLine}>
            <div className={styles.cartSize}>
              <p className={styles.label}>Размер</p>
              <div className={styles.sizeRectangle}>{cartItem.itemSize}</div>
            </div>
            <div className={styles.cartPrice}>
              <p className={styles.label}>Стоимость</p>
              <div className={styles.priceText}>
                {cartItem.itemPrice}
                {' '}
                ₽
              </div>
            </div>
          </div>
          <div className={styles.contentLine}>
            <div className={styles.cartColor}>
              <p className={styles.label}>Цвет</p>
              <div className={styles.colorRectangle}>{cartItem.itemColor}</div>
            </div>
            <div className={styles.cartSum}>
              <p className={styles.label}>Итоговая стоимость</p>
              <div className={styles.sumText}>
                {cartItem.itemPrice * cartItem.itemNumber}
                {' '}
                ₽
              </div>
            </div>
            {cartItem.itemDiscount
              ? (
                <>
                  <div className={styles.cartDiscount}>
                    <p className={styles.label}>Скидка</p>
                    <div className={styles.discountSumText}>
                      {cartItem.itemDiscount}
                      {' '}
                      %
                    </div>
                  </div>
                  <div className={styles.cartDiscountSum}>
                    <p className={styles.label}>Итого со скидкой</p>
                    <div className={styles.discountSumText}>
                      {(cartItem.itemPrice * cartItem.itemNumber)
                - (((cartItem.itemPrice * cartItem.itemNumber) / 100) * cartItem.itemDiscount)}
                      {' '}
                      ₽
                    </div>
                  </div>
                </>
              ) : false}
          </div>
          <div className={styles.contentLine}>
            <div className={styles.cartNumber}>
              <p className={styles.label}>Количество</p>
              <div className={styles.numberControls}>
                <div className={styles.numberMinus}>-</div>
                <div className={styles.numberQuantity}>{cartItem.itemNumber}</div>
                <div className={styles.numberPlus}>+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.line} />
    </div>
  );
};

export default Cart;
