import React from 'react';
import styles from './mainPage.module.css';
import MadeBy from './MadeBy/MadeBy';

const MainPage = () => (
  <div className={styles.mainPage}>
    <MadeBy />
  </div>
);

export default MainPage;
