/* eslint-disable no-const-assign */
/* eslint-disable no-plusplus */
import React from 'react';
import styles from './catalogItems.module.css';
import img from '../../../assets/img/catalog_unit_content.png';

function CreateItems() {
  const classNameContent = `.${styles.catalogItems_content}`;
  const content = document.querySelector(classNameContent);

  const classNameItem = `.${styles.catalogItems_item}`;
  const items = content.querySelectorAll(classNameItem);

  for (let i = items.length; i < 10; i++) {
    content.innerHTML += `
      <div class=${styles.catalogItems_item}>
        <div>
          <div class=${styles.catalogItems_image}>
            <img src=${img} alt="толстовка" />
          </div>

          <a class=${styles.catalogItems_link} href="#0">Худи с принтом на правой руке</a>
        </div>

        <div class=${styles.catalogItems_block_price}>
          <p class=${styles.catalogItems_price}>2500 p.</p>
          <span class=${styles.catalogItems_cart} />
        </div>
      </div>`;
  }
}

setTimeout(CreateItems, 1000);

export default function CatalogItems() {
  return (
    <section className={styles.catalogItems_wrapper}>
      <div className={`${styles.catalogItems_star} ${styles.catalogItems_star__1}`} />
      <div className={`${styles.catalogItems_star} ${styles.catalogItems_star__2}`} />
      <div className={`${styles.catalogItems_star} ${styles.catalogItems_star__3}`} />
      <div className={`${styles.catalogItems_star} ${styles.catalogItems_star__4}`} />

      <div className={styles.catalogItems_content} />
    </section>
  );
}
