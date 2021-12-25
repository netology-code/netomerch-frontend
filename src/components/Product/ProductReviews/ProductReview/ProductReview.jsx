/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './productReview.module.css';

const ProductReview = (props) => {
  const {
    id, text, author, author_image, date, reviewsLen,
  } = props;

  return (
    <div className={`${styles.productReview_review} ${(reviewsLen <= 2) ? styles.productReview_review__lessTwo : ''}`}>
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
    </div>
  );
};

export default ProductReview;
