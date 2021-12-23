/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './catalogItem.module.css';

const mockData_addProductCart = [];
const mockData_colors = ['#FFFFFF', '#000000', '#DDB0A2'];

const CatalogItem = (props) => {
  const {
    id, name, popular, short_description, image, price, category, specialization, sizes, isOpen, onClick,
  } = props;

  const colors = mockData_colors; /* удалить после добавления данных с бэкенда */

  const [currCartFull, setCurrCartFull] = useState(false);
  const [isChoseComplete, setIsChoseComplete] = useState(null);

  const PopapCart = () => {
    const [currSize, setCurrSize] = useState(null);
    const [currColor, setCurrColor] = useState(null);
    const [isChoseCompleteSize, setIsChoseCompleteSize] = useState(true);
    const [isChoseCompleteColor, setIsChoseCompleteColor] = useState(true);

    const [isAddProduct, setIsAddProduct] = useState(true);

    const handleOnSizeClick = (size) => {
      if (size === currSize) {
        setCurrSize(null);
      } else {
        setCurrSize(size);

        setIsChoseCompleteSize(true);
        setIsAddProduct(true);
      }
    };

    const handleOnColorClick = (color) => {
      if (color === currColor) {
        setCurrColor(null);
      } else {
        setCurrColor(color);
        setIsChoseCompleteColor(true);
        setIsAddProduct(true);
      }
    };

    const handleAddToCart = () => {
      if (!currSize) { setIsChoseCompleteSize(false); }
      if (!currColor) { setIsChoseCompleteColor(false); }

      if (currSize && currColor) {
        setIsChoseComplete(true);
        setTimeout(() => setIsChoseComplete(false), 3000);
        setCurrCartFull(true);

        mockData_addProductCart.push({
          id,
          count: 1,
          size: currSize,
          color: currColor,
        });
      } else {
        setIsAddProduct(false);
      }
    };

    return (
      <div className={`${s.catalogItem_popap}`}>
        <div className={s.catalogItem_popap_sizes}>
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              className={`${s.catalogItem_popap_btn}
                          ${s.catalogItem_popap_btn_size} 
                          ${size === currSize ? s.catalogItem_popap_btn_size__active : ''}
                          ${!isChoseCompleteSize && s.catalogItem_popap_btn_size__no_active}
                        `}
              onClick={() => handleOnSizeClick(size)}
            >
              <span className>{size}</span>
            </button>
          ))}
        </div>
        <div className={s.catalogItem_popap_colors}>
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              className={`${s.catalogItem_popap_btn}
                          ${s.catalogItem_popap_btn_color}
                          ${color === currColor ? s.catalogItem_popap_btn_color__active : ''}
                          ${!isChoseCompleteColor && s.catalogItem_popap_btn_color__no_active}
                        `}
              style={{ backgroundColor: color }}
              onClick={() => handleOnColorClick(color)}
            />
          ))}
        </div>
        <button
          className={`${s.catalogItem_popap_btn_cart}
                      ${!isAddProduct && s.catalogItem_popap_btn_cart__no_active}
                      ${isChoseComplete && s.catalogItem_popap_btn_cart__active}
                    `}
          onClick={() => handleAddToCart()}
          type="button"
        >
          <span>{isChoseComplete ? 'Товар добавлен в корзину' : 'Добавить в корзину'}</span>
        </button>
      </div>
    );
  };

  return (
    <div className={s.catalogItem_item}>
      <Link className={`${s.catalogItem_image} ibg`} to={`/catalog/${id}`}>
        <img src={image} alt="photo product" />
        <span className={`${s.catalogItem_item__color} ${s.square_white}`} />
        <span className={`${s.catalogItem_item__color} ${s.square_black}`} />
        <span className={`${s.catalogItem_item__color} ${s.square_beige}`} />
      </Link>
      { isOpen && <PopapCart /> }

      <div className={s.catalogItem_footer}>
        <Link className={s.catalogItem_link} to={`/catalog/${id}`}>{name}</Link>
        <div className={`${s.catalogItem_block_price}`}>
          <p className={s.catalogItem_price}>{`${price} p.`}</p>
          <div
            className={`${s.catalogItem_cart} ${currCartFull ? s.catalogItem_cart_full : s.catalogItem_cart_empty}`}
            onClick={() => onClick(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
