/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styles from './catalogItems.module.css';
import CatalogItem from './CatalogItem/CatalogItem';

export default function CatalogItems(props) {
  const { catalog } = props;

  const [partCatalog, setPartCatalog] = useState([]);
  const [currentCount, setCurrentCount] = useState(0);
  const [fetching, setFetching] = useState(true);

  const handleClick = () => {
    let numOfProducts = 5;
    if (partCatalog.length === 0) {
      numOfProducts = 10;
    }

    if (partCatalog.length < catalog.length) {
      const arr = catalog.slice(currentCount, (currentCount + numOfProducts));
      setPartCatalog([...partCatalog, ...arr]);
      setCurrentCount(currentCount + numOfProducts);
      setFetching(false);
    }
  };

  useEffect(() => {
    if (fetching) {
      handleClick();
    }
  });

  const Button = () => (
    <button className={styles.catalogItems_button} type="button" onClick={handleClick}>
      <span>Посмотреть ещё</span>
    </button>
  );

  return (
    <div className={styles.catalogItems_wrapper}>
      <div className={`${styles.catalogItems_star} ${styles.catalogItems_star__1}`} />
      <div className={`${styles.catalogItems_star} ${styles.catalogItems_star__2}`} />
      <div className={`${styles.catalogItems_star} ${styles.catalogItems_star__3}`} />
      <div className={`${styles.catalogItems_star} ${styles.catalogItems_star__4}`} />
      <div className={`${styles.catalogItems_star} ${styles.catalogItems_star__5}`} />

      <div className="container">
        <div className={styles.catalogItems_content}>
          { partCatalog.map((item) => (
            <CatalogItem
              key={item.item_id}
              item_id={item.item_id}
              name={item.name}
              popular={item.popular}
              short_description={item.short_description}
              image={item.image}
              price={item.price}
              category={item.category}
              specialization={item.specialization}
              sizes={item.sizes}
            />
          ))}
        </div>
        {(partCatalog.length !== catalog.length) ? <Button /> : null}
      </div>
    </div>
  );
}
