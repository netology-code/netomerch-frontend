/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './catalogItem.module.css';

const CatalogItem = (props) => {
  const {
    id, name, popular, short_description, image, price, category, specialization, sizes, onClick,
  } = props;

  return (
    <div className={styles.catalogItem_item}>
      <Link className={`${styles.catalogItem_image} ibg`} to="/catalog/2">
        <img src={image} alt="photo product" />
        <span className={`${styles.catalogItem_item__color} ${styles.square_white}`} />
        <span className={`${styles.catalogItem_item__color} ${styles.square_black}`} />
        <span className={`${styles.catalogItem_item__color} ${styles.square_beige}`} />
      </Link>

      <div className={styles.catalogItem_footer}>
        <Link className={styles.catalogItem_link} to="/catalog/2">{name}</Link>
        <div className={styles.catalogItem_block_price}>
          <p className={styles.catalogItem_price}>{`${price} p.`}</p>
          <div className={styles.catalogItem_cart} onClick={onClick}>
            <div className={styles.catalogItem_popap}>
              <div className={styles.catalogItem_popap_size}>
                <span>s</span>
                <span>m</span>
                <span>l</span>
              </div>
              <div className={styles.catalogItem_popap_color}>
                <span className={styles.catalogItem_popap_color_white} />
                <span className={styles.catalogItem_popap_color_black} />
                <span className={styles.catalogItem_popap_color_beige} />
              </div>
              <button className={styles.catalogItem_popap_btn}>
                <span>Добавить в корзину</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
