/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import './slider.css';

export default function Slider({
  items, // Массив элементов.
  startPos = 0, // С какой позиции показывать элементы.
  isPoints = true, // Показывать или скрывать точки.
  isRound = false, // Листается слайдер по кругу или нет.
  autoScroll = 0, // Автоматическое листание. 0 - отключено, для включения нужно указать задержку в ms, например, 5000.
  children,
}) {
  const [pos, setPos] = useState(startPos); // Начальная позиция в массиве элементов, с которой отображаются видимые элементы.
  const [vCount, setVCount] = useState(4); // Количество отображаемых элементов (1 - 4).
  const [lCount, setLCount] = useState(1); // На сколько элементов листается (1 - 4).
  const [vItems, setVItems] = useState([]); // Видимые элементы.
  const [points, setPoints] = useState([]); // Массив для отрисовки точек слайдера.
  const [isSliderControl, setIsSliderControl] = useState(false); // Если все элементы вмещаются на экран, тогда управление листанием скрыто.
  const [activePoint, setActivePoint] = useState(0); // Активная точка в слайдере. Указывает на позицию в массиве points.
  const [pointsOn, setPointsOn] = useState(isPoints); // Убрать/показать точки слайдера.

  // Вычисляем массив видимых элементов, при листании (или изменении количества видимых элементов - пока не используется).
  useEffect(() => {
    const arr = [];
    const endPos = pos + vCount < items.length ? pos + vCount : items.length;
    for (let i = pos; i < endPos; i += 1) {
      arr.push(items[i]);
    }
    setVItems(arr);
  }, [pos, vCount]);

  // Вычисляем массив для отрисовки точек.
  useEffect(() => {
    let pCount = Math.ceil((items.length - (vCount - lCount)) / lCount);
    if (pCount < 0) pCount = 1;
    const arr = [];
    for (let i = 0; i < pCount; i += 1) {
      arr.push('');
    }
    setPoints(arr);
  }, [vCount]);

  // Устанавливаем нужно ли показывать управление листанием слайдера.
  useEffect(() => {
    let isVisible = null;
    if (items.length <= vCount) isVisible = false;
    else isVisible = true;

    if (isSliderControl !== isVisible) setIsSliderControl(isVisible);
  }, [vCount]);

  // Вычисляем позицию активной точки для массива points.
  useEffect(() => {
    setActivePoint(Math.ceil(pos / lCount));
  }, [pos]);

  const handleOnRightClick = () => {
    let nextPos = pos + lCount;

    if (isRound) {
      if (nextPos + vCount - lCount >= items.length) nextPos = 0;
      else if (nextPos > items.length - vCount) nextPos = items.length - vCount;
    } else if ((nextPos > items.length) || (nextPos > items.length - vCount)) nextPos = items.length - vCount;

    if (nextPos < 0) nextPos = 0;
    if (pos !== nextPos) setPos(nextPos);
  };

  const handleOnLeftClick = () => {
    let nextPos = pos - lCount;
    if (nextPos < 0) nextPos = 0;
    if (pos !== nextPos) setPos(nextPos);
  };

  if (items.length === 0) return null;

  return (
    <div className="slider">
      <div className="slider__container">
        {children(vItems)}
      </div>

      {isSliderControl &&
      <div className="slider__control slider__control_gray">
        <button className="slider__arrow" type="button" onClick={handleOnLeftClick}>
          <span className="visually-hidden">Назад</span>
        </button>

        {pointsOn &&
        <ul className="slider__points">
          {points.map((point, index) =>
            <li className={`slider__point${index === activePoint ? ' slider__point_active' : ''} `} key={nanoid()}>
              <span className="visually-hidden">Точка слайдера</span>
            </li>)}
        </ul>}

        <button className="slider__arrow slider__arrow_right" type="button" onClick={handleOnRightClick}>
          <span className="visually-hidden">Вперед</span>
        </button>
      </div>}
    </div>
  );
}
