/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatalogBanner from './CatalogBanner/CatalogBanner';
import CatalogItems from './CatalogItems/CatalogItems';
import styles from './catalog.module.css';
import { fetchCatalog } from '../../actions/actionCreators';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import CatalogFilter from './CatalogFilter/CatalogFilter';
import {
  filterByCategory, filterByPrice, filterBySize, filterBySpecialization, sortByPopularity, sortByPrice,
} from '../../utils/filterHelper';
// import mockData from './mockDataCatalog.json';

const Catalog = () => {
  const {
    catalog, categories, specialization, sizes, error, loading,
  } = useSelector((state) => state.fetchCatalog);
  const dispatch = useDispatch();
  // const { catalog } = mockData;

  const [filterParams, setFilterParams] = useState({});

  let filteredCatalog = [];

  useEffect(() => {
    dispatch(fetchCatalog());
  }, []);

  useEffect(() => {}, [filterParams]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  const changeCatalog = (params) => {
    setFilterParams(params);
  };

  if (Object.keys(filterParams).length !== 0) {
    if (filterParams.filterCategories.length === 0 && filterParams.filterSpecialization.length === 0) {
      filteredCatalog = [...catalog];
    }

    if (filterParams.filterSpecialization.length !== 0) {
      filteredCatalog.push(...filterBySpecialization(filterParams.filterSpecialization, catalog));
    }

    if (filterParams.filterCategories.length !== 0 && filterParams.filterSpecialization.length === 0) {
      filteredCatalog.push(...filterByCategory(filterParams.filterCategories, catalog));
    }

    if (filterParams.filterCategories.length !== 0 && filterParams.filterSpecialization.length !== 0) {
      filteredCatalog = filterByCategory(filterParams.filterCategories, filteredCatalog);
    }

    if (filterParams.filterSizes.length !== 0) {
      filteredCatalog = filterBySize(filterParams.filterSizes, filteredCatalog);
    }

    if (Number(filterParams.priceRange.from) < Number(filterParams.priceRange.to)) {
      filteredCatalog = filterByPrice(filterParams.priceRange.from, filterParams.priceRange.to, filteredCatalog);
    }

    if (filterParams.isPopular) {
      if (filterParams.priceSort.up) {
        filteredCatalog = sortByPopularity(filteredCatalog, 'up');
      } else if (filterParams.priceSort.down) {
        filteredCatalog = sortByPopularity(filteredCatalog, 'down');
      } else {
        filteredCatalog = sortByPopularity(filteredCatalog);
      }
    } else {
      if (filterParams.priceSort.up) {
        filteredCatalog = sortByPrice('up', filteredCatalog);
      }

      if (filterParams.priceSort.down) {
        filteredCatalog = sortByPrice('down', filteredCatalog);
      }
    }
  }

  const finalFilteredCatalog = new Set(filteredCatalog);
  // console.log('filterParams', filterParams);

  // console.log('filteredCatalog', finalFilteredCatalog);

  return (
    <div className={styles.catalog}>
      <CatalogBanner />
      <CatalogFilter
        categories={categories}
        specialization={specialization}
        sizes={sizes}
        passParams={changeCatalog}
      />
      <CatalogItems catalog={Array.from(finalFilteredCatalog)} />
    </div>
  );
};

export default Catalog;
