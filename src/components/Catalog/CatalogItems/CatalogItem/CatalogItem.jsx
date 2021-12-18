/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './catalogItem.module.css';

const CatalogItem = (props) => {
  const {
    item_id, name, popular, short_description, image, price, category, specialization, sizes,
  } = props;

  return (
    <div className={styles.catalogItem_item}>
      <Link className={`${styles.catalogItem_image} ibg`} to="/catalog/2">
        <img src={image} alt="image prodict" />
      </Link>

      <div className={styles.catalogItem_footer}>
        <Link className={styles.catalogItem_link} to="/catalog/2">{name}</Link>
        <div className={styles.catalogItem_block_price}>
          <p className={styles.catalogItem_price}>{`${price} p.`}</p>
          <a className={styles.catalogItem_cart} href="#0" />
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
