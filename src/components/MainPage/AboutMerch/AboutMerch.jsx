/* eslint-disable prefer-template */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import styles from './aboutMerch.module.css';
import img2 from './img/content_merch_2.jpg';
import img3 from './img/content_merch_3.jpg';
import img4 from './img/content_merch_4.jpg';

export default function AboutMerch() {
  return (
    <section className={styles.aboutMerch_section}>
      <div className={styles.aboutMerch_container}>
        <div className={styles.aboutMerch_square} />

        <h2 className={styles.aboutMerch_header}>информационный блок о мерче</h2>
        <p className={styles.aboutMerch_text}>Часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum,</p>

        <div className={styles.aboutMerch_slider}>
          <div className={styles.aboutMerch_item}>
            <div className={styles.aboutMerch_image}>
              <img src={img2} alt="толстовка" />
            </div>
            <a className={styles.aboutMerch_link} href="#0">наименование позиции 1</a>
          </div>

          <div className={styles.aboutMerch_item}>
            <div className={styles.aboutMerch_image}>
              <img src={img3} alt="футболка" />
            </div>
            <a className={styles.aboutMerch_link} href="#0">наименование позиции 1</a>
          </div>

          <div className={styles.aboutMerch_item}>
            <div className={styles.aboutMerch_image}>
              <img src={img4} alt="блокноты" />
            </div>
            <a className={styles.aboutMerch_link} href="#0">наименование позиции 1</a>
          </div>
        </div>

        <div className={styles.aboutMerch_star} />

        <a className={styles.aboutMerch_button_link} href="#0">Перейти в каталог супер - мерча</a>
      </div>
    </section>
  );
}