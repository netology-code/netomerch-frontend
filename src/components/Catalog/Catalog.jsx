import React from 'react';
import CatalogBanner from './CatalogBanner/CatalogBanner';
import CatalogItems from './CatalogItems/CatalogItems';
import styles from './catalog.module.css';

const Catalog = () => (
  <div className={styles.catalog}>
    <CatalogBanner />
    {/* <CatalogFilter /> */}
    <CatalogItems />
  </div>
);

export default Catalog;
