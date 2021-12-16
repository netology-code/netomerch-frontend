/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from 'react';
import Title from '../../ui/Title';
import './card.css';

export default function Card() {
  return (
    <div className="card">
      <div className="container">
        <Title cn="card__title" text="Наименование товара" sqColor="purple" />
        <div className="card__content">
          <div className="card__column-1">
            <div className="card__img-main ibg">
              <img src="https://placeimg.com/360/500/tech" alt="" />
            </div>

            <div className="card__imgs">
              <div className="card__img ibg">
                <img src="https://placeimg.com/260/200/tech" alt="" />
              </div>
              <div className="card__img ibg">
                <img src="https://placeimg.com/265/200/tech" alt="" />
              </div>
              <div className="card__img ibg">
                <img src="https://placeimg.com/270/200/tech" alt="" />
              </div>
              <div className="card__img ibg">
                <img src="https://placeimg.com/275/200/tech" alt="" />
              </div>
            </div>
          </div>

          <div className="card__column-2">
            <div className="card__description">
              <p>Это худи поднимет настроение тебе и твоим друзьям. Мягкий природный гипаллергенный материал. Над принтом работали самые талантливые дизайнеры. Команда сделала все, что бы вам нравилось. Для текстов на латинице с начала XVI века. В то время некий  безымянный печатник создал большую коллекцию размеров</p>
            </div>

            <div className="card__actions actions-card">
              <div className="actions-card__row-1">
                <div className="actions-card__item card-sizes">
                  <button className="actions-card__btn card-sizes__btn" type="button">s</button>
                  <button className="actions-card__btn card-sizes__btn" type="button">m</button>
                  <button className="actions-card__btn card-sizes__btn" type="button">l</button>
                </div>
                <div className="actions-card__item card-colors">
                  <button className="actions-card__btn card-colors__btn" type="button">1<span className="visually-hidden">Color name</span></button>
                  <button className="actions-card__btn card-colors__btn" type="button">2<span className="visually-hidden">Color name</span></button>
                  <button className="actions-card__btn card-colors__btn" type="button">2<span className="visually-hidden">Color name</span></button>
                </div>
                {/* <div className="actions-card__item">
                  <div className="card-sizes">
                    <button className="actions-card__btn card-sizes__btn" type="button">s</button>
                    <button className="actions-card__btn card-sizes__btn" type="button">m</button>
                    <button className="actions-card__btn card-sizes__btn" type="button">l</button>
                  </div>
                </div>
                <div className="actions-card__item">
                  <div className="card-colors">
                    <button className="actions-card__btn card-colors__btn" type="button">1<span className="visually-hidden">Color name</span></button>
                    <button className="actions-card__btn card-colors__btn" type="button">2<span className="visually-hidden">Color name</span></button>
                    <button className="actions-card__btn card-colors__btn" type="button">2<span className="visually-hidden">Color name</span></button>
                  </div>
                </div> */}
              </div>

              <div className="actions-card__row-2">
                <button type="button">Добавить в корзину</button>
                <div className="card__count">
                  <button type="button">+</button>
                  <input value="1" />
                  <button type="button">-</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="card__footer">
          <div className="card__price">2500</div>
        </footer>
      </div>
    </div>
  );
}
