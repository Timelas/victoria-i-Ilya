import React, {useState, useRef} from "react";
import question from "../../images/questions.svg";
import flower from "../../images/flowerPull.svg";
import "./Questions.css";

function Questions() {
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbzzN83-B17xvTT4S1CqVjPx-gPmziqB7OJ0Fcol6ZKSDyPBk10KfQaF2pYGvPrDEx-t/exec"
  const [loading, setLoading] = useState(false);
  const [isFormVisible, setisFormVisible] = useState(true);

  const handleSubmit = (e) =>{
      e.preventDefault();
      setLoading(true);
      const FormNew = new FormData(formRef.current);
      FormNew.append('Form', 'questions');

      fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),

  }).then(res => {
          setLoading(false);
          setisFormVisible(false);
      })
      .catch(err => console.log(err))
  }
  
  return (
    <section className="question" id="questions">
      <div className="question__bloks">
        <img src={flower} alt="цветок" className="question__flower"></ img>
        { isFormVisible ?
          <div className="question__container">
            <img src={question} alt="опрос" className="question__header"></ img>
            <p className="question__text">Чтобы все прошло идеально и этот день запомнился надолго, пожалуйста, ответьте на несколько вопросов:</p>
            <form className="question__form" ref={formRef} onSubmit={handleSubmit}>
            <p className="question__string">
              <label htmlFor="who" className="question__label-input">Имя и фамилия:</label>
              <input type="text" name="Имя и Фамилия" id="who" required className="question__input" minLength={2}></input>
            </p>
            <fieldset className="question__string">Понадобится ли вам трансфер:
              <label  htmlFor="yes-transfer" className="question__label">
                <input className="question__unvisible" type="radio" name="Трансфер" value="Нужен" id="yes-transfer"></input>
                <span className="question__visible-radio"></span>
                <span className="question__text-span">Да</span>
              </label>
              <label className="question__label" htmlFor="no-transfer">
                <input className="question__unvisible" type="radio" name="Трансфер" value="Не нужен" id="no-transfer"></input>
                <span className="question__visible-radio"></span>
                <span className="question__text-span">Нет</span>
              </label>
            </fieldset>
            <p className="question__string">
              <label htmlFor="alco" className="question__label-input">Пожелания по алкоголю:</label>
              <input type="text" name="Алкоголь" id="alco" required className="question__input"></input>
            </p>
            <button type="submit" className="question__button" disabled={loading ? true : false}>{loading ? "Отправка..." : "Подтвердить"}</button>
          </form> 
        </div>
        :
        <div>
          <img src={question} alt="опрос" className="question__header"></ img>
          <p className="question__text">Форма отправлена!</p>
        </div>
        }
      </div>
    </section>
  );
}

export default Questions;