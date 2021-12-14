/* eslint-disable react/prop-types */
/* eslint-disable prefer-template */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import styles from './aboutMerch.module.css';
import Title from '../../ui/Title';

export default function AboutMerch({ popular }) {
  return (
    <section className={styles.aboutMerch_section}>
      <div className="container">
        <div className={styles.aboutMerch_body}>
          <Title cn={styles.aboutMerch_header} text="информационный блок о мерче" sqColor="pink" />
          <p className={styles.aboutMerch_text}>Часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum,</p>
          <div className={styles.aboutMerch_items}>
            {popular.map((item) => (
              <div className={styles.aboutMerch_item} key={item.id}>
                <div className={styles.aboutMerch_image}>
                  <img src={item.image} alt={item.name} />
                </div>
                <a className={styles.aboutMerch_link} href="#0">{item.name}</a>
              </div>
            ))}
          </div>

          <div className={styles.aboutMerch_star} />

          <a className={styles.aboutMerch_button_link} href="#0">Перейти в каталог супер - мерча</a>
        </div>
      </div>
    </section>
  );
}
