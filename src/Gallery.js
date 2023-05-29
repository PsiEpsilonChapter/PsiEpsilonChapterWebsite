import React from "react";
import Member from "./member";
import member_list from "./member_list";
import ReactDOM from "react-dom";
var listOfImages = [];

class Gallery extends React.Component {
  importAll(r) {
    return r.keys().map(r);
  }
  componentWillMount() {
    listOfImages = this.importAll(
      // require.context("../public/images/", false, /\.(png|jpe?g|svg)$/)
      require.context("../public/images/", false, /\_gallery.(png)$/)
    );
  }
  render() {
    return (
      <div className="gallery-list">
        {listOfImages.map((image, index) => (
          <img key={index} src={image} alt="info"></img>
        ))}
      </div>
    );
  }
}

export default Gallery;
