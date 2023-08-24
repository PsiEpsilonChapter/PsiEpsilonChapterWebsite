import React from "react";
import ReactDOM from "react-dom";
import brotherhood from "./homepage_imgs/everyone_rocket_uspcaled.jpg";
import professionalism from "./homepage_imgs/everyone_professional_peter.jpg";
import volunteering from "./homepage_imgs/everyone_cleanup_peter_adli_landon.png";
import { useTransition, animated } from "react-spring";
import GearUtils from "./Gears.jsx";

class MainCarousel extends React.Component {
  CarouselContent = {
    0: {
      image: volunteering,
      slogan: "Volunteering",
    },
    1: {
      image: professionalism,
      slogan: "Professionalism",
    },
    2: {
      image: brotherhood,
      slogan: "Brotherhood",
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      current_showing: 0,
    };
    this.current_showing = 0;
  }

  render() {
    var gears = GearUtils.getGearsMainCarousel();

    // set a timer for 3 seconds to change properties of carousel-container
    // this.timeout = setTimeout(() => {
    // console.log(" this.current_showing is ");
    // console.log(this.current_showing);
    // console.log(this.CarouselContent[this.current_showing]);
    // console.log(this.CarouselContent[this.current_showing].image);
    // var next_showing = (this.current_showing + 1) % 3;

    // var carouselContainer = document.getElementById("carousel-container");

    // carouselContainer.style.backgroundImage = `url(${this.CarouselContent[next_showing].image})`;
    // var carouselSlogan = document.getElementById("CarouselSlogan");
    // carouselSlogan.innerHTML = `${this.CarouselContent[next_showing].slogan}`;
    // this.current_showing = next_showing;
    // }, 3000);

    return (
      <div
        id="carousel-container"
        style={{
          backgroundImage: `url(${
            this.CarouselContent[this.current_showing].image
          })`,
        }}
      >
        <div id="page-title" className="centered fade-in-bottom">
          <div className="theta-tau-title">
            <div className="theta-title"> Θ </div>
            <div className="tau-title">Τ</div>
          </div>

          <div id="chapter-title" className="hor-flex">
            <div className="chapter-letters">ΨΕ </div>
            <div>Chapter</div>
          </div>
          <div id="CarouselSlogan" className="carousel-slogan">
            {this.CarouselContent[this.current_showing].slogan}
          </div>

          <div className="centered icon"></div>
        </div>
        {gears}
      </div>
    );
  }
}

export default MainCarousel;
