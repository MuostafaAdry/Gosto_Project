import React, { useState } from "react";
import { Container } from "react-bootstrap";
import hero from "../../style/Home/Hero.sass/Hero.module.scss";
const Hero = () => {
  return (
    <>
      <div data-aos="flip-right" className={hero.Maincontainer}>
        <Container>
          <div className={hero.container}>
            <h1>
              <label>
                Over <span>6,500</span> Curated Design
              </label>
              <br />
              <label>
                Resources, <span>Graphic & Website</span> Templates
              </label>
            </h1>
            <p>
              High-quality Design Themes for personal or commercial use contains
              6k+ items in 100 categories.
            </p>
          </div>

          <div className={hero.serch}>
            <span>All Categories::</span>
            <input type="text" placeholder="Search Products..." />

            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <div className={hero.serchp}>
            <p>Examples: Mockup, PSD, Theme Design, Image…</p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
