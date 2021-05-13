import React from "react";
import Slider from "react-slick";
import PresHeader from "./pages/PresHeader"
import Welcome from "./pages/Welcome"
import HighScore from "./pages/HighScore"
import EnterHighScore from "./pages/EnterHighScore";
import Connect from "./pages/Connect"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slideshow.scss";


export default function Presentation() {
        const renderSlides = () =>
      [<Welcome />,<HighScore />,<EnterHighScore />, <Connect />].map(content => (
        <div>
          <h3>{content}</h3>
        </div>
      ));
  return (
    <div>
        <PresHeader />
        <div className="slideParent">
            <Slider className="targetSlides" dots={true}>{renderSlides()}</Slider>
        </div>

    </div>
  );
}