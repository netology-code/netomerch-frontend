/* eslint-disable react/jsx-indent */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import styles from './catalogItems.module.css';
import CatalogItem from './CatalogItem/CatalogItem';

const mockData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function CatalogItems() {
  const content = mockData;
  const [partContent, setPartContent] = useState([]);
  let currentCount = 0;

  const [fetching, setFetching] = useState(true);
  const totalCount = content.length;

  useEffect(() => {
    if (fetching) {
      if (partContent.length < content.length) {
        const arr = content.slice(currentCount, 10);
        setPartContent([...partContent, ...arr]);
        currentCount += 10;
        setFetching(false);
      }
    }
  }, [fetching]);

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && partContent.length < totalCount) {
      setFetching(true);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div className={styles.catalogItems_wrapper}>
      <div className={`${styles.catalogItems_star} ${styles.catalogItems_star__1}`} />
      <div className={`${styles.catalogItems_star} ${styles.catalogItems_star__2}`} />
      <div className={`${styles.catalogItems_star} ${styles.catalogItems_star__3}`} />
      <div className={`${styles.catalogItems_star} ${styles.catalogItems_star__4}`} />
      <div className={`${styles.catalogItems_star} ${styles.catalogItems_star__5}`} />

      <div className="container">
        <div className={styles.catalogItems_content}>
          { partContent.map(() => <CatalogItem />) }
        </div>
      </div>
    </div>
  );
}
