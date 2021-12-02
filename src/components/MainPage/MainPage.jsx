import React from 'react';
import Answers from '../Answers/Answers';
import styles from './mainPage.module.css';

const MainPage = () => (
  <>
    <div className={styles.mainPage}>
      Тут ваш любимый сайт на ближайшие пару недель =)
    </div>
    <Answers />
  </>
);

export default MainPage;
