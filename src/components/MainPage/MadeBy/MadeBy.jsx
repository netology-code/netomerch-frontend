import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './madeBy.module.css';

const MadeBy = () => (
  <div className={styles.madeBy}>
    <div className="container">
      <div className={styles.madeByLabel}>
        <div className={styles.madeBySquare} />
        <h2 className={styles.madeByHeading}>информационный блок о создателях сайта</h2>
        <div className={styles.madeByStar} />
      </div>
      <div className={styles.madeByPhotos}>
        <div className={styles.madeByPhoto} />
        <div className={styles.madeByPhoto} />
        <div className={styles.madeByPhoto} />
        <div className={styles.madeByPhoto} />
        <div className={styles.madeByPhoto} />
        <div className={styles.madeByPhoto} />
        <div className={styles.madeByPhoto} />
        <div className={styles.madeByPhoto} />
        <div className={styles.madeByPhoto} />
        <div className={styles.madeByPhoto} />
        <div className={styles.madeByPhoto} />
        <div className={styles.madeByPhoto} />
        <div className={styles.madeByPhoto} />
        <div className={styles.madeByPhoto} />
        <div className={styles.madeByPhoto} />
        <div className={styles.madeByPhoto} />
      </div>
      <div className={styles.madeByDescription}>
        <h3 className={styles.madeByMinorLabel}>О создателях сайта</h3>
        <p className={styles.madeByText}>О создателях сайта</p>
        <a href="/" className={styles.madeByLink}>О создателях сайта</a>
      </div>
    </div>
  </div>
);

export default MadeBy;
