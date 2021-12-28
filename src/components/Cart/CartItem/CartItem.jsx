/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeQuantityInCart, deleteProductInCart } from '../../../actions/actionCreators';
import Title from '../../ui/Title';
import styles from './cartItem.module.css';

const Cart = ({ cartItem }) => {
  const [currCount, setCurrCount] = useState(cartItem.count);
  const [currPopup, setCurrPopup] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeQuantityInCart(cartItem.id, currCount));
  }, [currCount]);

  const handleOnCountChange = (event) => {
    const { value } = event.target;
    if (value === '') setCurrCount('');
    else setCurrCount(parseInt(value, 10));
  };

  const handleOnCountIncClick = () => {
    if (currCount > 998) return;
    setCurrCount(parseInt(currCount, 10) + 1);
  };

  const handleOnCountDecClick = () => {
    if (currCount < 2) {
      setCurrPopup(true);
      return;
    }
    setCurrCount(parseInt(currCount, 10) - 1);
  };

  return (
    <div className={styles.cart}>
      <Title cn={styles.item_header} text={cartItem.name} sqColor="blue" />
      <button className={styles.bucket} type="button" onClick={() => setCurrPopup(true)}> </button>
      { currPopup
        ? (
          <div className={styles.popup}>
            <p className={styles.popupText}>Вы точно хотите удалить товар?</p>
            <div className={styles.buttons}>
              <button type="button" className={styles.buttonYes} onClick={() => dispatch(deleteProductInCart(cartItem.id))}>ДА</button>
              <button type="button" className={styles.buttonNo} onClick={() => setCurrPopup(false)}>НЕТ</button>
            </div>
          </div>
        )
        : false}
      <div className={styles.cartContent}>
        <img src={cartItem.image} alt={cartItem.name} className={styles.cartImage} />
        <div className={styles.cartContentData}>
          <div className={styles.contentLine}>
            <div className={styles.cartSize}>
              <p className={styles.label}>Размер</p>
              <div className={styles.sizeRectangle}>{cartItem.size}</div>
            </div>
            <div className={styles.cartPrice}>
              <p className={styles.label}>Стоимость</p>
              <div className={styles.priceText}>
                {cartItem.price}
                {' '}
                ₽
              </div>
            </div>
          </div>
          <div className={styles.contentLine}>
            <div className={styles.cartColor}>
              <p className={styles.label}>Цвет</p>
              <div
                className={styles.colorRectangle}
                style={{ backgroundColor: cartItem.color }}
              />
            </div>
            <div className={styles.cartSum}>
              <p className={styles.label}>Итоговая стоимость</p>
              <div className={styles.sumText}>
                {cartItem.price * cartItem.count}
                {' '}
                ₽
              </div>
            </div>
            {/* Здесь отрисовка скидок */}
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
                <button className={styles.numberMinus} type="button" onClick={handleOnCountDecClick}>-</button>
                <input
                  className={styles.numberQuantity}
                  value={currCount}
                  onChange={handleOnCountChange}
                />
                <button className={styles.numberPlus} type="button" onClick={handleOnCountIncClick}>+</button>
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
