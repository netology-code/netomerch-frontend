import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './catalogBanner.module.css';

const CatalogBanner = () => (
  <div className={styles.banner}>
    <div className="container">
      <div className={styles.bannerBody}>
        <div className={styles.bannerText}>
          У нас появились новые стартовые наборы
        </div>
        <div className={styles.bannerImage} />
      </div>
    </div>
  </div>
);

export default CatalogBanner;
