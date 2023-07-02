import React from "react";
import Viewer from "viewerjs";

var listOfImages = [];

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.galleryRef = React.createRef();
  }

  componentDidMount() {
    this.initializeViewer();
  }

  componentDidUpdate() {
    if (this.viewer) {
      this.viewer.destroy();
    }
    this.initializeViewer();
  }

  componentWillUnmount() {
    if (this.viewer) {
      this.viewer.destroy();
    }
  }

  initializeViewer() {
    this.viewer = new Viewer(this.galleryRef.current, {
      url: "data-original",
      toolbar: {
        oneToOne: true,
        prev: function () {
          this.viewer.prev(true);
        },
        play: true,
        next: function () {
          this.viewer.next(true);
        },
      },
      viewed: () => {
        this.viewer.update();
      },
      shown: () => {
        this.viewer.zoomTo(1);
      },
    });
  }

  importAll(r) {
    return r.keys().map(r);
  }

  componentWillMount() {
    listOfImages = this.importAll(
      require.context("../public/images/", false, /\.(png)$/)
    );
  }

  render() {
    return (
      <div>
        <div id="gallery" className="gallery-list" ref={this.galleryRef}>
          <ul id="images">
            {listOfImages.map((image, index) => (
              <li key={"li" + index}>
                <img key={"img" + index} src={image} alt="info" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Gallery;
