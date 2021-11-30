import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.footerLogo} />
    <div className={styles.footerLinks}>
      <p className={styles.footerLinksLabel}>Информация</p>
      <ul className={styles.footerInfo}>
        <li>
          <Link to="/">Как заказать</Link>
        </li>
        <li>
          <Link to="/">Доставка и оплата</Link>
        </li>
        <li>
          <Link to="/">Приемка и возврат</Link>
        </li>
        <li>
          <Link to="/">Пользовательское соглашение</Link>
        </li>
        <li>
          <Link to="/">Конфиденциальность</Link>
        </li>
        <li>
          <Link to="/">FAQ</Link>
        </li>
      </ul>
    </div>
    <div className={styles.footerLinks}>
      <p className={styles.footerLinksLabel}>Netology Grow Merch</p>
      <ul className={styles.footerMerch}>
        <li>
          <Link to="/">О нас</Link>
        </li>
        <li>
          <Link to="/">Каталог</Link>
        </li>
        <li>
          <Link to="/">Отзывы</Link>
        </li>
        <div className={styles.footerSocial}>
          <div className={styles.footerFacebook} />
          <div className={styles.footerTelegram} />
          <div className={styles.footerYoutube} />
          <div className={styles.footerInstagram} />
          <div className={styles.footerVkontakte} />
        </div>
      </ul>
    </div>
    <div className={styles.footerLinks}>
      <p className={styles.footerLinksLabel}>Каталог по товарам</p>
      <ul className={styles.footerSortedByItems}>
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
          <Link to="/">Канцтовары</Link>
        </li>
        <li>
          <Link to="/">Стикеры</Link>
        </li>
        <li>
          <Link to="/">Стартовый набор</Link>
        </li>
      </ul>
    </div>
    <div className={styles.footerLinks}>
      <p className={styles.footerLinksLabel}>Каталог по направлениям</p>
      <ul className={styles.footerSortedByThemes}>
        <li>
          <Link to="/">Маркетинг</Link>
        </li>
        <li>
          <Link to="/">Бизнес и управление</Link>
        </li>
        <li>
          <Link to="/">Дизайн</Link>
        </li>
        <li>
          <Link to="/">Программирование</Link>
        </li>
      </ul>
    </div>
    <div className={styles.footerLinks}>
      <div className={styles.footerInline}>
        <p className={styles.footerLinksLabel}>Перейти в корзину</p>
        <div className={styles.footerCart} />
      </div>
      <ul className={styles.footerAdditional}>
        <li>
          <Link to="/">Центр поддержки</Link>
        </li>
        <li>
          <Link to="/">8 800 123-45-67 для вас 24/7</Link>
        </li>
        <li>
          <Link to="/">Отправить сообщение</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;
