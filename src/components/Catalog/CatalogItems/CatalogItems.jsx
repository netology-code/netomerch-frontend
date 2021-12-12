/* eslint-disable react/jsx-indent */
/* eslint-disable max-len */
import React from 'react';
import styles from './catalogItems.module.css';
import CatalogItem from './CatalogItem/CatalogItem';

const mockData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function CatalogItems() {
  return (
    <div className={styles.catalogItems_wrapper}>
      <div className={`${styles.catalogItems_star} ${styles.catalogItems_star__1}`} />
      <div className={`${styles.catalogItems_star} ${styles.catalogItems_star__2}`} />
      <div className={`${styles.catalogItems_star} ${styles.catalogItems_star__3}`} />
      <div className={`${styles.catalogItems_star} ${styles.catalogItems_star__4}`} />
      <div className={`${styles.catalogItems_star} ${styles.catalogItems_star__5}`} />

      <div className="container">
        <div className={styles.catalogItems_content}>
          { mockData.map(() => <CatalogItem />) }
        </div>
      </div>
    </div>
  );
}
