/* eslint-disable no-unused-vars */
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
  //     text: 'kwejflkje \n sfjkhsdkjf',
  //   });
  // }
  // console.log('reviews', reviews);
  // console.log('r', r);

  if (!reviews || reviews.length === 0) return null;

  const [isPopup, setIsPopup] = useState(false);
  const [selectedReviewID, setSelectedReviewID] = useState(null);
  const [reviewsFull, setReviewsFull] = useState(null);
  const [visibleCount, setVisibleCount] = useState(null);
  const [scrollStep, setScrollStep] = useState(null);

  // Дополняем объект review полем name и image.
  useEffect(() => {
    const productMainImg = product.colors.find((color) => color.is_main)
      .images.find((image) => image.is_main)
      .images;

    setReviewsFull(reviews.map((review) => ({ ...review, name: product.name, image: productMainImg })));
  }, [product]);

  // Проверяем какое количество отзывов отобразить при текущей ширине экрана.
  useEffect(() => {
    const handleRezise = (event) => {
      let width = 0;
      if (!event) width = window.outerWidth;
      else width = event.target.outerWidth;

      let vCount = 3;
      let sCount = 1;

      if (width <= 1200) vCount = 2;
      if (width <= 768) vCount = 1;

      if (sCount > vCount) sCount = vCount;

      if (visibleCount !== vCount) setVisibleCount(vCount);
      if (scrollStep !== sCount) setScrollStep(sCount);
    };

    handleRezise();
    window.addEventListener('resize', handleRezise);

    return () => window.removeEventListener('resize', handleRezise);
  }, []);

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
        <Slider items={reviews} visibleCount={visibleCount} scrollStep={scrollStep}>
          {(items) => items.map((item) => <ProductReview key={item.id} review={item} onReviewClick={showPopup} />)}
        </Slider>
      </div>

      {isPopup && <ReviewsPopup reviews={reviewsFull} reviewID={selectedReviewID} hidePopup={hidePopup} />}
    </div>
  );
}
