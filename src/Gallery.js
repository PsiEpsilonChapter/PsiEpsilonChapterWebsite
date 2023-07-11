import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { RViewer, RViewerTrigger } from "react-viewerjs";
import React from "react";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.listOfImages = [];
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  importAll(r) {
    return r.keys().map(r);
  }

  componentWillMount() {
    this.listOfImages = this.importAll(
      require.context("../public/images/", false, /\.(png)$/)
    );
  }

  render() {
    let thumbImageUrls = this.listOfImages;
    console.log(`thumbImageUrls: ${thumbImageUrls}`);
    console.log(`listOfImages: ${this.listOfImages}`);
    return (
      <PhotoProvider>
        <div className="gallery-list">
          {this.listOfImages.map((item, index) => (
            <PhotoView key={index} src={item}>
              <img src={item} alt="" />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    );
  }
}

export default Gallery;
