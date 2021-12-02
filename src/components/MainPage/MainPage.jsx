import React from 'react';
import MainTop from './MainTop';
import styles from './mainPage.module.css';
import Reviews from './Reviews';

const MainPage = () => (
  <div className={styles.mainPage}>
    <MainTop />
    <Reviews />
  </div>
);

export default MainPage;
