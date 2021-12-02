/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import style from './accordion.module.css';
import arrowUp from '../../../assets/img/arrowUp.png';
import arrowDown from '../../../assets/img/arrowDown.png';

const Accordion = ({
  id, title, content, isOpen, onClick,
}) => (
  <div className={`${style.item} ${isOpen ? style.open : ''}`}>
    <div className={style.title} onClick={() => onClick(id)}>
      {title}
      <div className={style.arrow}>
        <img className={style.img} src={isOpen ? arrowUp : arrowDown} alt="arrow" />
      </div>
    </div>
    <div className={style.content}>
      <p>{content}</p>
      <Link to="/">Читать больше</Link>
    </div>
  </div>
);

export default Accordion;
