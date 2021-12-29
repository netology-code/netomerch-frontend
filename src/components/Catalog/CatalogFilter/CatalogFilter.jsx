/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './catalogFilter.module.css';
import arrow from '../../../assets/img/filter_arrow.png';
import arrowDown from '../../../assets/img/filter_arrow_down.png';

const CatalogFilter = ({
  categories, specialization, sizes, passParams,
}) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [isPopular, setPopular] = useState(true);
  const [filterCategories, setFilterCategories] = useState(searchParser('category'));
  const [filterSpecialization, setFilterSpecialization] = useState(searchParser('specialization'));
  const [filterSizes, setFilterSizes] = useState([]);
  const [priceRange, setPriceRange] = useState({ from: '', to: '' });
  const [priceSort, setPriceSort] = useState({ up: false, down: false });
  const [isOpenDopPanel, setOpenDopPanel] = useState({ price: false, size: false });
  const [errorPrice, setErrorPrice] = useState(false);

  function searchParser(unit) {
    const filter = [];
    if (location.search !== '') {
      if (searchParams.has(unit)) {
        filter.push(searchParams.get(unit));
      }
    }
    return filter;
  }

  useEffect(() => {
    setFilterCategories(searchParser('category'));
    setFilterSpecialization(searchParser('specialization'));
  }, [location]);

  useEffect(() => {
    passParams({
      isPopular, filterCategories, filterSpecialization, filterSizes, priceRange, priceSort,
    });
  }, [isPopular, filterCategories, filterSpecialization, filterSizes, priceRange, priceSort]);

  const specializationConst = {
    Аналитика: 'Я Аналитик',
    Бизнес: 'Я Менеджер',
    Дизайн: 'Я Дизайнер',
    Маркетинг: 'Я Маркетолог',
    Программирование: 'Я Программист',
  };

  const toggleParams = (param, affiliation) => {
    switch (affiliation) {
      case filterCategories:
        settingsParams(param, filterCategories, setFilterCategories);
        break;
      case filterSizes:
        settingsParams(param, filterSizes, setFilterSizes);
        break;
      case filterSpecialization:
        settingsParams(param, filterSpecialization, setFilterSpecialization);
        break;
      default:
        console.log('ops');
    }
  };

  function settingsParams(param, affiliation, setAffiliation) {
    if (affiliation.includes(param)) {
      setAffiliation((prev) => ([...prev.filter((c) => c !== param)]));
    } else {
      setAffiliation((prev) => ([...prev, param]));
    }
  }

  const toggleDopPanel = (param) => {
    setOpenDopPanel((prev) => ({ ...prev, [param]: !isOpenDopPanel[param] }));
  };

  const toggleSort = (param) => {
    if (param === 'up') {
      setPriceSort({ up: !priceSort.up, down: false });
    } else {
      setPriceSort({ down: !priceSort.down, up: false });
    }
  };

  const handleChangePrice = (e) => {
    const { name, value } = e.target;
    const regCount = /^\d{0,9}$/;
    if (!regCount.test(value)) return;
    if (Number(priceRange.from) > Number(priceRange.to)) {
      setErrorPrice(true);
    } else {
      setErrorPrice(false);
    }

    setPriceRange((prev) => ({ ...prev, [name]: value }));
  };

  const reset = () => {
    setPopular(true);
    setFilterCategories([]);
    setFilterSizes([]);
    setFilterSpecialization([]);
    setPriceRange({ from: '', to: '' });
    setPriceSort({ up: false, down: false });
  };

  const filterCheck = () => filterCategories.length !== 0 || filterSpecialization.length !== 0 || filterSizes.length !== 0 || priceSort.up || priceSort.down;

  return (
    <section className={styles.filter}>

      <div className={styles.topPanel}>
        <ul className={styles.specialization}>
          {specialization.map((special) => (
            <li
              key={special.id}
              className={filterSpecialization.includes(special.name) ? styles.pressSpec : ''}
              onClick={() => toggleParams(special.name, filterSpecialization)}
            >
              {specializationConst[special.name]}
            </li>
          ))}
        </ul>
        <div className={styles.filterName}>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              className={styles.customCheckbox}
              id="popular"
              name="isPopular"
              checked={isPopular}
              onChange={() => setPopular(!isPopular)}
            />
            <label htmlFor="popular">{filterCheck() && isPopular ? 'По популярности' : 'Сначала популярные'}</label>
          </div>
          <div className={styles.params} onClick={() => toggleDopPanel('price')}>
            Цена
            <img src={isOpenDopPanel.price ? arrowDown : arrow} alt="arrow" />
          </div>
          <div className={styles.params} onClick={() => toggleDopPanel('size')}>
            Размер
            <img src={isOpenDopPanel.size ? arrowDown : arrow} alt="arrow" />
          </div>
        </div>
      </div>

      <div className={styles.bottomPanel}>
        <ul className={styles.categories}>
          {categories.map((category) => (
            <li
              key={category.id}
              className={filterCategories.includes(category.name) ? styles.pressCategory : ''}
              onClick={() => toggleParams(category.name, filterCategories)}
            >
              {category.name}
            </li>
          ))}
          <li
            style={filterCheck() ? {} : { display: 'none' }}
            className={styles.dump}
            title="Сбросить фильтр"
            onClick={reset}
          />
        </ul>
        <div className={styles.filterField}>

          <div className={`${styles.dopPanel} ${isOpenDopPanel.price || isOpenDopPanel.size ? styles.open : ''}`}>
            <ul className={styles.price} style={isOpenDopPanel.price ? {} : { display: 'none' }}>
              <li style={priceSort.up ? { color: '#5500FF' } : {}} onClick={() => toggleSort('up')}>
                По возрастанию 🠕
              </li>
              <li style={priceSort.down ? { color: '#5500FF' } : {}} onClick={() => toggleSort('down')}>
                По убыванию 🠗
              </li>
            </ul>
            <ul className={styles.size} style={isOpenDopPanel.size ? {} : { display: 'none' }}>
              {sizes.map((size) => (
                <li
                  key={size.id}
                  className={filterSizes.includes(size.name) ? styles.press : ''}
                  onClick={() => toggleParams(size.name, filterSizes)}
                >
                  {size.name}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.filterPrice}>
            По цене
            <label htmlFor="from">от</label>
            <input
              id="from"
              name="from"
              value={priceRange.from}
              onChange={handleChangePrice}
              style={errorPrice ? { border: '2px solid red' } : {}}
            />
            <label htmlFor="to">до</label>
            <input
              id="to"
              name="to"
              value={priceRange.to}
              onChange={handleChangePrice}
              style={errorPrice ? { border: '2px solid red' } : {}}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogFilter;
