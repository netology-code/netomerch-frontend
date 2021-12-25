/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function MainReview({ review, onImgClick }) {
  return (
    <div className="slider-main-rewiew">
      <button className="slider-main-rewiew__img ibg" type="button" onClick={onImgClick}>
        {/* <Link to={`/catalog/${review.item_id}`}><img src={review.image} alt="image rewiew" /></Link> */}
        <img src={review.image} alt="product" />
      </button>
      {/* <a className="slider-rewiew__link" href="/#">{vReview.item.name}</a> */}
      <Link className="slider-main-rewiew__link" to={`/catalog/${review.item_id}`}>{review.name}</Link>
    </div>
  );
}
