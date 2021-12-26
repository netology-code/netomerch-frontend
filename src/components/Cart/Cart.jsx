import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../ui/Title';
import CartItem from './CartItem/CartItem';
import styles from './cart.module.css';
import CartForm from './CartForm/CartForm';
import '../Product/Card/card.css';
import { fetchOrder, fetchPromo } from '../../actions/actionCreators';

const Cart = () => {
  const { products } = useSelector((state) => state.productInCart);
  const {
    // productWithPromo,
    // loadingPromo,
    // errorPromo,
    errorOrder,
    loadingOrder,
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

  console.log(errorOrder, loadingOrder);

  return (
    <div className={styles.cart}>
      <button style={{ padding: '10px', border: '1px solid red' }} type="button" onClick={checkPromo}>Тест промо</button>
      <button style={{ padding: '10px', border: '1px solid red' }} type="button" onClick={checkOrder}>Тест отправки заказа</button>
      <Title cn={styles.cart_header} text="ваша корзина" sqColor="pink" />
      {products.map((item) => <CartItem key={item.id} cartItem={item} />)}
      <CartForm />
    </div>
  );
};

export default Cart;
