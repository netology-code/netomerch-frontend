/* eslint-disable react/prop-types */
import React from 'react';
import { nanoid } from 'nanoid';
import Slider from '../../Slider';
import './main-top.css';

import img1 from '../../../assets/img/main-top-slider/slider-1.jpg';
import img2 from '../../../assets/img/main-top-slider/slider-2.jpg';
import img3 from '../../../assets/img/main-top-slider/slider-3.jpg';
import img4 from '../../../assets/img/main-top-slider/slider-4.jpg';
import img5 from '../../../assets/img/main-top-slider/slider-5.jpg';

function MainTopBanner({ img }) {
  return (
    <a className="slider-main__link" href="/#">
      <div className="slider-main__img ibg">
        <img src={img} alt="slider" />
      </div>
    </a>
  );
}

export default function MainTop() {
  const imgs = [img1, img2, img3, img4, img5];

  return (
    <div className="main-top">
      <div className="container">
        <div className="main-top__slider slider-main">
          <Slider items={imgs} isRound autoScroll={5000}>
            {(items) => items.map((item) => <MainTopBanner key={nanoid()} img={item} />)}
          </Slider>
        </div>
      </div>
    </div>
  );
}
