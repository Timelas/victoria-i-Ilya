import React from "react";
import details from "../../images/Details.svg";
import "./Details.css";

function Details() {
  return (
    <section className="details" id="details">
      <img src={details} alt="детали" className="details__header"></ img>
      <p className="details__text">Пожалуйста, подтвердите ваше присутствие на нашем празднике до  1 августа 2023 года лично или телефонным звонком /любым удобным для вас способом.</p>
      <p className="details__text">Присутствие детей на свадьбе: Обратите внимание, что формат мероприятия не предполагает детской площадки и аниматоров. Пожалуйста, позаботьтесь о том, чтобы провести этот вечер без детей.</p>
      <p className="details__text">Подарки: Если хотите подарить нам ценный и нужный подарок, мы будем очень благодарны за вклад в бюджет нашей молодой семьи.</p>
      <p className="details__text">Пожелания: Будем благодарны, если Вы воздержитесь от криков «Горько» на празднике, ведь поцелуй - знак выражения чувств, он не может быть по заказу.</p>
    </section>
  );
}

export default Details;