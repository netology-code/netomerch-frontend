/* eslint-disable react/jsx-indent */
/* eslint-disable no-undef */
import React from 'react';
import styles from './catalogItem.module.css';
import img from '../../../../assets/img/catalog_unit_content.png';

const CatalogItem = () => (
  <div className={styles.catalogItem_item}>
    <div className={`${styles.catalogItem_image} ibg`}>
      <img src={img} alt="1" />
    </div>

    <div className={styles.catalogItem_footer}>
      <a className={styles.catalogItem_link} href="#0">Худи с принтом на правой руке</a>
      <div className={styles.catalogItem_block_price}>
        <p className={styles.catalogItem_price}>2500 p.</p>
        <span className={styles.catalogItem_cart} />
      </div>
    </div>
  </div>
);

export default CatalogItem;
