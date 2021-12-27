/* eslint-disable max-len */
import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './madeBy.module.css';
import Title from '../../ui/Title';

const MadeBy = () => (
  <div className={styles.madeBy}>
    <div className="container">
      <div className={styles.madeByBody}>
        <div className={styles.madeByStar} />
        <Title cn={styles.madeByHeading} text="НеМерч: от студентов студентам" sqColor="green" />
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
          <div className={styles.madeByPhoto} />
          <div className={styles.madeByPhoto} />
          <div className={styles.madeByPhoto} />
          <div className={styles.madeByPhoto} />
          <div className={styles.madeByPhoto} />
          <div className={styles.madeByPhoto} />
          <div className={styles.madeByPhoto} />
        </div>
        <div className={styles.madeByDescription}>
          {/* <h3 className={styles.madeByMinorLabel}>О создателях сайта</h3> */}
          <p className={styles.madeByText}>
            Мы — команда студентов и выпускников Нетологии разных направлений от бэкенда до копирайтеров.
            <br />
            <br />
            Делимся тем, что нам дорого, — созданным с нуля интернет-магазином НеМерч.
            Мы работали над ним несколько месяцев: прожили каждый этап его разработки, продумали дизайн каждой вещи и запустили сайт. Так мы хотим поддержать и вдохновить всех, кто продолжает учится, начал карьеру в новой сфере или уже достиг успеха. Ребята, у вас всё получится!
          </p>
          {/* <a href="/" className={styles.madeByLink}>О создателях сайта</a> */}
        </div>
      </div>
    </div>
  </div>
);

export default MadeBy;
