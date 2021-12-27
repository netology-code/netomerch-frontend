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
    </div>
  );
}
