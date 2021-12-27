/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './productReview.module.css';

const ProductReview = ({ review, onReviewClick }) => {
  const {
    id, text, author, author_image, date,
  } = review;

  return (
    <button className={styles.productReview_review} type="button" onClick={() => onReviewClick(id)}>
      <div className={styles.productReview_item}>
        <div className={styles.productReview_person}>
          <div className={`${styles.productReview_img} ibg`}>
            <img src={author_image} alt="avatar" />
          </div>
          <h4 className={styles.productReview_title}>{author}</h4>
        </div>

        <p className={styles.productReview_content}>{text}</p>
        <time className={styles.productReview_date}>{date}</time>
      </div>
    </button>
  );
};

export default ProductReview;
