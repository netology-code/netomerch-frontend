/* eslint-disable object-curly-newline */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styles from './catalogItems.module.css';
import CatalogItem from './CatalogItem/CatalogItem';
import Title from '../../ui/Title';

export default function CatalogItems({ catalog }) {
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

  useEffect(() => {
    setPartCatalog([]);
    setCurrentCount(0);
    setFetching(true);
  }, [catalog]);

  const Button = () => (
    <button className={styles.catalogItems_button} type="button" onClick={handleClick}>
      <span>Посмотреть ещё</span>
    </button>
  );

  const showPopapCart = (id) => {
    setPartCatalog(partCatalog.map((cont) => {
      if (id === cont.item_id) {
        cont.isOpen = !cont.isOpen;
      } else {
        cont.isOpen = false;
      }
      return cont;
    }));
  };

  const arrStar = [
    { id: 1, left: '52px', top: '9px', backgroundColor: '#49D2A4' },
    { id: 2, left: '1105px', top: '432px', backgroundColor: '#006AFF' },
    { id: 3, left: '1858px', top: '736px', backgroundColor: '#006AFF' },
    { id: 4, left: '648px', top: '947px', backgroundColor: '#49D2A4' },
    { id: 5, left: '172px', top: '1025px', backgroundColor: '#006AFF' },
    { id: 6, left: '52px', top: '1448px', backgroundColor: '#49D2A4' },
    { id: 7, left: '1105px', top: '1752px', backgroundColor: '#006AFF' },
    { id: 8, left: '1858px', top: '1963px', backgroundColor: '#006AFF' },
    { id: 9, left: '648px', top: '2041px', backgroundColor: '#49D2A4' },
    { id: 10, left: '172px', top: '2464px', backgroundColor: '#006AFF' },
    { id: 11, left: '52px', top: '2887px', backgroundColor: '#49D2A4' },
    { id: 12, left: '1105px', top: '3191px', backgroundColor: '#006AFF' },
    { id: 13, left: '1858px', top: '3402px', backgroundColor: '#006AFF' },
    { id: 14, left: '648px', top: '3480px', backgroundColor: '#49D2A4' },
    { id: 15, left: '172px', top: '3903px', backgroundColor: '#006AFF' },
    { id: 16, left: '52px', top: '4207px', backgroundColor: '#49D2A4' },
    { id: 17, left: '1105px', top: '4418px', backgroundColor: '#006AFF' },
    { id: 18, left: '1858px', top: '4496px', backgroundColor: '#006AFF' },
    { id: 19, left: '648px', top: '4919px', backgroundColor: '#49D2A4' },
    { id: 20, left: '172px', top: '5223px', backgroundColor: '#006AFF' },
  ];

  return (
    <div className={styles.catalogItems_wrapper}>
      { arrStar.map((item) => (
        <div
          key={item.id}
          className={`${styles.catalogItems_star}`}
          style={{
            left: item.left,
            top: item.top,
            backgroundColor: item.backgroundColor,
          }}
        />
      ))}

      <div className="container">
        <div className={styles.catalogItems_content}>
          { partCatalog.map((item) => (
            <CatalogItem
              key={item.item_id}
              id={item.item_id}
              name={item.name}
              popular={item.popular}
              short_description={item.short_description}
              price={item.price}
              category={item.category}
              specialization={item.specialization}
              sizes={item.size}
              image={item.image}
              colors={item.colors}
              isOpen={item.isOpen}
              onClick={showPopapCart}
              lengthPartCatalog={partCatalog.length}
            />
          ))}
        </div>
        { (partCatalog.length !== catalog.length) ? <Button /> : null }
        { (catalog.length === 0) && <Title cn={styles.catalogItems_header} text="по данному фильтру товаров не найдено" sqColor="pink" /> }
      </div>
    </div>
  );
}
