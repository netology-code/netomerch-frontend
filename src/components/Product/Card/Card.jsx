/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Title from '../../ui/Title';
import './card.css';

const regCount = /^\d{0,3}$/;

export default function Card({ product }) {
  const { name, description, price, colors, sizes } = product;
  const [currColor, setCurrColor] = useState(colors.find((item) => item.is_main));
  const [currImg, setCurrImg] = useState('');
  const [currSize, setCurrSize] = useState(null);
  const [currCount, setCurrCount] = useState(0);
  const [msgAdd, setMsgAdd] = useState({ type: '', err: { size: false, count: false } });

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
    if (msgAdd.type !== '') return;
    if (size === currSize) setCurrSize(null);
    else setCurrSize(size);
  };

  const handleOnCountIncClick = () => {
    if (msgAdd.type !== '') return;
    if (currCount > 998) return;
    setCurrCount(parseInt(currCount, 10) + 1);
  };

  const handleOnCountDecClick = () => {
    if (msgAdd.type !== '') return;
    if (currCount < 1) return;
    setCurrCount(parseInt(currCount, 10) - 1);
  };

  const handleOnCountChange = (event) => {
    if (msgAdd.type !== '') return;
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
    if (msgAdd.type !== '') return;

    let type = 'ok';
    const size = !currSize;
    const count = (currCount === 0);

    if (!currSize || (currCount === 0)) type = 'error';

    if (type === 'ok') {
      setCurrCount(0);
      setCurrSize(null);
      setCurrColor(colors.find((item) => item.is_main));
    }

    setMsgAdd({ type, err: { size, count } });
    setTimeout(() => setMsgAdd({ type: '', err: { size: false, count: false } }), 2600);
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
          </div>

          <div className="card__column-2">
            <div className="card__imgs">
              {currColor.images.map((image) => (
                <div key={image.images} className="card__img-wrapp img-wrapp-card">
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

            <div className="card__description">{description}</div>

            <div className="card__actions actions-card">
              <div className="actions-card__row-1">
                <div className="actions-card__item card-sizes">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={
                        `actions-card__btn card-sizes__btn
                        ${size === currSize ? ' card-sizes__btn_selected' : ''}
                        ${msgAdd.err.size ? ' card-sizes__btn_error' : ''}`
                      }
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
                      key={color.color_code}
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
                <a className="card__btn-add btn-add-card btn" href="/#" onClick={handleOnAddToCartClick}>
                  Добавить в корзину
                  {msgAdd.type === 'ok' && (
                    <span className="btn-add-card__msg btn-add-card__msg_active btn-add-card__msg-ok btn">Товар добавлен в корзину</span>
                  )}
                  {msgAdd.type === 'error' && (
                    <span className="btn-add-card__msg btn-add-card__msg_active btn-add-card__msg-error btn">Добавить в корзину</span>
                  )}
                </a>
                <div className={`card__count count-card${msgAdd.err.count ? ' count-card_error' : ''}`}>
                  <button className="count-card__item count-card__btn" type="button" onClick={handleOnCountDecClick}>-</button>
                  <input
                    className={`count-card__item count-card__input${msgAdd.err.count ? ' count-card__input_error' : ''}`}
                    value={currCount}
                    onChange={handleOnCountChange}
                    onBlur={handleOnCountBlur}
                  />
                  <button className="count-card__item count-card__btn" type="button" onClick={handleOnCountIncClick}>+</button>
                </div>
                <div className="card__price">{`${price} ₽`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
