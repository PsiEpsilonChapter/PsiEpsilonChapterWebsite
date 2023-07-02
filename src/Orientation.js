import React from "react";
import ReactDOM from "react-dom";
import thetatau1 from "./thetatau1.jpg";
import thetatau2 from "./thetatau2.jpg";

class Orientation extends React.Component {
  render() {
    return (
      <div className="orientation">
        <h1>Mission</h1>
        <div>
          The purpose of Theta Tau is to develop and maintain a high standard of
          professional interest among its members, and to unite them in a strong
          bond of fraternal fellowship.
        </div>
        <div className="what-is-theta-tau hor-flex">
          <div>
            {"TODO: Change this"}
            <img alt="Changeme" src={thetatau2} width="50%" />
          </div>
          <div>
            <h1>What is Theta Tau?</h1>
            <div>Theta Tau is a coed professional engineering fraternity.</div>
          </div>
        </div>

        <div className="hor-flex">
          <div>
            <h1>How to join?</h1>{" "}
            <div>
              Theta Tau is the oldest, largest, and foremost Fraternity for
              Engineers. Since its founding at the University of Minnesota in
              1904, over 40,000 have been initiated over the years. With
              emphasis on quality and a strong fraternal bond, the Fraternity
              has chapters only at ABET accredited schools and limits the number
              of student members in any one of its chapters across the nation.
            </div>
          </div>
          <div>
            {"TODO: Change atl"}
            <img src={thetatau1} width="50%" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Orientation;
