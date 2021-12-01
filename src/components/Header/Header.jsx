import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerLogo} />
    <nav className={styles.headerLinks}>
      <ul className={styles.headersLinksList}>
        <li>
          <Link to="/">Каталог</Link>
        </li>
        <li>
          <Link to="/examples">О Нетологии</Link>
        </li>
        <li>
          <Link to="/examples">FAQ</Link>
        </li>
      </ul>
    </nav>
    <div className={styles.headerIcons}>
      <div className={styles.headerSearch} />
      <div className={styles.headerHelp} />
      <div className={styles.headerCart} />
    </div>
  </header>
);

export default Header;
