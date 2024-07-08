import React from "react";
import "./Photo.css";

import bigImage from '../../images/photo__big.jpg'
import miniImage from '../../images/photo__mini1.jpg'
import miniImageTwo from '../../images/photo__mini2.jpg'
import miniImageFre from '../../images/photo__mini3.jpg'

export default function Photo() {
  return (
    <div className="photo">
      <div className="photo__permission">
        <img className="photo__big" src={bigImage} alt="фото пары" />
        <div className="photo__flex">
          <img className="photo__mini" src={miniImage} alt="фото пары" />
          <img className="photo__mini" src={miniImageTwo} alt="фото пары" />
          <img className="photo__mini" src={miniImageFre} alt="фото пары" />
        </div>
      </div>
    </div>
  );
}
