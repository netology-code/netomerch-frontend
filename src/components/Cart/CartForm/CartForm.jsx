/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styles from './cartForm.module.css';
import Title from '../../ui/Title';

const CartForm = () => (
  <div className={styles.form}>
    <form action="#" id="form" className={styles.form_body}>
      <Title cn={styles.form__title} text="ещё совсем чуть-чуть и мерч твой" sqColor="green" />
      <div className={styles.form_wrapper}>
        <div className={styles.form_wrapper__col}>
          <div className={styles.form__item}>
            <label htmlFor="forName" className={styles.form__label}>Имя и фамилия *</label>
            <input id="forName" type="name" name="name" className={styles.form__input} />
          </div>
          <div className={styles.form__item}>
            <label htmlFor="forAddress" className={styles.form__label}>Адрес доставки *</label>
            <input id="forAddress" type="text" name="address" className={styles.form__input} />
          </div>
          <div className={styles.form__item}>
            <label htmlFor="forPhone" className={styles.form__label}>Телефон *</label>
            <input id="forPhone" type="text" name="phone" className={styles.form__input} />
          </div>
        </div>
        <div className={styles.form_wrapper__col}>
          <div className={styles.form__item}>
            <label htmlFor="forEmail" className={styles.form__label}>E-mail *</label>
            <input id="forEmail" type="email" name="email" className={styles.form__input} />
          </div>
          <div className={styles.form__item}>
            <label htmlFor="forMessage" className={styles.form__label}>Комментарий к заказу</label>
            <textarea name="message" id="forMessage" className={styles.form__input} />
          </div>
        </div>
      </div>
      <div className={styles.form__item}>
        <div className={styles.checkbox}>
          <input id="formAgreement" type="checkbox" name="agreement" className={styles.checkbox__input} />
          <label htmlFor="formAgreement" className={styles.checkbox__label}>
            <span>
              Согласен (согласна) с условиями
              {' '}
              <a href="#">пользовательского соглашения</a>
            </span>
          </label>
        </div>
        <div className={styles.checkbox}>
          <input id="formSubscribe" type="checkbox" name="subscribe" className={styles.checkbox__input} />
          <label htmlFor="formSubscribe" className={styles.checkbox__label}>
            <span>Согласен (согласна) получать информационные рассылки от Нетологии</span>
          </label>
        </div>
        <button type="submit" className={`${styles.form__button} btn`}>Оформить заказ</button>
      </div>
    </form>
  </div>
);

export default CartForm;
