import React from 'react';
import MainTop from './MainTop';
import Reviews from './Reviews';
import Answers from '../Answers/Answers';
import MadeBy from './MadeBy/MadeBy';
import AboutMerch from './AboutMerch/AboutMerch';
import styles from './mainPage.module.css';

const MainPage = () => (
  <div className={styles.mainPage}>
    <MainTop />
    <AboutMerch />
    <Reviews />
    <MadeBy />
    <Answers />
  </div>
);

export default MainPage;
