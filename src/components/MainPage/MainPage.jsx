/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainTop from './MainTop';
import MainReviews from './MainReviews';
import Answers from '../Answers/Answers';
import MadeBy from './MadeBy/MadeBy';
import AboutMerch from './AboutMerch/AboutMerch';
import styles from './mainPage.module.css';
import './main-page.css';
import { fetchMainPage } from '../../actions/actionCreators';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';

const MainPage = () => {
  const {
    reviews, popular, loading, error,
  } = useSelector((state) => state.fetchMainPage);
  const dispatch = useDispatch();

  // console.log(reviews, popular, loading, error);

  useEffect(() => {
    dispatch(fetchMainPage());
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className={styles.mainPage}>
      <MainTop />
      <AboutMerch popular={popular} />
      <MainReviews reviews={reviews} />
      <MadeBy />
      <Answers />
    </div>
  );
};

export default MainPage;
