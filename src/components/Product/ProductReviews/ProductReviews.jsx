/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styles from './productReviews.module.css';
import ProductReview from './ProductReview/ProductReview';
import Slider from '../../Slider';
import './product-reviews.css';
import ReviewsPopup from '../../Popups/ReviewsPopup';

export default function ProductReviews({ reviews, product }) {
  // const reviews = [];
  // const reviewsCount = 10; // Количество отзывов.
  // for (let i = 1; i <= reviewsCount; i += 1) {
  //   reviews.push({
  //     id: i,
  //     author: `${i}`,
  //     image: '',
  //     text: i,
  //   });
  // }
  // console.log('reviews', reviews);
  // console.log('r', r);

  if (!reviews || reviews.length === 0) return null;

  const [isPopup, setIsPopup] = useState(false);
  const [selectedReviewID, setSelectedReviewID] = useState(null);
  const [reviewsFull, setReviewsFull] = useState(null);

  useEffect(() => {
    const productMainImg = product.colors.find((color) => color.is_main)
      .images.find((image) => image.is_main)
      .images;

    setReviewsFull(reviews.map((review) => ({ ...review, name: product.name, image: productMainImg })));
  }, [reviews, product]);

  const showPopup = (reviewID) => {
    setIsPopup(true);
    setSelectedReviewID(reviewID);
  };

  const hidePopup = () => {
    setIsPopup(false);
  };

  return (
    <div className="container">
      <div className={`${styles.productReviews_reviews_block} slider-product-reviews`}>
        <Slider items={reviews} visibleCount={3} scrollStep={1}>
          {(items) => items.map((item) => <ProductReview key={item.id} review={item} onReviewClick={showPopup} />)}
        </Slider>
      </div>

      {isPopup && <ReviewsPopup reviews={reviewsFull} reviewID={selectedReviewID} hidePopup={hidePopup} />}
    </div>
  );
}
