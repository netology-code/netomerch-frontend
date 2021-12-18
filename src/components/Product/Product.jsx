/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './product.module.css';
import ProductReviews from './ProductReviews/ProductReviews';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';

import mockData from './mockDataProductReviews.json';
import { fetchProduct } from '../../actions/actionCreators';

// import ProductTop from './ProductTop/ProductTop';
import Card from './Card';

/* Заглушка для фото ---------------------------------------------------------- */
import imgs from './Card/TempPhoto/imgs';

mockData.colors[0].images[0].image = imgs.white1;
mockData.colors[0].images[1].image = imgs.white2;
mockData.colors[0].images[2].image = imgs.white3;
mockData.colors[0].images[3].image = imgs.white4;

mockData.colors[1].images[0].image = imgs.black1;
mockData.colors[1].images[1].image = imgs.black2;
mockData.colors[1].images[2].image = imgs.black3;
mockData.colors[1].images[3].image = imgs.black4;

mockData.colors[2].images[0].image = imgs.peach1;
mockData.colors[2].images[1].image = imgs.peach2;
mockData.colors[2].images[2].image = imgs.peach3;
/* ---------------------------------------------------------------------------- */

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

  console.log('product', product);

  return (
    <div className={styles.product}>
      {/* <ProductTop /> */}
      <Card mockData={mockData} />
      <ProductReviews reviews={reviews} />
    </div>
  );
};

export default Product;
