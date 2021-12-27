/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import styles from './support.module.css';
import Title from '../ui/Title';
import SupportContent from './SupportContent';

const Support = () => {
  // Моковые данные
  const questions = [
    {
      id: 1,
      question: 'Из чего сшита одежда? Долго ли прослужит?',
      answer: 'Одежду шьём у проверенных партнёров, которым доверяем, оригинальные принты наносим методом сублимации — экологичными красками, не выделяющими запаха. Используем только качественные ткани — 100%-й хлопок. При правильном уходе выбранные вами вещи переживут не одну стирку, не скатаются в катышки и прослужат несколько сезонов.',
      isOpen: true,
    },
    {
      id: 2,
      question: 'А я не учусь в Нетологии. Могу ли сделать заказ?',
      answer: 'Конечно, можете! Покупайте себе и друзьям в подарок.',
      isOpen: false,
    },
    {
      id: 3,
      question: 'Как оплатить заказ?',
      answer: 'Оплатить заказ можно любым способом, предложенным при его оформлении на сайте, включая оплату картой. Подробнее об оплате заказа читайте в разделе «Центр поддержки».',
      isOpen: false,
    },
    {
      id: 4,
      question: 'Как обменять или вернуть одежду, если она не подошла?',
      answer: 'Одежду, которую вы не использовали, можно обменять или вернуть в течение двух недель со дня её получения. Напишите в службу поддержки support@nemerch.tk— мы свяжемся с вами и поможем решить проблему.',
      isOpen: false,
    },
    {
      id: 5,
      question: 'Как доставляете заказы?',
      answer: 'Аккуратно упакуем и доставим выбранные вами вещи в любой регион России. При оформлении заказа просто выберите наиболее удобный способ отправки: транспортной компанией или Почтой России. Подробнее о доставке читайте в разделе «Центр поддержки».',
      isOpen: false,
    },
  ];

  const [content, setContent] = useState(questions);
  const handleClick = (id) => {
    setContent(content.map((cont) => {
      if (id !== cont.id) {
        cont.isOpen = false;
      } else {
        cont.isOpen = true;
      }
      return cont;
    }));
  };

  return (
    <div className={styles.support}>
      <Title cn={styles.cart_header} text="центр поддержки" sqColor="pink" />
      <div className={styles.supportContent}>
        <div className={styles.supportSidebar}>
          { content.map((item) => (
            <SupportContent
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={item.isOpen}
              onClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
