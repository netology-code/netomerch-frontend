/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './feedback.css';
import helpCenterImg from '../../../assets/img/feedback/help-center.svg';
import FormFeedback from './FormFeedback';

export default function Feedback({ closeFeedback }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    text: '',
  });

  const [isConfirm, setIsConfirm] = useState(false);

  const setConfirm = () => {
    setIsConfirm(true);
  };

  return (
    <div className={`feedback${isConfirm ? ' feedback-confirm' : ''}`}>
      <header className="feedback__header header-feedback">
        <div className="header-feedback_text">
          <p>Есть вопрос?</p>
          <p>Напишите нам!</p>
        </div>
        <button className="header-feedback__btn-close" type="button" onClick={closeFeedback}>
          <span className="visually-hidden">Закрыть</span>
        </button>
      </header>

      <FormFeedback form={form} setForm={setForm} setConfirm={setConfirm} />

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
