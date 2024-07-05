import "./main.css";

import imageCloup from '../../images/cloup2.jpg'
import imageCalendar from '../../images/calendar-of-august.png'
import imageHeart from '../../images/head-icon.png'

import React from "react";

export default function Main() {
  return (
    <div>
      <div>
        <h2>Дорогие родные и близкие!</h2>
        <p>
          С огромной радостью приглашаем вас на самое главное событие в нашей
          жизни - нашу свадьбу! Разделите с нами этот день, подарите свое тепло
          и поддержку!
        </p>
        <div>
          <div>
            <p>Дата проведения</p>
            <p>Август</p>
            <img src={imageCalendar} alt="картинка календаря" />
            <img src={imageHeart} alt="картинка выбранного числа(сердечко)" />
          </div>
          <img src={imageCloup} alt="фото пары" />
        </div>
      </div>
    </div>
  );
}
