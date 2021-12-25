/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeQuantityInCart, deleteProductInCart } from '../../../actions/actionCreators';
import Title from '../../ui/Title';
import styles from './cartItem.module.css';

const Cart = ({ cartItem }) => {
  const [currCount, setCurrCount] = useState(cartItem.count);
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
    if (currCount < 1) return;
    setCurrCount(parseInt(currCount, 10) - 1);
  };

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

      <div className="actions-card__row-2">
        <button className="card__btn-add btn-add-card btn" type="button" onClick={() => dispatch(deleteProductInCart(cartItem.id))}>Удалить</button>
        <div className="card__count count-card">
          <button className="count-card__item count-card__btn" type="button" onClick={handleOnCountDecClick}>-</button>
          <input
            className="count-card__item count-card__input"
            value={currCount}
            onChange={handleOnCountChange}
          />
          <button className="count-card__item count-card__btn" type="button" onClick={handleOnCountIncClick}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
