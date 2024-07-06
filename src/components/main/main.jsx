import "./main.css";

import imageCloup from '../../images/cloup2.jpg'
import imageCalendar from '../../images/calendar-of-august.png'
import imageHeart from '../../images/head-icon.png'

import React from "react";

export default function Main() {
  return (
    <div className="main">
      <div className="main__permission">
        <h2 className="main__title">Дорогие родные и близкие!</h2>
        <p className="main__paragraph-up">
          С огромной радостью приглашаем вас на самое главное событие в нашей
          жизни - нашу свадьбу! Разделите с нами этот день, подарите свое тепло
          и поддержку!
        </p>
        <div className="main__flex">
          <div className="main__card">
            <p className="main__paragraph-date">Дата проведения</p>
            <p className="main__paragraph-august">Август</p>
            <img className="main__image-calendar" src={imageCalendar} alt="картинка календаря" />
            <img className="main__image-heart" src={imageHeart} alt="картинка выбранного числа(сердечко)" />
          </div>
          <img className="main__imaig-cloup" src={imageCloup} alt="фото пары" />
        </div>
      </div>
    </div>
  );
}
