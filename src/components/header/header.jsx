import "./header.css";
import burgerIcon from "../../images/img_51584.png";
import imageСouple from "../../images/1647038567_55-kartinkin-net-p-kartinki-dlya-par-69.jpg";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="header">
      <div className="header__permission">
        <img
          className="header__burger-icon"
          src={burgerIcon}
          alt="иконка бургер меню"
          onClick={toggleMenu}
        />
        <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
          <ul className="sidebar__menu">
            <li><a href="#home">Главная</a></li>
            <li><a href="#invitation">Приглашение</a></li>
            {/* <li><a href="#date">Дата проведения</a></li>
            <li><a href="#registration-place">Место регистрации</a></li>
            <li><a href="#venue">Место проведения</a></li> */}
            <li><a href="#our-story">Наша история</a></li>
            <li><a href="#happy-moments">Счастливые моменты</a></li>
            <li><a href="#schedule">Расписание дня</a></li>
            <li><a href="#dress-code">Дресс-код</a></li>
            <li><a href="#wishes">Пожелания</a></li>
            <li><a href="#chat">Общий чат</a></li>
            <li><a href="#rsvp">Подтвердите присутствие</a></li>
            <li><a href="#countdown">Обратный отсчет</a></li>
          </ul>
        </div>
        <div className="header__flex">
          <img
            className="header__image-couple"
            src={imageСouple}
            alt="фотография молодожен"
          />
          <div className={`header__cards ${isLoaded ? 'show' : ''}`}>
            <p className="header__hello-parafraph">Рады пригласить вас на нашу свадьбу!</p>
            <h1 className="header__title">
              Артем&
              <br />
              Маргарита
            </h1>
            <p className="header__date-paragraph">25/11/24</p>
          </div>
        </div>
      </div>
    </div>
  );
}
