/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import Title from '../../ui/Title';
import './card.css';

export default function Card({ mockData }) {
  // fetch('https://dev.netomerch.tk/api/v1/card/2')
  //   .then((response) => response.json())
  //   .then((data) => console.log('data', data));

  const { colors } = mockData;
  const [currColor, setCurrColor] = useState({});
  // const colorMain =
  // const imgMain =

  useEffect(() => {
    const colorMain = colors.find((item) => item.is_main);
    setCurrColor(colorMain);
    console.log('colorMain', colorMain);
  }, []);

  const handleOnColorClick = (color) => {
    if (color.color_code === currColor.color_code) return;
    console.log('handleOnColorClick', color.name);
    setCurrColor(color);
  };

  return (
    <div className="card">
      <div className="container">
        <Title cn="card__title" text="Наименование товара" sqColor="purple" />
        <div className="card__content">
          <div className="card__column-1">
            <div className="card__img-main ibg">
              <img src="https://placeimg.com/360/500/tech" alt="" />
            </div>

            <div className="card__imgs">
              <div className="card__img ibg">
                <img src="https://placeimg.com/260/200/tech" alt="" />
              </div>
              <div className="card__img ibg">
                <img src="https://placeimg.com/265/200/tech" alt="" />
              </div>
              <div className="card__img ibg">
                <img src="https://placeimg.com/270/200/tech" alt="" />
              </div>
              <div className="card__img ibg">
                <img src="https://placeimg.com/275/200/tech" alt="" />
              </div>
            </div>
          </div>

          <div className="card__column-2">
            <div className="card__description">{mockData.description}</div>

            <div className="card__actions actions-card">
              <div className="actions-card__row-1">
                <div className="actions-card__item card-sizes">
                  <button className="actions-card__btn card-sizes__btn card-sizes__btn_selected" type="button">s</button>
                  <button className="actions-card__btn card-sizes__btn" type="button">m</button>
                  <button className="actions-card__btn card-sizes__btn" type="button">l</button>
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
                  {/* <button className="actions-card__btn card-colors__btn card-colors__btn_selected" type="button"><span className="visually-hidden">{currColor.name}</span></button>
                  <button className="actions-card__btn card-colors__btn" type="button"><span className="visually-hidden">{currColor.name}</span></button>
                  <button className="actions-card__btn card-colors__btn" type="button"><span className="visually-hidden">{currColor.name}</span></button> */}
                </div>
              </div>

              <div className="actions-card__row-2">
                <a className="card__btn btn" href="/#">Добавить в корзину</a>
                <div className="card__count count-card">
                  <button className="count-card__item count-card__btn" type="button">-</button>
                  <input className="count-card__item count-card__input" value="1" />
                  <button className="count-card__item count-card__btn" type="button">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="card__footer">
          <div className="card__price">2500 ₽</div>
        </footer>
      </div>
    </div>
  );
}
