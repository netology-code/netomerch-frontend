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
    question: 'Из каких материалов сделана одежда? Долго ли прослужит? ',
    answer: 'Мы используем только качественные ткани — 100%-ный хлопок. Они переживут не одну стирку и не скатаются в катышки. Одежду шьём у проверенных партнёров, которым доверяем, оригинальные принты наносим в компании «ПростоПринт». При правильном уходе выбранные вами вещи прослужат не один сезон. ',
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
    answer: 'Оплатить заказ можно картой при его оформлении на сайте. Подробнее об оплате заказа читайте в разделе',
    isOpen: false,
  },
  {
    id: 4,
    question: 'Как обменять или вернуть товар, если он не подошёл?',
    answer: 'Товар надлежащего качества, который вы не использовали, можно обменять или вернуть в течение двух недель со дня его получения. Напишите в службу поддержки support@...... — мы свяжемся с вами и поможем решить проблему.',
    isOpen: false,
  },
  {
    id: 5,
    question: 'Как осуществляется доставка? / Доставляете ли в мой город и какой компанией?',
    answer: 'Аккуратно упакуем и доставим выбранный вами товар в любой регион России. При оформлении заказа просто выберите наиболее удобный способ отправки: транспортной компанией или Почтой России. Подробнее о доставке читайте в разделе ',
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
          <Title text="Раздел с ответами на часто встречающиеся вопросы" sqSize="25" />
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
