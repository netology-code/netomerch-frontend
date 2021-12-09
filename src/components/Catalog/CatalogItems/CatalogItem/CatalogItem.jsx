/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import styles from './catalogItem.module.css';
import img from '../../../../assets/img/catalog_unit_content.png';

const CatalogItem = () => (
  <div className={styles.catalogItem_item}>
    <a className={`${styles.catalogItem_image} ibg`} href="#0">
      <img src={img} alt="1" />
    </a>

    <div className={styles.catalogItem_footer}>
      <a className={styles.catalogItem_link} href="#0">Худи с принтом на правой руке</a>
      <div className={styles.catalogItem_block_price}>
        <p className={styles.catalogItem_price}>2500 p.</p>
        <a className={styles.catalogItem_cart} href="#0" />
      </div>
    </div>
  </div>
);

export default CatalogItem;
