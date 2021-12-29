import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styles from './header.module.css';
import logo from '../../assets/svg/logo_nemerch_main.svg';
import Feedback from '../Popups/Feedback/Feedback';

const Header = () => {
  const { products } = useSelector((state) => state.productInCart);
  const location = useLocation();

  if (location.pathname === '/notfaund') {
    return null;
  }

  const [isFeedback, setIsFeedback] = useState(false);

  const showFeedback = () => {
    setIsFeedback(true);
  };

  const closeFeedback = () => {
    setIsFeedback(false);
  };

  return (
    <header className={styles.header}>
      <div className="max-container">
        <div className={styles.headerBody}>
          <Link to="/" className={styles.headerLogo}>
            <img src={logo} alt="Logo Netologia" />
          </Link>
          <nav className={styles.headerMenu}>
            <ul className={styles.headerMenuList}>
              <li>
                <Link to="/catalog">Каталог</Link>
              </li>
              <li>
                <Link to="/support">Центр поддержки</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.headerIcons}>
            {/* <div className={styles.headerSearch} /> */}
            <button type="button" onClick={showFeedback}>
              <div className={styles.headerHelp} />
            </button>
            <Link to="/cart">
              <div className={styles.headerCart}>
                <div style={products.length === 0 ? { display: 'none' } : {}} className={styles.cartCount}>{products.length}</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {isFeedback && <Feedback closeFeedback={closeFeedback} />}
    </header>
  );
};

export default Header;
