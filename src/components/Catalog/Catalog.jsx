import React from 'react';
import CatalogBanner from './CatalogBanner/CatalogBanner';
import CatalogItems from './CatalogItems/CatalogItems';
import styles from './catalog.module.css';

import mockData from './mockDataCatalog.json';

const Catalog = () => {
  const { items } = mockData;

  return (
    <div className={styles.catalog}>
      <CatalogBanner />
      {/* <CatalogFilter /> */}
      <CatalogItems items={items} />
    </div>
  );
};

export default Catalog;
