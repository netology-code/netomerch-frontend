/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const regEmail = /@/;
console.log(regEmail.test('1'));

export default function FormFeedback({ form, setForm, setConfirm }) {
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
    text: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    if (errors[name]) setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
  };

  const handeleSubmit = (event) => {
    event.preventDefault();
    console.log('form', form);
    let isError = false;
    if (form.name.length < 3) {
      isError = true;
      setErrors((prevErrors) => ({ ...prevErrors, name: true }));
    }
    if (form.phone.length < 7) {
      isError = true;
      setErrors((prevErrors) => ({ ...prevErrors, phone: true }));
    }
    if (!regEmail.test(form.email)) {
      isError = true;
      setErrors((prevErrors) => ({ ...prevErrors, email: true }));
    }
    if (form.text.length === 0) {
      isError = true;
      setErrors((prevErrors) => ({ ...prevErrors, text: true }));
    }

    if (isError) return;

    // Отправка данных.
    console.log('Отправка данных');
    setConfirm();
  };

  useEffect(() => {
    console.log('errors', errors);
  }, [errors]);

  return (
    <form className="feedback__form form-feedback" onSubmit={handeleSubmit}>
      <div className="form-feedback__data">
        <div className="form-feedback__row">
          <input
            className={`form-feedback__input${errors.name ? ' form-feedback__input_error' : ''}`}
            placeholder="Имя и фамилия *"
            name="name"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-feedback__row">
          <input
            className={`form-feedback__input${errors.phone ? ' form-feedback__input_error' : ''}`}
            placeholder="Телефон *"
            name="phone"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-feedback__row">
          <input
            className={`form-feedback__input${errors.email ? ' form-feedback__input_error' : ''}`}
            placeholder="E-mail *"
            name="email"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-feedback__row">
          <textarea
            className={`form-feedback__input form-feedback__input-text${errors.text ? ' form-feedback__input_error' : ''}`}
            placeholder="Текст сообщения *"
            name="text"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="form-feedback__footer">
        <button className="form-feedback__btn-send btn" type="submit">Отправить сообщение</button>
      </div>
    </form>
  );
}
