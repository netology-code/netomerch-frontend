import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CatalogBanner from './CatalogBanner/CatalogBanner';
import CatalogItems from './CatalogItems/CatalogItems';
import styles from './catalog.module.css';
import { fetchCatalog } from '../../actions/actionCreators';

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatalog());
  }, []);
  return (
    <div className={styles.catalog}>
      <CatalogBanner />
      {/* <CatalogFilter /> */}
      <CatalogItems />
    </div>
  );
};

export default Catalog;
