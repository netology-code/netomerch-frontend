import React from 'react';
import styles from './product.module.css';
import ProductReviews from './ProductReviews/ProductReviews';

import mockData from './mockDataProductReviews.json';
import ProductTop from './ProductTop/ProductTop';
import Card from './Card';

const Product = () => {
  const { reviews } = mockData;

  return (
    <div className={styles.product}>
      <ProductTop />
      <Card />
      <ProductReviews reviews={reviews} />
    </div>
  );
};

export default Product;
