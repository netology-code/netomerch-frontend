import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './footer.module.css';
import logo from '../../assets/svg/logo_nemerch_main_light.svg';

const Footer = () => {
  const location = useLocation();

  if (location.pathname === '/notfaund') {
    return null;
  }

  return (
    <footer className={styles.footer}>
      <div className="max-container">
        <div className={styles.footerBody}>
          <div className={styles.footerColumn1}>
            <Link to="/" className={styles.footerLogo}>
              <img src={logo} alt="Logo Netologia" />
            </Link>
          </div>
          <div className={styles.footerColumn2}>
            <div className={styles.footerMenu}>
              <div className={`${styles.footerMenuColumn} ${styles.footerInfo}`}>
                <div className={styles.footerMenuLabel}>Информация</div>
                <ul className={`${styles.footerLinks} ${styles.footerLinksInfo}`}>
                  <li>
                    <Link to="/">Пользовательское соглашение</Link>
                  </li>
                  <li>
                    <Link to="/">Конфиденциальность</Link>
                  </li>
                  <li>
                    <Link to="/">Центр поддержки</Link>
                  </li>
                </ul>
                <div className={styles.footerSocial}>
                  <div className={styles.footerVkontakte} />
                  <div className={styles.footerFacebook} />
                  <div className={styles.footerYoutube} />
                </div>
              </div>
              <div className={`${styles.footerMenuColumn} ${styles.footerProducts}`}>
                <div className={styles.footerMenuLabel}>Каталог по товарам</div>
                <ul className={`${styles.footerLinks} ${styles.footerLinksProducts}`}>
                  <li>
                    <Link to="/">Толстовки</Link>
                  </li>
                  <li>
                    <Link to="/">Худи</Link>
                  </li>
                  <li>
                    <Link to="/">Футболки</Link>
                  </li>
                  <li>
                    <Link to="/">Наборы</Link>
                  </li>
                </ul>
              </div>
              <div className={`${styles.footerMenuColumn} ${styles.footerCategories}`}>
                <div className={styles.footerMenuLabel}>Каталог по направлениям</div>
                <ul className={`${styles.footerLinks} ${styles.footerLinksCategories}`}>
                  <li>
                    <Link to="/">Программирование</Link>
                  </li>
                  <li>
                    <Link to="/">Дизайн</Link>
                  </li>
                  <li>
                    <Link to="/">Маркетинг</Link>
                  </li>
                  <li>
                    <Link to="/">Бизнес и управление</Link>
                  </li>
                  <li>
                    <Link to="/">Аналитика</Link>
                  </li>
                </ul>
              </div>
              <div className={`${styles.footerMenuColumn} ${styles.footerAdditional}`}>
                <div className={styles.footerInline}>
                  <Link to="/cart">
                    <div className={styles.footerMenuLabel}>Перейти в корзину</div>
                  </Link>
                  <Link to="/cart">
                    <div className={styles.footerCart} />
                  </Link>
                </div>
                <div className={styles.footerAdditional}>
                  <div className={styles.footerMenuLabel}>Телефон центра поддержки</div>
                  <ul className={`${styles.footerLinks} ${styles.footerLinksAdditional}`}>
                    <li>
                      <Link to="/">8 800 123-45-67 для вас 24/7</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
