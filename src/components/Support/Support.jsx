import React from 'react';
import styles from './support.module.css';
import Title from '../ui/Title';

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

  // Поиск нужного ответа по id
  const switchQuestion = (id) => questions.find((item) => item.id === id);

  // Пример хендлера на JS
  const changeContent = (e) => {
    const { id } = e.target;
    const answerBlock = document.getElementById('answer');
    answerBlock.textContent = switchQuestion(id).answer;
    // Тут еще со стилями надо по идее поработать
  };

  return (
    <div className={styles.support}>
      <Title cn={styles.cart_header} text="центр поддержки" sqColor="pink" />
      <div className={styles.supportContent}>
        <div className={styles.supportSidebar}>
          {questions.map((item) => (
            <button
              className={styles.supportQuestions}
              id={item.id}
              type="button"
              onClick={changeContent}
            >
              {item.question}
            </button>
          ))}
        </div>
        <div className={styles.supportAnswerContent}>
          <div className={styles.supportAnswer} id="answer">
            {questions[0].answer}
          </div>
          <div className={styles.supportBackground} />
        </div>
      </div>
    </div>
  );
};

export default Support;
