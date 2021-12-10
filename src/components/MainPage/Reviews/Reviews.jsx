/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import './reviews.css';

import img5 from './img/content_merch_5.png';
import img6 from './img/content_merch_6.png';
import img7 from './img/content_merch_7.png';
import img8 from './img/content_merch_8.png';
import Title from '../../ui/Title';

export default function Reviews({ reviews }) {
  console.log('reviews', reviews);
  return (
    <div className="reviews">
      <div className="container">
        <Title cn="reviews__title" text="Блок с отзывами на товары" />
        <div className="reviews__text">
          Часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum.
        </div>

        <div className="reviews__slider slider slider-rewiews">
          <div className="slider-rewiews__container">
            <div className="slider-rewiew">
              <div className="slider-rewiew__img ibg">
                {/* <img src="https://placeimg.com/360/500/tech" alt="1" /> */}
                <img src={img5} alt="1" />
              </div>
              <a className="slider-rewiew__link" href="/#">Наименование позиции 1</a>
            </div>

            <div className="slider-rewiew">
              <div className="slider-rewiew__img ibg">
                {/* <img src="https://placeimg.com/361/500/tech" alt="1" /> */}
                <img src={img6} alt="1" />
              </div>
              <a className="slider-rewiew__link" href="/#">Наименование позиции 2</a>
            </div>

            <div className="slider-rewiew">
              <div className="slider-rewiew__img ibg">
                {/* <img src="https://placeimg.com/362/500/tech" alt="1" /> */}
                <img src={img7} alt="1" />
              </div>
              <a className="slider-rewiew__link" href="/#">Наименование позиции 3</a>
            </div>

            <div className="slider-rewiew">
              <div className="slider-rewiew__img ibg">
                {/* <img src="https://placeimg.com/363/500/tech" alt="1" /> */}
                <img src={img8} alt="1" />
              </div>
              <a className="slider-rewiew__link" href="/#">Наименование позиции 4</a>
            </div>
          </div>

          <div className="slider__control slider__control_gray slider-rewiews__control">
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

        <a className="reviews__btn btn" href="/#">Мне все нравится, хочу такое же!</a>

      </div>
    </div>
  );
}
