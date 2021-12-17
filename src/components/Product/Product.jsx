/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './product.module.css';
import ProductReviews from './ProductReviews/ProductReviews';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';

import mockData from './mockDataProductReviews.json';
import { fetchProduct } from '../../actions/actionCreators';

const Product = ({ match }) => {
  const { product, error, loading } = useSelector((state) => state.fetchProduct);
  const dispatch = useDispatch();
  const { reviews } = mockData;

  useEffect(() => {
    dispatch(fetchProduct(match.params.id));
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  console.log(product);

  return (
    <div className={styles.product}>
      <ProductReviews reviews={reviews} />
    </div>
  );
};

export default Product;
