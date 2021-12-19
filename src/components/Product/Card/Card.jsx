/* eslint-disable object-curly-newline */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import Title from '../../ui/Title';
import './card.css';

const regCount = /^\d{0,3}$/;

export default function Card({ product }) {
  // fetch('https://dev.netomerch.tk/api/v1/card/1')
  //   .then((response) => response.json())
  //   .then((data) => console.log('data', data));

  const { name, description, price, colors, sizes } = product;
  const [currColor, setCurrColor] = useState(colors.find((item) => item.is_main));
  const [currImg, setCurrImg] = useState('');
  const [currSize, setCurrSize] = useState(null);
  const [currCount, setCurrCount] = useState(0);
  const [isMsgAdd, setIsMsgAdd] = useState(false);

  useEffect(() => {
    setCurrImg(currColor.images.find((image) => image.is_main).images);
  }, [currColor]);

  const handleOnColorClick = (color) => {
    if (color.color_code === currColor.color_code) return;
    setCurrColor(color);
  };

  const handleOnImgClick = (image) => {
    if (image === currImg) return;
    setCurrImg(image);
  };

  const handleOnSizeClick = (size) => {
    if (size === currSize) setCurrSize(null);
    else setCurrSize(size);
  };

  const handleOnCountIncClick = () => {
    if (currCount > 998) return;
    setCurrCount(parseInt(currCount, 10) + 1);
  };

  const handleOnCountDecClick = () => {
    if (currCount < 1) return;
    setCurrCount(parseInt(currCount, 10) - 1);
  };

  const handleOnCountChange = (event) => {
    const { value } = event.target;

    if (!regCount.test(value)) return;
    if (value === '') setCurrCount('');
    else setCurrCount(parseInt(value, 10));
  };

  const handleOnCountBlur = (event) => {
    if (event.target.value === '') setCurrCount('0');
  };

  const handleOnAddToCartClick = (event) => {
    event.preventDefault();
    if (isMsgAdd) return;
    if (!currSize) {
      console.log('Размер не выбран!');
      return;
    }

    if (currCount === 0) {
      console.log('Количество - 0!');
      return;
    }

    console.log('Add to cart');
    setCurrCount(0);
    setCurrSize(null);
    setCurrColor(colors.find((item) => item.is_main));
    setIsMsgAdd(true);
    setTimeout(() => setIsMsgAdd(false), 3000);
  };

  return (
    <div className="card">
      <div className="container">
        <Title cn="card__title" text={name} sqColor="purple" />
        <div className="card__content">
          <div className="card__column-1">
            <div className="card__img-main ibg">
              <img src={currImg} alt={`Главная картинка. ${name}`} />
            </div>

            <div className="card__imgs">
              {currColor.images.map((image) => (
                <div className="card__img-wrapp img-wrapp-card">
                  <button
                    className={`img-wrapp-card__btn${image.images === currImg ? ' img-wrapp-card__btn_selected' : ''}`}
                    onClick={() => handleOnImgClick(image.images)}
                    type="button"
                  >
                    <div className="card__img card__img_selected ibg">
                      <img src={image.images} alt={name} />
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="card__column-2">
            <div className="card__description">{description}</div>

            <div className="card__actions actions-card">
              <div className="actions-card__row-1">
                <div className="actions-card__item card-sizes">
                  {sizes.map((size) => (
                    <button
                      className={`actions-card__btn card-sizes__btn${size === currSize ? ' card-sizes__btn_selected' : ''}`}
                      type="button"
                      onClick={() => handleOnSizeClick(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                <div className="actions-card__item card-colors">
                  {colors.map((color) => (
                    <button
                      className={`actions-card__btn card-colors__btn${color.color_code === currColor.color_code ? ' card-colors__btn_selected' : ''}`}
                      style={{ backgroundColor: color.color_code }}
                      onClick={() => handleOnColorClick(color)}
                      type="button"
                    >
                      <span className="visually-hidden">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="actions-card__row-2">
                <a className="card__btn-add btn" href="/#" onClick={handleOnAddToCartClick}>Добавить в корзину</a>
                <div className={`card__message${isMsgAdd ? ' card__message_active' : ''}`}>Товар добавлен в корзину</div>
                <div className="card__count count-card">
                  <button className="count-card__item count-card__btn" type="button" onClick={handleOnCountDecClick}>-</button>
                  <input className="count-card__item count-card__input" value={currCount} onChange={handleOnCountChange} onBlur={handleOnCountBlur} />
                  <button className="count-card__item count-card__btn" type="button" onClick={handleOnCountIncClick}>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="card__footer">
          <div className="card__price">{`${price} ₽`}</div>
        </footer>
      </div>
    </div>
  );
}
