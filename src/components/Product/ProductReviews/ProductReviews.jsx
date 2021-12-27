/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styles from './productReviews.module.css';
import ProductReview from './ProductReview/ProductReview';
import Slider from '../../Slider';
import './product-reviews.css';

export default function ProductReviews({ reviews: r }) {
  const reviews = [];
  const reviewsCount = 10; // Количество отзывов.
  for (let i = 1; i <= reviewsCount; i += 1) {
    reviews.push({
      id: i,
      author: `${i}`,
      // image: 'https://dev.netomerch.tk/media/item/cup_uSeRI4R.jpeg',
      image: '',
      text: i,
    });
  }
  console.log('reviews', reviews);
  console.log('r', r);

  if (!reviews || reviews.length === 0) return null;

  return (
    <div className="container">
      <div className={`${styles.productReviews_reviews_block} slider-product-reviews`}>
        <Slider items={reviews} visibleCount={3} scrollStep={1}>
          {(items) => items.map((item) => <ProductReview key={item.id} review={item} />)}
        </Slider>
      </div>

      {/* {reviews.length !== 0 && (
        <div className="reviews__slider slider">
          <div className={styles.productReviews_reviews_block}>
            <div className={styles.productReviews_content}>
              {vReviews.map((review) => (
                <ProductReview
                  key={nanoid()}
                  id={review.id}
                  text={review.text}
                  author={review.author}
                  author_image={review.author_image}
                  date={review.date}
                />
              ))}
            </div>

            {isSliderControl && (
            <div className="slider__control slider__control_gray slider-rewiews__control">
              <button className="slider__arrow" type="button" onClick={handleOnLeftClick}>
                <span className="visually-hidden">Назад</span>
              </button>

              <ul className="slider__points">
                {points.map((point, index) => (
                  <li className={`slider__point${index === activePoint ? ' slider__point_active' : ''} `} key={nanoid()}>
                    <span className="visually-hidden">Точка слайдера</span>
                  </li>
                ))}
              </ul>
              <button className="slider__arrow slider__arrow_right" type="button" onClick={handleOnRightClick}>
                <span className="visually-hidden">Вперед</span>
              </button>
            </div>
            )}
          </div>
        </div>
      )} */}
    </div>
  );
}
