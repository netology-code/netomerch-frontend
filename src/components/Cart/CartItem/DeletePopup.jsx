/* eslint-disable react/prop-types */
import React from 'react';
import styles from './cartItem.module.css';

const DeletePopup = ({ onClick }) => {
  console.log('hello!');
  return (
    <div className={styles.popup}>
      <p className={styles.popupText}>Вы точно хотите удалить товар?</p>
      <div className={styles.buttons}>
        <button type="button" className={styles.buttonYes} onClick={() => onClick()}>ДА</button>
        <button type="button" className={styles.buttonNo}>НЕТ</button>
      </div>
    </div>
  );
};

export default DeletePopup;
