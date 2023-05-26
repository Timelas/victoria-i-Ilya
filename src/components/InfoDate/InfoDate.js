import React from "react";
import names from "../../images/names.svg";
import flower from "../../images/flower2.svg";
import where from "../../images/where.svg";
import banquet from "../../images/banquet.svg";
import flowermap from "../../images/flower.svg";
import flowermapWhite from "../../images/flowerw.svg";
import "./InfoDate.css";

function InfoDate() {
  return (
    <section className="info-date">
      <div className="info-date__invitation">
        <img className="info-date__who" alt="Александра и Кирилл" src={names}></img>
        <p className="info-date__text">Приглашают вас на свадьбу </p>
        <div className="info-date__info">
          <p className="info-date__text info-date__text_position_right">23 августа <br /> 2023 ГОДА</p>
          <img className="info-date__flower" alt="цветок" src={flower}></img>
          <p className="info-date__text info-date__text_position_left">СРЕДА<br />12 часов 20 минут</p>
        </div>
      </div>
      <div className="info-date__place" id="place">
        <div className="info-date__check-in info-date__check-in_color_white">
          <div className="info-date__block-text">
            <img className="info-date__where" alt="торжественная регистрация" src={where}></img>
            <p className="info-date__text info-date__text_position_right">ЗАГС Приморского района<br />Санкт-Петербург, Стародеревенская улица, 5<br />Начало в 12.20<br />Сбор гостей в 11.50</p>
          </div>
          <div className="info-date__with-map">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af9ee086e75a0c1c3b9ef9846854c8f7d83964299b830425af2e297d5f0944782&amp;source=constructor"
              frameBorder="0" title="ЗАГС" className="info-date__map"></iframe>
            <img className="info-date__flower-map" alt="цветок" src={flowermap}></img>
          </div>
        </div>
        <div className="info-date__check-in info-date__check-in_color_grey">
          <div className="info-date__with-map">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0836f488b0cd0d086614a6223af720e37e871c2d3ea2bc8e6363f896e69ee350&amp;source=constructor" 
              frameBorder="0" title="ресторан" className="info-date__map info-date__map-left"></iframe>
            <img className="info-date__flower-map-white" alt="цветок" src={flowermapWhite}></img>
          </div>
          <div className="info-date__block-text">
            <img className="info-date__where info-date__where_position_left" alt="праздничный банкет" src={banquet}></img>
            <p className="info-date__text info-date__text_position_left">Ресторан "Русская рыбалка в Комарово",<br />Морской зал<br />Пос. Комарово, Приморское шоссе, 452 А<br />Сбор гостей в 14:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoDate;