import React from 'react';
import './main-top.css';
import '../Slider/slider.css';

import img from './img/content_merch_1.png';

export default function MainTop() {
  return (
    <div className="main-top">
      <div className="container">
        <div className="slider slider-main">
          <div className="slider-main__img ibg">
            {/* <img src="https://placeimg.com/1000/480/tech" alt="1" /> */}
            <img src={img} alt="1" />
          </div>
          <div className="slider__control slider-main__control">
            <button className="slider__arrow" type="button">
              <span className="visually-hidden">Назад</span>
            </button>

            <ul className="slider__points">
              <li className="slider__point slider__point_active"><span className="visually-hidden">Точка слайдера</span></li>
              <li className="slider__point"><span className="visually-hidden">Точка слайдера</span></li>
              <li className="slider__point"><span className="visually-hidden">Точка слайдера</span></li>
              <li className="slider__point"><span className="visually-hidden">Точка слайдера</span></li>
              <li className="slider__point"><span className="visually-hidden">Точка слайдера</span></li>
            </ul>

            <button className="slider__arrow slider__arrow_right" type="button">
              <span className="visually-hidden">Вперед</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
