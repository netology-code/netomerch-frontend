import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navBar.module.css';

const NavBar = () => (
  <nav className={styles.navBar}>
    <ul className={styles.list}>
      <li>
        <Link to="/">Главная</Link>
      </li>
      <li>
        <Link to="/examples">Тренировочные карточки</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
