/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-template */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './aboutMerch.module.css';
import Title from '../../ui/Title';

export default function AboutMerch({ popular }) {
  console.log('popular', popular);

  const partPopular = popular.slice(0, 3);

  return (
    <section className={styles.aboutMerch_section}>
      <div className="container">
        <div className={styles.aboutMerch_body}>
          <Title cn={styles.aboutMerch_header} text="мерч, который вдохновляет на перемены" sqColor="pink" />
          <p className={styles.aboutMerch_text}>Это особая поддержка для всех, кто не боится новых идей, развития и роста. Теперь, достигая успеха в профессии, вы можете ощутить нашу заботу. Выбранные вами вещи напомнят, какой путь вы уже прошли, чего добились и воодушевят двигаться дальше.</p>

          <div className={styles.aboutMerch_items}>

            {partPopular.map((item) => (
              <div className={styles.aboutMerch_item} key={item.item_id}>
                <div className={styles.aboutMerch_image}>
                  <Link to={`/catalog/${item.item_id}`}>
                    <img src={item.image} alt="photo product" />
                  </Link>
                </div>
                <Link className={styles.aboutMerch_link} to={`/catalog/${item.item_id}`}>{item.name}</Link>
              </div>
            ))}

          </div>

          <div className={styles.aboutMerch_star} />

          <Link className="main-page__btn btn" to="/catalog">В каталог</Link>
        </div>
      </div>
    </section>
  );
}
