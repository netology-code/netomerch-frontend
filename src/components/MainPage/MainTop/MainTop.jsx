import React from 'react';
import './main-top.css';

export default function MainTop() {
  return (
    <div className="main-top">
      <div className="container">
        <div className="main-top-slider slider-main">
          <div className="slider-main__img ibg">
            <img src="https://placeimg.com/1000/480/tech" alt="1" />
          </div>
          <div className="slider-main__control">
            <button className="slider-main__arrow" type="button">
              <span className="visually-hidden">Назад</span>
            </button>

            <ul className="slider-main__points">
              <li className="slider-main__point slider-main__point_active"><span className="visually-hidden">Точка слайдера</span></li>
              <li className="slider-main__point"><span className="visually-hidden">Точка слайдера</span></li>
              <li className="slider-main__point"><span className="visually-hidden">Точка слайдера</span></li>
              <li className="slider-main__point"><span className="visually-hidden">Точка слайдера</span></li>
              <li className="slider-main__point"><span className="visually-hidden">Точка слайдера</span></li>
            </ul>

            <button className="slider-main__arrow slider-main__arrow_right" type="button">
              <span className="visually-hidden">Вперед</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
