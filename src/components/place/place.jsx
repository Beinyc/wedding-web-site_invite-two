import React from "react";
import "./place.css";

import imageTable from "../../images/table.jpg";
import imageBouquet from "../../images/bouquet.jpg";

export default function Place() {
  return (
    <div className="place">
      <div className="place__permission">
      <div className="place__image-bouquet" />
        <div className="place__cart-registration">
          <h3 className="place__cart-title">Место регистрации</h3>
          <p className="place__cart-paragraph_up">
            ЗАГС
            <br />
            «Дворец бракосочетания»
            <br />
            1, микрорайон Надежда
          </p>
          <p className="place__cart-paragraph_up">
            Торжественная церемония в 16:00
          </p>
          <a
            className="place__map-registration"
            href="https://yandex.ru/maps/-/CDGN6K6T"
          >
            Открыть карту
          </a>
        </div>

          <div className="place__image-table" />
          <div className="place__cart-registration-down">
            <h3 className="place__cart-title">Место проведения</h3>
            <p className="place__cart-paragraph_up">
              банкетный зал
              <br />
              «The Garag»
              <br />
              ул. Ерошенко, 5
            </p>
            <p className="place__cart-paragraph_up">Сбор гостей в 18:00</p>
            <a
              className="place__map-registration"
              href="https://yandex.ru/maps/-/CDGfRC2d"
            >
              Открыть карту
            </a>
          </div>
        
      </div>
    </div>
  );
}
