import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import logo from '../../assets/svg/logo_netology_full.svg';

const Header = () => (
  <header className={styles.header}>
    <div className="max-container">
      <div className={styles.headerBody}>
        <a href="/" className={styles.headerLogo}>
          <img src={logo} alt="Logo Netologia" />
        </a>
        <nav className={styles.headerMenu}>
          <ul className={styles.headerMenuList}>
            <li>
              <Link to="/catalog">Каталог</Link>
            </li>
            <li>
              <Link to="/">О Нетологии</Link>
            </li>
            <li>
              <Link to="/support">FAQ</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.headerIcons}>
          {/* <div className={styles.headerSearch} /> */}
          <Link to="/">
            <div className={styles.headerHelp} />
          </Link>
          <Link to="/cart">
            <div className={styles.headerCart} />
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
