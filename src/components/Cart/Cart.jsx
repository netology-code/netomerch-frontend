/* eslint-disable camelcase */
/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Title from '../ui/Title';
import CartItem from './CartItem/CartItem';
import styles from './cart.module.css';
import CartForm from './CartForm/CartForm';
import '../Product/Card/card.css';
import { fetchOrder, fetchPromo } from '../../actions/actionCreators';

const Cart = () => {
  const { products } = useSelector((state) => state.productInCart);
  const {
    productWithPromo,
    loadingPromo,
    errorPromo,
    errorOrder,
    loadingOrder,
    orderIsSent,
  } = useSelector((state) => state.fetchOrder);
  const dispatch = useDispatch();

  const checkPromo = () => {
    dispatch(fetchPromo('R2D2', 'xex103@yandex.ru'));
  };

  const checkOrder = () => {
    const template = {
      name: 'Шерлок Холмс',
      email: 'xex103@yandex.ru',
      phone: '+79999999999',
      total_sum: 3999.00,
      final_sum: 3999.00,
      address: 'Бейкер-стрит, 221b',
      comment: 'Надоело ходить в пальто, хочу ваш мерч',
      code: 'R2D2',
      items: [
        {
          item_id: 145,
          count: 1,
          size: 'M',
          color: '#000000',
          price: 3999.00,
        },
      ],
    };

    dispatch(fetchOrder(template));
  };

  const handleSubmitForm = (params) => {
    if (products.length === 0) return;
    console.log('params', params);
    const order = {
      ...params,
      phone: `+7${params.phone}`,
      total_sum: products.reduce((acc, curr) => acc + (Number(curr.count) * Number(curr.price)), 0),
      final_sum: products.reduce((acc, curr) => acc + (Number(curr.count) * Number(curr.price)), 0),
      code: '',
      items: products.map((prod) => {
        const {
          count, color, size, price, item_id,
        } = prod;
        return {
          item_id, count, size, color, price: Number(price),
        };
      }),
    };

    console.log(order);
  };

  console.log(productWithPromo,
    loadingPromo,
    errorPromo, errorOrder, loadingOrder);

  return (
    <>
      <div className={styles.cart}>
        <button style={{ padding: '10px', border: '1px solid red' }} type="button" onClick={checkPromo}>Тест промо</button>
        <button style={{ padding: '10px', border: '1px solid red' }} type="button" onClick={checkOrder}>Тест отправки заказа</button>
      </div>
      { products[0] ? (
        <div className={styles.cart}>
          <Title cn={styles.cart_header} text="ваша корзина" sqColor="pink" />
          {products.map((item) => <CartItem key={item.id} cartItem={item} />)}
          <CartForm onSubmitForm={handleSubmitForm} errorOrder={errorOrder} loadingOrder={loadingOrder} orderIsSent={orderIsSent} />
        </div>
      )
        : (
          <div className={styles.cart}>
            <Title cn={styles.cart_header} text="ваша корзина пуста" sqColor="pink" />
            <Link className={styles.btn} to="/catalog">В каталог</Link>
          </div>
        )}
    </>
  );
};

export default Cart;
