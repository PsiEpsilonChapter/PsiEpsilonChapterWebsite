import React from "react";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";
import brotherhood from "./homepage_imgs/everyone_rocket_uspcaled.jpg";
import professionalism from "./homepage_imgs/everyone_professional_peter.jpg";
import volunteering from "./homepage_imgs/everyone_cleanup_peter_adli_landon.png";
import { useTransition, animated } from "react-spring";
import GearUtils from "./Gears.jsx";
import { useTranslation } from "react-i18next";
import i18next from "./i18n";

class MainCarousel extends React.Component {
  CarouselContent = () => ({
    0: {
      image: volunteering,
      slogan: i18next.t("volunteering-title"),
    },
    1: {
      image: professionalism,
      slogan: i18next.t("professionalism-title"),
    },
    2: {
      image: brotherhood,
      slogan: i18next.t("brotherhood-title"),
    },
  });

  constructor(props) {
    super(props);
    this.state = {
      current_showing: 0,
      inProp: true,
      language: i18next.language,
    };
    this.current_showing = 0;
  }

  setLanguage = (language) => {
    this.setState({ language: language });
  };

  toggle = () => {
    this.setState((prevState) => ({
      inProp: !prevState.inProp,
    }));
  };

  componentDidMount() {
    // set a timer for 3 seconds to change properties of carousel-container
    console.log("componentDidMount is being called");
    console.log("Timing out for 3 seconds");
    // this.timeout();
  }

  timeout = () =>
    setTimeout(() => {
      console.log(" this.current_showing is ");
      console.log(this.current_showing);
      console.log(this.CarouselContent()[this.state.current_showing]);
      console.log(this.CarouselContent()[this.state.current_showing].image);
      var next_showing = (this.state.current_showing + 1) % 3;
      console.log("next_showing is " + next_showing);

      this.setState({ current_showing: next_showing, inProp: false });
    }, 3000);

  render() {
    var gears = GearUtils.getGearsMainCarousel();
    console.log("Rerendering with value of ", this.state.current_showing);
    console.log(
      "Image is ",
      this.CarouselContent()[this.state.current_showing].image
    );
    console.log("InProp is ", this.state.inProp);
    // this.timeout();

    return (
      <div>
        <div id="carousel-container" className="centered">
          <CSSTransition
            in={this.state.inProp}
            timeout={2000}
            classNames="carousel"
            onEntered={this.toggle}
          >
            <div
              id="background1"
              style={{
                backgroundImage: `url(${this.CarouselContent()[0].image})`,
              }}
            ></div>
          </CSSTransition>

          <CSSTransition
            in={this.state.inProp}
            timeout={2000}
            classNames="carousel"
            onEntered={this.toggle}
          >
            <div
              id="background2"
              style={{
                backgroundImage: `url(${this.CarouselContent()[1].image})`,
              }}
            ></div>
          </CSSTransition>

          <CSSTransition
            in={this.state.inProp}
            timeout={2000}
            classNames="carousel"
            onEntered={this.toggle}
          >
            <div
              id="background3"
              style={{
                backgroundImage: `url(${this.CarouselContent()[2].image})`,
              }}
            ></div>
          </CSSTransition>
          <div className="carousel-title-wrapper">
            <div id="page-title" className="centered fade-in-bottom">
              <div className="theta-tau-title">
                <div className="theta-title"> Θ </div>
                <div className="tau-title">Τ</div>
              </div>

              <div id="chapter-title" className="hor-flex">
                {i18next.t("chapter-title-pre")}
                <div className="chapter-letters">ΨΕ </div>
                <div>{i18next.t("chapter-title-post")}</div>
              </div>
              <div id="CarouselSlogan" className="carousel-slogan">
                {this.CarouselContent()[this.state.current_showing].slogan}
              </div>

              <div className="centered icon"></div>
            </div>
            {gears}
          </div>
        </div>
      </div>
    );
  }
}

export default MainCarousel;
