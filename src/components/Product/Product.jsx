import React from 'react';
import styles from './product.module.css';
import ProductReviews from './ProductReviews/ProductReviews';

import mockData from './mockDataProductReviews.json';
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

const Product = () => {
  const { reviews } = mockData;

  return (
    <div className={styles.product}>
      {/* <ProductTop /> */}
      <Card mockData={mockData} />
      <ProductReviews reviews={reviews} />
    </div>
  );
};

export default Product;
