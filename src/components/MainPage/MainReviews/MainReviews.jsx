/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Title from '../../ui/Title';
import ReviewsPopup from '../../Popups/ReviewsPopup';
import Slider from '../../Slider';
import './main-reviews.css';
import MainReview from './MainReview';

export default function MainReviews({ reviews }) {
  // Заглушка для теста отзывов. Пришлось пока оставить так как с бэка не приходит, то что нужно.
  // const reviews = [];
  // const reviewsCount = 10; // Количество отзывов.
  // for (let i = 1; i <= reviewsCount; i += 1) {
  //   reviews.push({
  //     name: `${i}`,
  //     // image: 'https://dev.netomerch.tk/media/item/cup_uSeRI4R.jpeg',
  //     image: '',
  //   });
  // }
  // console.log('reviews', reviews);
  // --------------------------------------------------------------------------------------------

  const [isPopup, setIsPopup] = useState(false);
  const [selectedReviewID, setSelectedReviewID] = useState(null);
  const [visibleCount, setVisibleCount] = useState(null);
  const [scrollStep, setScrollStep] = useState(null);

  // Проверяем какое количество отзывов отобразить при текущей ширине экрана.
  useEffect(() => {
    const handleRezise = (event) => {
      let width = 0;
      if (!event) width = window.outerWidth;
      else width = event.target.outerWidth;

      let vCount = 4;
      let sCount = 4;

      if (width <= 1200) vCount = 3;
      if (width <= 768) vCount = 2;
      if (width <= 468) vCount = 1;

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
    <div className="main-reviews">
      <div className="container">
        <Title cn="main-reviews__title" text="Отзывы, которые мы заслужили" />
        <div className="main-reviews__text">
          Здесь мы собрали отзывы наших клиентов о самых популярных товарах. Они рассказывают, почему выбрали НеМерч, как используют любимые вещи и за что их ценят.
        </div>

        <div className="main-reviews__slider slider-main-rewiews">
          <Slider items={reviews} visibleCount={visibleCount} scrollStep={scrollStep}>
            {(items) => items.map((item) => <MainReview key={item.id} review={item} onImgClick={showPopup} />)}
          </Slider>
        </div>

        <Link className="main-page__btn btn" to="/catalog">Убедили! В каталог</Link>

        {isPopup && <ReviewsPopup reviews={reviews} reviewID={selectedReviewID} hidePopup={hidePopup} />}
      </div>
    </div>
  );
}
