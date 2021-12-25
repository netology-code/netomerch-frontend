/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Title from '../../ui/Title';
import './reviews-popup.css';

export default function ReviewsPopup({ hidePopup }) {
  // console.log('popup', reviews);

  // Закрыть попап, при клике на темном фоне.
  const handleOnPopupClick = (event) => {
    if (event.target.classList.contains('reviews-popup')) hidePopup();
  };

  return (
    <div className="reviews-popup" onClick={handleOnPopupClick}>
      <div className="reviews-popup__body">
        <button className="reviews-popup__btn-close" type="button" onClick={hidePopup}>
          <span className="visually-hidden">Закрыть</span>
        </button>
        <div className="reviews-popup__slider slider slider-reviews-popup">
          <div className="reviews-popup__review review-popup">
            <header className="review-popup__header header-review-popup">
              <div className="header-review-popup__column-1">
                <div className="review-popup__product-img ibg">
                  <img src="" alt="" />
                </div>
              </div>

              <div className="header-review-popup__column-2">
                <div className="header-review-popup__row-1">
                  <a className="review-popup__btn-cart btn" href="#/">Перейти к товару</a>
                </div>
                <div className="header-review-popup__row-2">
                  <Title cn="review-popup__title" text="Потрясающая футболка белого цвета" />
                </div>
              </div>
            </header>

            <div className="review-popup__content">
              <div className="review-popup__text">Очень красивый и приятный мерч. Сразу понравился, как увидела покупаю себе и близким :) Особенно нравится качество материала и принт. Чувствуется, что сделано с душой. Очень красивый и приятный мерч. Сразу понравился, как увидела покупаю себе и близким :) Особенно нравится качество материала и принт. Чувствуется, что сделано с душой. Очень красивый и приятный мерч. Сразу понравился, как увидела покупаю себе и близким :) Особенно нравится качество материала и принт. Чувствуется, что сделано с душой.</div>
              <div className="review-popup__author">
                <div className="review-popup__avatar">
                  <img src="" alt="author" />
                </div>
                <div className="review-popup__author-name">Марина Новикова</div>
              </div>
              <div className="review-popup__date">01.12.2021</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
