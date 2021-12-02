/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import styles from './aboutMerch.module.css';
import img2 from './img_content_merch/content_merch_2.jpg';
import img3 from './img_content_merch/content_merch_3.jpg';
import img4 from './img_content_merch/content_merch_4.jpg';

function AboutMerch() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.square} />
        <h2 className={styles.header}>информационный блок о мерче</h2>
        <p className={styles.paragraph}>Часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum,</p>
        <div className={styles.content}>
          <div>
            <img className={styles.image} src={img2} alt="толстовка" />
            <a className={styles.link} href="#0">наименование позиции 1</a>
          </div>
          <div>
            <img className={styles.image} src={img3} alt="футболка" />
            <a className={styles.link} href="#0">наименование позиции 2</a>
          </div>
          <div>
            <img className={styles.image} src={img4} alt="блокноты" />
            <a className={styles.link} href="#0">наименование позиции 3</a>
          </div>
        </div>
        <div className={styles.star} />
        <div className={styles.button}>
          <a className={styles.button_link} href="#0">Перейти в каталог супер - мерча</a>
        </div>
      </div>
    </section>
  );
}

export default AboutMerch;
