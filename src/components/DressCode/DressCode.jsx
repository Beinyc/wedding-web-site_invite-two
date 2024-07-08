import React from "react";
import "./DressCode.css";

export default function DressCode() {
  return (
    <div className="dress-code">
      <div className="dress-code__permissions">
        <h4 className="dress-code__title">Дресс-код</h4>
        <p className="dress-code__paragraph">
          Мы очень старались сделать праздник красивым и будем рады, если в
          своих нарядах вы поддержите
          <span className="dress-code__span">
            природную цветовую гамму
          </span>{" "}
          нашей свадьбы и отдадите предпочтение{" "}
          <span className="dress-code__span">нейтральным оттенкам</span>
          (смотрите палитру ниже). Просим по возможности избегать ярких цветов в
          ваших образах.
        </p>
        <div className="dress-code__flex">
          <div className="dress-code__color dress-code__one"></div>
          <div className="dress-code__color  dress-code__two"></div>
          <div className="dress-code__color dress-code__free"></div>
          <div className="dress-code__color dress-code__four"></div>
          <div className="dress-code__color dress-code__five"></div>
          <div className="dress-code__color dress-code__six"></div>
        </div>
      </div>
    </div>
  );
}
