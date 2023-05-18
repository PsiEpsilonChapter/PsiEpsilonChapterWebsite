import React from "react";
import ReactDOM from "react-dom";

class MainCarousel extends React.Component {
  render() {
    return (
      <div id="carousel-container">
        <div id="page-title" className="centered fade-in-bottom">
          <div className="theta-tau-title">
            <div className="theta-title"> Θ </div>
            <div className="tau-title">Τ</div>
          </div>
          <div id="chapter-title" className="hor-flex">
            <div className="chapter-letters">ΨΕ </div>
            Chapter
          </div>

          <div className="centered icon"></div>
        </div>
      </div>
    );
  }
}

export default MainCarousel;
