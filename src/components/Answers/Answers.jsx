/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Accordion from './Accordion/Accordion';
import style from './answers.module.css';
import Title from '../ui/Title';

const mockData = [
  {
    id: 1,
    question: 'Из чего сшита одежда? Долго ли прослужит?',
    answer: 'Одежду шьём у проверенных партнёров, которым доверяем, оригинальные принты наносим методом сублимации — экологичными красками, не выделяющими запаха. Используем только качественные ткани — 100%-й хлопок. При правильном уходе выбранные вами вещи переживут не одну стирку, не скатаются в катышки и прослужат несколько сезонов.',
    isOpen: false,
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
    answer: 'Одежду, которую вы не использовали, можно обменять или вернуть в течение двух недель со дня её получения. Напишите в службу поддержки support@nemerch.tk — мы свяжемся с вами и поможем решить проблему.',
    isOpen: false,
  },
  {
    id: 5,
    question: 'Как доставляете заказы?',
    answer: 'Аккуратно упакуем и доставим выбранные вами вещи в любой регион России. При оформлении заказа просто выберите наиболее удобный способ отправки: транспортной компанией или Почтой России. Подробнее о доставке читайте в разделе «Центр поддержки».',
    isOpen: false,
  },
];

const Answers = () => {
  const [content, setContent] = useState(mockData);
  const handleClick = (id) => {
    setContent(content.map((cont) => {
      if (id === cont.id) {
        cont.isOpen = !cont.isOpen;
      } else {
        cont.isOpen = false;
      }
      return cont;
    }));
  };

  return (
    <section className={style.answers}>
      <div className="container">
        <header>
          <Title text="Вопросы и ответы" sqSize="25" />
        </header>

        <div className={style.accordion}>
          { content.map((item) => (
            <Accordion
              key={item.id}
              id={item.id}
              title={item.question}
              content={item.answer}
              isOpen={item.isOpen}
              onClick={handleClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Answers;
