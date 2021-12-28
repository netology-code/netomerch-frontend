import React from 'react';
import './feedback.css';

export default function Feedback() {
  return (
    <div className="feedback">
      <header className="feedback__header header-feedback">
        <div className="header-feedback_text">
          <p>Есть вопрос?</p>
          <p>Напишите нам!</p>
        </div>
        <button className="header-feedback__btn-close" type="button">
          <span className="visually-hidden">Закрыть</span>
        </button>
      </header>

      <form className="feedback__form form-feedback">
        <div className="form-feedback__row">
          <input className="form-feedback__input" value="Afe f fef" placeholder="Имя и фамилия *" />
        </div>

        <div className="form-feedback__row">
          <input className="form-feedback__input" placeholder="Телефон *" />
        </div>

        <div className="form-feedback__row">
          <input className="form-feedback__input" placeholder="E-mail *" />
        </div>

        <div className="form-feedback__row">
          <textaria className="form-feedback__input" placeholder="Текст сообщения *" />
        </div>

        <div className="form-feedback__footer">
          <button className="form-feedback__btn-send btn" type="button">Отправить сообщение</button>
        </div>
      </form>
    </div>
  );
}
