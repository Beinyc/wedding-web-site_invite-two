import React from "react";
import "./OurStory.css";
import imageCloup from "../../images/cloup3.jpg";

export default function OurStory() {
  return (
    <div className="our-story">
      <div className="our-story__permission">
        <div className="our-story__flex">
          <img className="our-story__image" src={imageCloup} alt="фото пары" />
          <div className="our-story__flex-cart">
            <h4 className="our-story__title">Наша история</h4>
            <p className="our-story__paragraph-up">
              Мы с Артемом ездили на работу в одно время, в одной маршрутке, с
              разницей в одну остановку. Как-то раз он решился познакомиться со
              мной, но я отказала!)
              <br />
              В течение года мы иногда разговаривали в маршрутке. А потом он
              предложил подвезти меня на работу на машине. Я согласилась)
              <br />
              Спустя 2 дня он повёз меня в другой город, под предлогом
              экскурсии, знакомить со своими родителями. После этого мы больше
              не расставались)
            </p>
            <p className="our-story__paragraph-down">Маргарита, невеста</p>
          </div>
        </div>
      </div>
    </div>
  );
}
