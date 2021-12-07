import React from 'react';
import styles from './catalogItems.module.css';
import img from '../../../assets/img/catalog_unit_content.png';

export default function CatalogItems() {
  return (
    <section className={styles.catalogItems_wrapper}>
      <div className={`${styles.catalogItems_star} ${styles.catalogItems_star__1}`} />
      <div className={`${styles.catalogItems_star} ${styles.catalogItems_star__2}`} />
      <div className={`${styles.catalogItems_star} ${styles.catalogItems_star__3}`} />
      <div className={`${styles.catalogItems_star} ${styles.catalogItems_star__4}`} />

      <div className={styles.catalogItems_content}>
        <div className={styles.catalogItems_item}>
          <div>
            <div className={styles.catalogItems_image}>
              <img src={img} alt="толстовка" />
            </div>

            <a className={styles.catalogItems_link} href="#0">Худи с принтом на правой руке</a>
          </div>

          <div className={styles.catalogItems_block_price}>
            <p className={styles.catalogItems_price}>2500 p.</p>
            <span className={styles.catalogItems_cart} />
          </div>
        </div>

        <div className={styles.catalogItems_item}>
          <div>
            <div className={styles.catalogItems_image}>
              <img src={img} alt="толстовка" />
            </div>

            <a className={styles.catalogItems_link} href="#0">Худи с принтом на правой груди и руке</a>
          </div>

          <div className={styles.catalogItems_block_price}>
            <p className={styles.catalogItems_price}>2500 p.</p>
            <span className={styles.catalogItems_cart} />
          </div>
        </div>
        <div className={styles.catalogItems_item}>
          <div>
            <div className={styles.catalogItems_image}>
              <img src={img} alt="толстовка" />
            </div>

            <a className={styles.catalogItems_link} href="#0">Худи с принтом на правой руке</a>
          </div>

          <div className={styles.catalogItems_block_price}>
            <p className={styles.catalogItems_price}>2500 p.</p>
            <span className={styles.catalogItems_cart} />
          </div>
        </div>
        <div className={styles.catalogItems_item}>
          <div>
            <div className={styles.catalogItems_image}>
              <img src={img} alt="толстовка" />
            </div>

            <a className={styles.catalogItems_link} href="#0">Худи с принтом на правой руке</a>
          </div>

          <div className={styles.catalogItems_block_price}>
            <p className={styles.catalogItems_price}>2500 p.</p>
            <span className={styles.catalogItems_cart} />
          </div>
        </div>
        <div className={styles.catalogItems_item}>
          <div>
            <div className={styles.catalogItems_image}>
              <img src={img} alt="толстовка" />
            </div>

            <a className={styles.catalogItems_link} href="#0">Худи с принтом на правой руке</a>
          </div>

          <div className={styles.catalogItems_block_price}>
            <p className={styles.catalogItems_price}>2500 p.</p>
            <span className={styles.catalogItems_cart} />
          </div>
        </div>

        <div className={styles.catalogItems_item}>
          <div>
            <div className={styles.catalogItems_image}>
              <img src={img} alt="толстовка" />
            </div>

            <a className={styles.catalogItems_link} href="#0">Худи с принтом на правой руке</a>
          </div>

          <div className={styles.catalogItems_block_price}>
            <p className={styles.catalogItems_price}>2500 p.</p>
            <span className={styles.catalogItems_cart} />
          </div>
        </div>
        <div className={styles.catalogItems_item}>
          <div>
            <div className={styles.catalogItems_image}>
              <img src={img} alt="толстовка" />
            </div>

            <a className={styles.catalogItems_link} href="#0">Худи с принтом на правой руке</a>
          </div>

          <div className={styles.catalogItems_block_price}>
            <p className={styles.catalogItems_price}>2500 p.</p>
            <span className={styles.catalogItems_cart} />
          </div>
        </div>
        <div className={styles.catalogItems_item}>
          <div>
            <div className={styles.catalogItems_image}>
              <img src={img} alt="толстовка" />
            </div>

            <a className={styles.catalogItems_link} href="#0">Худи с принтом на правой руке</a>
          </div>

          <div className={styles.catalogItems_block_price}>
            <p className={styles.catalogItems_price}>2500 p.</p>
            <span className={styles.catalogItems_cart} />
          </div>
        </div>
        <div className={styles.catalogItems_item}>
          <div>
            <div className={styles.catalogItems_image}>
              <img src={img} alt="толстовка" />
            </div>

            <a className={styles.catalogItems_link} href="#0">Худи с принтом на правой руке</a>
          </div>

          <div className={styles.catalogItems_block_price}>
            <p className={styles.catalogItems_price}>2500 p.</p>
            <span className={styles.catalogItems_cart} />
          </div>
        </div>
        <div className={styles.catalogItems_item}>
          <div>
            <div className={styles.catalogItems_image}>
              <img src={img} alt="толстовка" />
            </div>

            <a className={styles.catalogItems_link} href="#0">Худи с принтом на правой руке</a>
          </div>

          <div className={styles.catalogItems_block_price}>
            <p className={styles.catalogItems_price}>2500 p.</p>
            <span className={styles.catalogItems_cart} />
          </div>
        </div>
      </div>
    </section>
  );
}
