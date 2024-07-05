import "./header.css";

import burgerIcon from "../../images/img_51584.png";
import imageСouple from "../../images/1647038567_55-kartinkin-net-p-kartinki-dlya-par-69.jpg";

import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="header__permission">
        <img className="header__burger-icon" src={burgerIcon} alt="иконка бургер меню" />
        <div className="header__flex">
          <img className="header__image-couple" src={imageСouple} alt="фотография молодожен" />
          <div className="header__cards">
            <p className="header__hello-parafraph">Рады пригласить вас на нашу свадьбу!</p>
            <h1 className="header__title">
              Михаил&
              <br />
              Алиса
            </h1>
            <p className="header__date-paragraph">28/09/24</p>
          </div>
        </div>
      </div>
    </div>
  );
}
