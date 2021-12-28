/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import Slider from '../../Slider';
import './main-top.css';

import img1 from '../../../assets/img/main-top-slider/slider-1.jpg';
import img2 from '../../../assets/img/main-top-slider/slider-2.jpg';
import img3 from '../../../assets/img/main-top-slider/slider-3.jpg';
import img4 from '../../../assets/img/main-top-slider/slider-4.jpg';
import img5 from '../../../assets/img/main-top-slider/slider-5.jpg';

function MainTopBanner({ img, path }) {
  return (
    <Link className="slider-main__link" to={path}>
      <div className="slider-main__img ibg">
        <img src={img} alt="slider" />
      </div>
    </Link>
  );
}

export default function MainTop() {
  const imgs = [
    { img: img1, path: '/catalog?category=Худи' },
    { img: img2, path: '/catalog?category=Футболки' },
    { img: img3, path: '/catalog?category=Наборы' },
    { img: img4, path: '/catalog?category=Толстовки' },
    { img: img5, path: '/catalog' },
  ];

  return (
    <div className="main-top">
      <div className="container">
        <div className="main-top__slider slider-main">
          <Slider items={imgs} isRound autoScroll={5000}>
            {(items) => items.map((item) => (
              <MainTopBanner
                key={nanoid()}
                img={item.img}
                path={item.path}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
