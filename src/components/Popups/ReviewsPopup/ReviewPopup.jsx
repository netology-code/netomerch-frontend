/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../ui/Title';

export default function ReviewPopup({ review }) {
  return (
    <div className="reviews-popup__review review-popup">
      <header className="review-popup__header header-review-popup">
        <div className="header-review-popup__column-1">
          <div className="review-popup__product-img ibg">
            <img src={review.image} alt="" />
          </div>
        </div>

        <div className="header-review-popup__column-2">
          <div className="header-review-popup__row-1">
            <Link className="review-popup__btn-cart btn" to={`/catalog/${review.item_id}`}>Перейти к товару</Link>
          </div>
          <div className="header-review-popup__row-2">
            <Title cn="review-popup__title" text={review.name} />
          </div>
        </div>
      </header>

      <div className="review-popup__content">
        <div className="review-popup__text">{review.text}</div>
        <div className="review-popup__author">
          <div className="review-popup__avatar">
            <img src={review.author_image} alt="author" />
          </div>
          <div className="review-popup__author-name">{review.author}</div>
        </div>
        <div className="review-popup__date">{review.date}</div>
      </div>
    </div>
  );
}
