/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
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
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styles from './cartForm.module.css';
import Title from '../../ui/Title';
import { deletePromo, fetchPromo, fetchOrder, clearCart, addProductInCart } from '../../../actions/actionCreators';

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
          // const req = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
          const req = /^\d{10}$/;
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
    setValue,
    ...valid,
  };
};

const CartForm = () => {
  const firstOrLastName = useInput('', { isEmpty: true, minLength: 2, maxLength: 100, isfirstOrLastName: true });
  const address = useInput('', { isEmpty: true });
  const phone = useInput('', { isEmpty: true, minLength: 10, maxLength: 10, isPhone: true });
  const email = useInput('', { isEmpty: true, minLength: 3, maxLength: 100, isEmail: true });
  const comment = useInput('', { isEmpty: true, maxLength: 10000 });
  const history = useHistory();

  const promocod = useInput('', { isEmpty: true });
  const promocodEmail = useInput('', { isEmpty: true, minLength: 3, maxLength: 100, isEmail: true });

  const [btnError, setBtnError] = useState(true);
  const [statusOrder, setStatusOrder] = useState(false);
  const [statusPromo, setStatusPromo] = useState(false);

  const [clickCheckbox, setClickCheckbox] = useState(false);

  const [btnPromoError, setBtnPromoError] = useState(true);

  const { errorPromo, loadingPromo, productWithPromo, orderIsSent } = useSelector((state) => state.fetchOrder);
  const { products } = useSelector((state) => state.productInCart);
  const dispatch = useDispatch();
  console.log('productWithPromo', productWithPromo);

  if (orderIsSent && statusOrder) {
    setStatusOrder(false);
    console.log('send order');
    setTimeout(() => { dispatch(clearCart()); history.push('/catalog'); }, 3000);
  }

  if (errorPromo && statusPromo) {
    setTimeout(() => setStatusPromo(false), 3000);
  }

  const handleClick = (e) => {
    e.preventDefault();

    if (!firstOrLastName.inputValid || !address.inputValid || !phone.inputValid || !email.inputValid || !clickCheckbox) {
      setBtnError(false);
    } else {
      setBtnError(true);

      if (products.length === 0) return;

      const order = {
        name: firstOrLastName.value,
        email: email.value,
        phone: `+7${phone.value}`,
        address: address.value,
        comment: comment.value,
        total_sum: products.reduce((acc, curr) => acc + (Number(curr.count) * Number(curr.price)), 0),
        final_sum: products.reduce((acc, curr) => acc + (Number(curr.count) * Number(curr.price)), 0),
        items: products.map((prod) => {
          const {
            count, color, size, price, item_id,
          } = prod;
          return {
            item_id, count, size, color, price: Number(price),
          };
        }),
      };

      if (promocod.value !== '') {
        order.code = promocod.value;
      }

      setStatusOrder(true);
      dispatch(fetchOrder(order));
    }
  };

  const handleClickCheckbox = () => {
    if (clickCheckbox) {
      setClickCheckbox(false);
    } else {
      setClickCheckbox(true);
    }
  };

  const handleClickPromo = (e) => {
    e.preventDefault();

    if (Object.keys(productWithPromo).length !== 0) {
      promocod.setValue('');
      promocodEmail.setValue('');
      dispatch(deletePromo());
      return;
    }

    if (!promocod.inputValid || !promocodEmail.inputValid) {
      setBtnPromoError(false);
      setTimeout(() => setBtnPromoError(true), 1000);
    } else {
      setBtnPromoError(true);
      setStatusPromo(true);
      dispatch(fetchPromo(promocod.value, promocodEmail.value));
    }
  };
  //-----------------------------------------
  const PopapCart = ({ item }) => {
    console.log(item);
    const { sizes, colors, item_id, name, price } = item.item;
    const [currSize, setCurrSize] = useState(null);
    const [currColor, setCurrColor] = useState(null);
    const [isChoseCompleteSize, setIsChoseCompleteSize] = useState(true);
    const [isChoseCompleteColor, setIsChoseCompleteColor] = useState(true);
    const [isChoseComplete, setIsChoseComplete] = useState(false);

    const [isAddProduct, setIsAddProduct] = useState(true);

    const dispatch = useDispatch();

    const handleOnSizeClick = (size) => {
      if (size === currSize) {
        setCurrSize(null);
      } else {
        setCurrSize(size);
        setIsChoseCompleteSize(true);
        setIsAddProduct(true);
      }
    };

    const handleOnColorClick = (color) => {
      if (color === currColor) {
        setCurrColor(null);
      } else {
        setCurrColor(color);
        setIsChoseCompleteColor(true);
        setIsAddProduct(true);
      }
    };

    const handleAddToCart = () => {
      if (!currSize) { setIsChoseCompleteSize(false); }
      if (!currColor) { setIsChoseCompleteColor(false); }
      if (currSize && currColor) {
        setIsChoseComplete(true);
        setTimeout(() => setIsChoseComplete(false), 3000);

        // mockData_addProductCart.push({
        //   id,
        //   count: 1,
        //   size: currSize,
        //   color: currColor,
        // });
/*
{code: 'BB8', item: {…}}
code: "BB8"

item:
colors: [{…}]
description: "Унисекс футболка для аналитика.\r\n\r\nМодель кроя oversize c заниженной плечевой линией и универсальным круглым вырезом. Рукава удлинённые.\r\n\r\nФутболка сшита из 100% хлопка. Ткань приятна на ощупь, хорошо пропускает воздух и не деформируется даже после многократных стирок. Благодаря этому футболка согреет вас зимой и спасёт от жары летом. \r\n\r\nПринт нанесён методом сублимации, поэтому держится до победного, как диджитал-специалист в ночь перед дедлайном. Выдержит и прямые солнечные лучи, и многочисленные стирки. \r\n\r\nВсе материалы экологичны и безопасны даже для обладателей чувствительной кожи.\r\n\r\nЧёрная футболка с неброской оригинальной цитатой хорошо сочетается с большинством вещей повседневного стиля. Если захочется чего-нибудь необычного, то можно носить даже с брюками и деловым костюмом."
item_id: 154
name: "Футболка «Было непросто, но оно того стоит»"
price: "1999.00"
sizes: Array(3)
0: "S"
1: "M"
2: "L"
*/
        const orderedProduct = {
          id: item_id,
          name,
          image: colors.find((item) => item.color_code === currColor).images[0].images,
          size: currSize,
          color: currColor,
          price,
          count: 1,
          itemDiscount: 100,
        };

        dispatch(addProductInCart(orderedProduct));
        dispatch(deletePromo());
      } else {
        setIsAddProduct(false);
      }
    };

    return (
      <div className={styles.catalogItem_popap}>
        <p className={styles.popuptext}>
          Сделайте выбор цвета
          <br />
          {' '}
          и размера мерча
        </p>
        <div className={styles.catalogItem_popap_sizes}>
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              className={`${styles.catalogItem_popap_btn}
                          ${styles.catalogItem_popap_btn_size}
                          ${size === currSize ? styles.catalogItem_popap_btn_size__active : ''}
                          ${!isChoseCompleteSize && styles.catalogItem_popap_btn_size__no_active}
                        `}
              onClick={() => handleOnSizeClick(size)}
            >
              <span>{size}</span>
            </button>
          ))}
        </div>
        <div className={styles.catalogItem_popap_colors}>
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              className={`${styles.catalogItem_popap_btn}
                          ${styles.catalogItem_popap_btn_color}
                          ${color === currColor ? styles.catalogItem_popap_btn_color__active : ''}
                          ${!isChoseCompleteColor && styles.catalogItem_popap_btn_color__no_active}
                        `}
              style={{ backgroundColor: color.color_code }}
              onClick={() => handleOnColorClick(color.color_code)}
            />
          ))}
        </div>
        <button
          className={`${styles.catalogItem_popap_btn_cart}
                      ${!isAddProduct && styles.catalogItem_popap_btn_cart__no_active}
                      ${isChoseComplete && styles.catalogItem_popap_btn_cart__active}
                    `}
          onClick={() => handleAddToCart()}
          type="button"
        >
          <span>{isChoseComplete ? 'Товар добавлен в корзину' : 'Добавить в корзину'}</span>
        </button>
      </div>
    );
  };
  //-----------------------------------------

  // console.log('orderIsSent', orderIsSent);

  return (
    <div className={styles.form}>
      { productWithPromo.code ? <PopapCart item={productWithPromo} /> : false}
      <form action="#" id="form" className={styles.form_body}>
        <div className={styles.form_promo_body}>
          <p>Есть промокод?</p>
          <p>Самое время его применить!</p>
          <div className={styles.form_promo_block}>
            <div className={styles.form__item}>
              <label
                htmlFor="forPromo"
                className={`${styles.form__label_promo}`}
              >
                {promocod.isEmpty ? 'Промокод' : ''}
              </label>
              <input
                onChange={(e) => promocod.onChange(e)}
                value={promocod.value}
                id="forPromo"
                type="text"
                name="promo"
                className={`
                            ${styles.form__input_promo}
                            ${(!btnPromoError && promocod.isEmpty) && styles.popap_error_input}
                          `}
              />
            </div>
            <div className={styles.form__item}>
              <label
                htmlFor="forEmailPromo"
                className={`
                  ${styles.form__label_promo}
                  ${styles.promo_email}`}
              >
                {promocodEmail.isEmpty ? 'E-mail' : ''}
              </label>
              <input
                onChange={(e) => promocodEmail.onChange(e)}
                value={promocodEmail.value}
                id="forEmailPromo"
                type="email"
                name="emailPromo"
                className={`
                            ${styles.form__input_promo} ${styles.promo_email}
                            ${(!btnPromoError && promocodEmail.isEmpty) && styles.popap_error_input}
                            ${(!btnPromoError && promocodEmail.minLengthError) && styles.popap_error_input}
                            ${(!btnPromoError && promocodEmail.emailError) && styles.popap_error_input}
                          `}
              />
            </div>
            <button onClick={handleClickPromo} type="button" className={`${styles.form__button_promo} btn`}>{Object.keys(productWithPromo).length !== 0 ? 'Отменить' : 'Применить'}</button>
            {(!btnPromoError && !promocod.isEmpty && promocodEmail.isEmpty) && <div className={`${styles.form__promo_popap} ${styles.popap_error}`}>Введите E-mail</div>}
            {Object.keys(productWithPromo).length !== 0 && <div className={`${styles.form__promo_popap} ${styles.popap_success}`}>Промокод применен</div>}
            {(errorPromo && statusPromo) && <div className={`${styles.form__promo_popap} ${styles.popap_error}`}>Промокод не найден</div>}
          </div>
        </div>

        {products.length !== 0 && (
          <>
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
                    {(firstOrLastName.isEmpty) ? 'Имя и фамилия *' : ''}
                  </label>
                  <input
                    onChange={(e) => firstOrLastName.onChange(e)}
                    onBlur={(e) => firstOrLastName.onBlur(e)}
                    value={firstOrLastName.value}
                    autoComplete="off"
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
                    {address.isEmpty ? 'Адрес доставки *' : ''}
                  </label>
                  <input
                    onChange={(e) => address.onChange(e)}
                    onBlur={(e) => address.onBlur(e)}
                    value={address.value}
                    autoComplete="off"
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
                    {phone.isEmpty ? 'Введите номер телефона (10 цифр, без 8) *' : ''}
                  </label>
                  <input
                    onChange={(e) => phone.onChange(e)}
                    onBlur={(e) => phone.onBlur(e)}
                    autoComplete="off"
                    value={phone.value}
                    id="forPhone"
                    type="tel"
                    name="phone"
                    className={`
                  ${styles.form__input}
                  ${(phone.isDirty && phone.isEmpty) && styles.form__input_error}
                  ${(phone.isDirty && phone.phoneError) && styles.form__input_error}
                  ${(phone.isDirty && phone.minLength) && styles.form__input_error}
                  ${(phone.isDirty && phone.maxLength) && styles.form__input_error}
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
                    {email.isEmpty ? 'E-mail *' : ''}
                  </label>
                  <input
                    onChange={(e) => email.onChange(e)}
                    onBlur={(e) => email.onBlur(e)}
                    value={email.value}
                    autoComplete="off"
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
                  <label htmlFor="forComment" className={styles.form__label}>
                    {comment.isEmpty ? 'Комментарий к заказу' : ''}
                  </label>
                  <textarea
                    onChange={(e) => comment.onChange(e)}
                    value={comment.value}
                    name="comment"
                    id="forComment"
                    className={styles.form__input}
                    style={{ paddingTop: '8px' }}
                  />
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
              {orderIsSent && (
                <div className={styles.statusOrder}>
                  <p>Ваш заказ оформлен :)</p>
                  <p>
                    Письмо с подтверждением придёт на почту :
                    <span>
                      {' '}
                      {email.value}
                    </span>
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default CartForm;
