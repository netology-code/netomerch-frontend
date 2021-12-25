/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import Title from '../../ui/Title';
import ReviewsPopup from '../../Popups/ReviewsPopup';
import Slider from '../../Slider';
import './main-reviews.css';
import MainReview from './MainReview';

export default function MainReviews({ reviews: r }) {
  // Заглушка для теста отзывов. Пришлось пока оставить так как с бэка не приходит, то что нужно.
  const reviews = [];
  const reviewsCount = 10; // Количество отзывов.
  for (let i = 1; i <= reviewsCount; i += 1) {
    reviews.push({
      name: `${i}`,
      // image: 'https://dev.netomerch.tk/media/item/cup_uSeRI4R.jpeg',
      image: '',
    });
  }
  console.log('reviews', reviews);
  console.log('r', r);
  // --------------------------------------------------------------------------------------------

  const [isPopup, setIsPopup] = useState(false);

  const showPopup = () => {
    setIsPopup(true);
  };

  const hidePopup = () => {
    setIsPopup(false);
  };

  return (
    <div className="main-reviews">
      <div className="container">
        <Title cn="main-reviews__title" text="Отзывы, которые мы заслужили" />
        <div className="main-reviews__text">
          Здесь мы собрали отзывы наших клиентов о самых популярных товарах. Они рассказывают, почему выбрали наш мерч, как его используют и за что ценят.
        </div>

        <div className="main-reviews__slider slider-main-rewiews">
          <Slider items={reviews} isRound>
            {(items) => items.map((item) => <MainReview key={nanoid()} review={item} onImgClick={showPopup} />)}
          </Slider>
        </div>

        <Link className="main-page__btn btn" to="/catalog">Убедили! В каталог</Link>

        {/* {isPopup && <ReviewsPopup reviews={reviews} pos={pos} hidePopup={hidePopup} />} */}
      </div>
    </div>
  );
}
