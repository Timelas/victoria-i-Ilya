import React from "react";
import "./Timetable.css";
import rings from "../../images/rings.svg";
import foto from "../../images/foto.svg";
import glasses from "../../images/glasses.svg";
import plate from "../../images/plate.svg";
import cake from "../../images/cake.svg";
import music from "../../images/music.svg";
import car from "../../images/car.svg";
import lineStart from "../../images/start.svg";
import lineEnd from "../../images/end.svg";
import lineCenter from "../../images/center.svg";
import timetable from "../../images/timetable.svg";

function Timetable() {
  return (
    <section className="timetable" id="plan">
      <img src={timetable} alt="заголовок" className="timetable__header"></ img>
      <div className="timetable__block">
        <img alt="rings" className="timetable__pic timetable__pic_visual_rings" src={rings}></img>
        <img alt="foto" className="timetable__pic timetable__pic_visual_foto" src={foto}></img>
        <img alt="glasses" className="timetable__pic timetable__pic_visual_glasses" src={glasses}></img>
        <img alt="plate" className="timetable__pic timetable__pic_visual_plate" src={plate}></img>
        <img alt="cake" className="timetable__pic timetable__pic_visual_cake" src={cake}></img>
        <img alt="music" className="timetable__pic timetable__pic_visual_music" src={music}></img>
        <img alt="car" className="timetable__pic timetable__pic_visual_car" src={car}></img>
        <img className="timetable__line timetable__line_center_foto" src={lineCenter} alt="линия"></img>
        <img className="timetable__line timetable__line_center_glasses" src={lineCenter} alt="линия"></img>
        <img className="timetable__line timetable__line_center_plate" src={lineCenter} alt="линия"></img>
        <img className="timetable__line timetable__line_center_cake" src={lineCenter} alt="линия"></img>
        <img className="timetable__line timetable__line_center_music" src={lineCenter} alt="линия"></img>
        <img className="timetable__line-start" src={lineStart} alt="линия"></img>
        <img className="timetable__line-end" src={lineEnd} alt="линия"></img>
        <p className="timetable__text timetable__text_about_rings">Церемония: <br /> Сбор гостей в 11.50 <br /> Начало в 12.20</p>
        <p className="timetable__text timetable__text_about_foto">Трансфер до ресторана <br /> 12.40</p>
        <p className="timetable__text timetable__text_about_glasses">Welcome<br />14:00</p>
        <p className="timetable__text timetable__text_about_plate">Начало банкета <br /> 14.40</p>
        <p className="timetable__text timetable__text_about_cake">Свадебный торт <br /> 18.30</p>
        <p className="timetable__text timetable__text_about_music">Танцы <br /> 19.00-21.00</p>
        <p className="timetable__text timetable__text_about_car">Окончание вечера 21.00</p>
      </div>
    </section>
  );
}

export default Timetable;