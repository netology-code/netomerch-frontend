/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable consistent-return */
/* eslint-disable object-curly-newline */
/* eslint-disable no-case-declarations */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
/* eslint-disable default-case */
/* eslint-disable indent */
/* eslint-disable no-useless-escape */
/* eslint-disable no-lonely-if */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import styles from './cartForm.module.css';
import Title from '../../ui/Title';

const useValidation = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [firstOrLastNameError, setFirstOrLastNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
        case 'minLength':
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
          break;
        case 'maxLength':
          value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
          break;
        case 'isfirstOrLastName':
          const re = /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/;
          re.test(value) ? setFirstOrLastNameError(false) : setFirstOrLastNameError(true);
          break;
        case 'isPhone':
          // const req = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
          const req = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
          req.test(value) ? setPhoneError(false) : setPhoneError(true);
          break;
        case 'isEmail':
          const reqe = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
          reqe.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || minLengthError || maxLengthError || firstOrLastNameError || phoneError || emailError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError, maxLengthError, firstOrLastNameError, phoneError, emailError]);

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    firstOrLastNameError,
    phoneError,
    emailError,
    inputValid,
  };
};

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => { setValue(e.target.value); };
  const onBlur = () => { setDirty(true); };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};

const mockObj_orderContract = []; // объект собирает данные из формы

const CartForm = () => {
  const firstOrLastName = useInput('', { isEmpty: true, minLength: 2, maxLength: 100, isfirstOrLastName: true });
  const address = useInput('', { isEmpty: true });
  const phone = useInput('', { isEmpty: true, maxLength: 10, isPhone: true });
  const email = useInput('', { isEmpty: true, minLength: 3, maxLength: 100, isEmail: true });
  const comment = useInput('', { maxLength: 10000 });

  const [btnError, setBtnError] = useState(true);
  const [statusOrder, setStatusOrder] = useState(false);

  const [clickCheckbox, setClickCheckbox] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    if (!firstOrLastName.inputValid || !address.inputValid || !phone.inputValid || !email.inputValid || !clickCheckbox) {
      setBtnError(false);
    } else {
      setBtnError(true);
      setStatusOrder(true);

      mockObj_orderContract.push({ // объект собирает данные из формы
        name: firstOrLastName.value,
        email: email.value,
        phone: phone.value,
        total_sum: 'decimal',
        final_sum: 'decimal',
        address: address.value,
        comment: comment.value,
        code: 'string',
        items: [
          {
            item_id: 'integer',
            count: 'integer',
            size: 'string',
            color: 'string',
            price: 'integer',
          },
        ],
      });
    }
  };

  // console.log(mockObj_orderContract);

  const handleClickCheckbox = () => {
    if (clickCheckbox) {
      setClickCheckbox(false);
    } else {
      setClickCheckbox(true);
    }
  };

  return (
    <div className={styles.form}>
      <form action="#" id="form" className={styles.form_body}>
        <div className={styles.form_promo_body}>
          <p>Есть промокод?</p>
          <p>Самое время его применить!</p>
          <div className={styles.form_promo_block}>
            <div className={styles.form__item}>
              <label htmlFor="forPromo" className={`${styles.form__label_promo}`}>Промокод</label>
              <input onChange={(e) => firstOrLastName.onChange(e)} onBlur={(e) => firstOrLastName.onBlur(e)} value={firstOrLastName.value} id="forPromo" type="text" name="promo" className={`${styles.form__input_promo}`} />
            </div>
            <div className={styles.form__item}>
              <label htmlFor="forEmailPromo" className={`${styles.form__label_promo} ${styles.promo_email}`}>E-mail промокода</label>
              <input onChange={(e) => firstOrLastName.onChange(e)} onBlur={(e) => firstOrLastName.onBlur(e)} value={firstOrLastName.value} id="forEmailPromo" type="emailPromo" name="emailPromo" className={`${styles.form__input_promo}`} />
            </div>
            <button onClick={handleClick} type="button" className={`${styles.form__button_promo} btn`}>Применить</button>
          </div>
        </div>

        <Title cn={styles.form__title} text="ещё совсем чуть-чуть и мерч твой" sqColor="green" />
        <div className={styles.form_wrapper}>
          <div className={styles.form_wrapper__col}>
            <div className={styles.form__item}>
              <label
                htmlFor="forName"
                className={`
                  ${styles.form__label}
                  ${(!btnError && firstOrLastName.isEmpty) && styles.form__label_error_message}
                `}
              >
                Имя и фамилия *
              </label>
              <input
                onChange={(e) => firstOrLastName.onChange(e)}
                onBlur={(e) => firstOrLastName.onBlur(e)}
                value={firstOrLastName.value}
                id="forName"
                type="name"
                name="firstOrLastName"
                className={`
                  ${styles.form__input}
                  ${(firstOrLastName.isDirty && firstOrLastName.isEmpty) && styles.form__input_error}
                  ${(firstOrLastName.isDirty && firstOrLastName.minLengthError) && styles.form__input_error}
                  ${(firstOrLastName.isDirty && firstOrLastName.maxLengthError) && styles.form__input_error}
                  ${(firstOrLastName.isDirty && firstOrLastName.firseNameError) && styles.form__input_error}
                  ${(!btnError && firstOrLastName.isEmpty) && styles.form__input_error}
                `}
              />
            </div>
            <div className={styles.form__item}>
              <label
                htmlFor="forAddress"
                className={`
                  ${styles.form__label}
                  ${(!btnError && address.isEmpty) && styles.form__label_error_message}
                `}
              >
                Адрес доставки *
              </label>
              <input
                onChange={(e) => address.onChange(e)}
                onBlur={(e) => address.onBlur(e)}
                value={address.value}
                id="forAddress"
                type="text"
                name="address"
                className={`
                  ${styles.form__input}
                  ${(address.isDirty && address.isEmpty) && styles.form__input_error}
                  ${(!btnError && address.isEmpty) && styles.form__input_error}
                `}
              />
            </div>
            <div className={styles.form__item}>
              <label
                htmlFor="forPhone"
                className={`
                  ${styles.form__label}
                  ${(!btnError && phone.isEmpty) && styles.form__label_error_message}
                `}
              >
                Телефон *
              </label>
              <input
                onChange={(e) => phone.onChange(e)}
                onBlur={(e) => phone.onBlur(e)}
                value={phone.value}
                id="forPhone"
                type="tel"
                name="phone"
                className={`
                  ${styles.form__input}
                  ${(phone.isDirty && phone.isEmpty) && styles.form__input_error}
                  ${(phone.isDirty && phone.phoneError) && styles.form__input_error}
                  ${(!btnError && phone.isEmpty) && styles.form__input_error}
                `}
              />
            </div>
          </div>
          <div className={styles.form_wrapper__col}>
            <div className={styles.form__item}>
              <label
                htmlFor="forEmail"
                className={`
                  ${styles.form__label} 
                  ${(!btnError && email.isEmpty) && styles.form__label_error_message}
                `}
              >
                E-mail *
              </label>
              <input
                onChange={(e) => email.onChange(e)}
                onBlur={(e) => email.onBlur(e)}
                value={email.value}
                id="forEmail"
                type="email"
                name="email"
                className={`
                  ${styles.form__input}
                  ${(email.isDirty && email.isEmpty) && styles.form__input_error}
                  ${(email.isDirty && email.minLengthError) && styles.form__input_error}
                  ${(email.isDirty && email.emailError) && styles.form__input_error}
                  ${(!btnError && email.isEmpty) && styles.form__input_error}
                `}
              />
            </div>
            <div className={styles.form__item}>
              <label htmlFor="forComment" className={styles.form__label}>Комментарий к заказу</label>
              <textarea onChange={(e) => comment.onChange(e)} value={comment.value} name="comment" id="forComment" className={styles.form__input} />
            </div>
          </div>
        </div>
        <div className={`${styles.form__item} ${styles.statusOrder_block}`}>
          <div className={styles.checkbox}>
            <input
              id="formAgreement"
              type="checkbox"
              name="agreement"
              className={`${styles.checkbox__input}`}
              onClick={handleClickCheckbox}
            />
            <label
              htmlFor="formAgreement"
              className={`
                ${styles.checkbox__label}
                ${(!clickCheckbox && !btnError) && styles.checkbox__label_false}
              `}
            >
              <span>
                Согласен (согласна) с условиями
                {' '}
                <a href="#">пользовательского соглашения</a>
              </span>
            </label>
          </div>
          {/* <div className={styles.checkbox}>
            <input id="formSubscribe" type="checkbox" name="subscribe" className={styles.checkbox__input} />
            <label htmlFor="formSubscribe" className={styles.checkbox__label}>
              <span>Согласен (согласна) получать информационные рассылки от Нетологии</span>
            </label>
          </div> */}
          <button
            onClick={handleClick}
            type="button"
            className={`${styles.form__button} btn`}
          >
            Оформить заказ
          </button>
          {statusOrder && (
            <div className={styles.statusOrder}>
              <p>Ваш заказ оформлен :)</p>
              <p>
                Письмо с подтверждением придёт на почту :
                <span>
                  {' '}
                  { email.value}
                </span>
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default CartForm;
