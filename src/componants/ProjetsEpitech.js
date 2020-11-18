
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import logoReact from '../img/logo192.png';

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slickNext: true,
    slickPrev: true,
  };
  return (
    <div className="slider-component">
      <Slider {...settings}>
      <div className="slider-item">
          <h3>1. En cours</h3>
          <img src={logoReact} alt="test"></img>
          <p>Description :</p>
          <p>En cours</p>
          <p>Technos :</p>
          <p>En cours</p>
          <p>LIEN</p>
        </div>
        <div className="slider-item">
          <h3>2. En cours</h3>
          <img src={logoReact} alt="test"></img>
          <p>Description :</p>
          <p>En cours</p>
          <p>Technos :</p>
          <p>En cours</p>
          <p>LIEN</p>
        </div>
        <div className="slider-item">
          <h3>3. En cours</h3>
          <img src={logoReact} alt="test"></img>
          <p>Description :</p>
          <p>En cours</p>
          <p>Technos :</p>
          <p>En cours</p>
          <p>LIEN</p>
        </div>
        <div className="slider-item">
          <h3>4. En cours</h3>
          <img src={logoReact} alt="test"></img>
          <p>Description :</p>
          <p>En cours</p>
          <p>Technos :</p>
          <p>En cours</p>
          <p>LIEN</p>
        </div>
        <div className="slider-item">
          <h3>5. En cours</h3>
          <img src={logoReact} alt="test"></img>
          <p>Description :</p>
          <p>En cours</p>
          <p>Technos :</p>
          <p>En cours</p>
          <p>LIEN</p>
        </div>
        <div className="slider-item">
          <h3>6. En cours</h3>
          <img src={logoReact} alt="test"></img>
          <p>Description :</p>
          <p>En cours</p>
          <p>Technos :</p>
          <p>En cours</p>
          <p>LIEN</p>
        </div>
      </Slider>
    </div>
  );
}