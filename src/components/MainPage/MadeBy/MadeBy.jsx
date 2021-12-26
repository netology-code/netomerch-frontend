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
        <Title cn={styles.madeByHeading} text='Команда "НеМерч"' sqColor="green" />
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
            Этот интернет-магазин создали девять профессиональных команд — студенты и выпускники Нетологии. Мы и опытные менторы проекта Netology Grow сделали его с нуля: от деталей дизайна каждой вещи до финального запуска.
            Так мы хотим поддержать и вдохновить всех, кто ещё учится, начал карьеру в новой сфере или уже достиг успеха. Ребята, мы с вами! Действуйте, и всё получится!
          </p>
          {/* <a href="/" className={styles.madeByLink}>О создателях сайта</a> */}
        </div>
      </div>
    </div>
  </div>
);

export default MadeBy;
