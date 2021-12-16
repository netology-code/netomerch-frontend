import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatalogBanner from './CatalogBanner/CatalogBanner';
import CatalogItems from './CatalogItems/CatalogItems';
import styles from './catalog.module.css';
import { fetchCatalog } from '../../actions/actionCreators';

const Catalog = () => {
  const {
    catalog, categories, specialization, error, loading,
  } = useSelector((state) => state.fetchCatalog);
  const dispatch = useDispatch();

  console.log(catalog, categories, specialization, error, loading);

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
