/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Slider from '../../Slider';
import ReviewPopup from './ReviewPopup';
import './reviews-popup.css';

export default function ReviewsPopup({ reviews, reviewID, hidePopup }) {
  const startPos = reviews.findIndex((review) => review.id === reviewID);

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
        <div className="reviews-popup__slider slider-reviews-popup">
          <Slider items={reviews} startPos={startPos}>
            {(items) => items.map((item) => <ReviewPopup key={item.id} review={item} />)}
          </Slider>
        </div>
      </div>
    </div>
  );
}
