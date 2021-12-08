/* eslint-disable max-len */
import React from 'react';
import styles2 from './catalogItems.module.css';
import styles from './CatalogItem/catalogItem.module.css';
import CatalogItem from './CatalogItem/CatalogItem';

const mockData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function CatalogItems() {
  return (
    <div className={styles2.catalogItems_wrapper}>
      <div className={`${styles2.catalogItems_star} ${styles.catalogItems_star__1}`} />
      <div className={`${styles2.catalogItems_star} ${styles.catalogItems_star__2}`} />
      <div className={`${styles2.catalogItems_star} ${styles.catalogItems_star__3}`} />
      <div className={`${styles2.catalogItems_star} ${styles.catalogItems_star__4}`} />
      <div className={`${styles2.catalogItems_star} ${styles.catalogItems_star__5}`} />

      <div className="container">
        <div className={styles2.catalogItems_content}>
          { mockData.map(() => <CatalogItem />) }
        </div>
      </div>
    </div>
  );
}
