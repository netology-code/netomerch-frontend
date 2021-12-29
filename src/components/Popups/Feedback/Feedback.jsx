/* eslint-disable react/prop-types */
import React from 'react';
import './feedback.css';

import helpCenterImg from '../../../assets/img/feedback/help-center.svg';

export default function Feedback({ closeFeedback }) {
  return (
    <div className="feedback">
      <header className="feedback__header header-feedback">
        <div className="header-feedback_text">
          <p>Есть вопрос?</p>
          <p>Напишите нам!</p>
        </div>
        <button className="header-feedback__btn-close" type="button" onClick={closeFeedback}>
          <span className="visually-hidden">Закрыть</span>
        </button>
      </header>

      <form className="feedback__form form-feedback">
        <div className="form-feedback__data">
          <div className="form-feedback__row">
            <input className="form-feedback__input" placeholder="Имя и фамилия *" />
          </div>

          <div className="form-feedback__row">
            <input className="form-feedback__input" placeholder="Телефон *" />
          </div>

          <div className="form-feedback__row">
            <input className="form-feedback__input" placeholder="E-mail *" />
          </div>

          <div className="form-feedback__row">
            <textarea className="form-feedback__input form-feedback__input-text" placeholder="Текст сообщения *" />
          </div>
        </div>

        <div className="form-feedback__footer">
          <button className="form-feedback__btn-send btn" type="button">Отправить сообщение</button>
        </div>
      </form>

      <div className="feedback-confirm__content">
        <div className="feedback-confirm__img">
          <img src={helpCenterImg} alt="feedback" />
        </div>

        <div className="feedback-confirm__text-ok">Сообщение отправлено</div>
        <div className="feedback-confirm__text-thanks">
          <p>Спасибо за письмо!</p>
          <p>Скоро мы вернемся сответом :)</p>
        </div>
      </div>
    </div>
  );
}
