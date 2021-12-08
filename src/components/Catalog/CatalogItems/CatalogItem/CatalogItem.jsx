/* eslint-disable no-undef */
import React from 'react';
import styles from './catalogItem.module.css';
import img from '../../../../assets/img/catalog_unit_content.png';

const CatalogItem = () => (
  <div className={styles.catalogItem_item}>
    <div>
      <div className={`${styles.catalogItem_image} ${styles.ibg}`}>
        <img src={img} alt="1" />
      </div>

      <a className={styles.catalogItem_link} href="#0">Худи с принтом на правой руке</a>
    </div>

    <div className={styles.catalogItem_block_price}>
      <p className={styles.catalogItem_price}>2500 p.</p>
      <span className={styles.catalogItem_cart} />
    </div>
  </div>
);

export default CatalogItem;
