import React from "react";
import thetatau1 from "./thetatau1.jpg";
import GearUtils from "./Gears.jsx";

class Orientation extends React.Component {
  render() {
    var gears = GearUtils.getGearsOrientation();
    return (
      <div className="orientation">
        <div id="HowToJoin" className="hor-flex red-background">
          <div>
            <div className="joining-headers">How do I join?</div>{" "}
            <div className="right-aligned-vert">
              <div className="joining-headers">Recruitment</div>

              <p>
                Attend events during our two main recruiting week, starting on
                the <b>28th of August, 2023</b>. During the next two weeks,
                there will be opportunities to interact with our members and get
                to know what life with the fraternity is like. After that, if
                you are still interested in joining, voting will commence within
                the fraternity and you will likely be offered a bid.
              </p>

              <div className="joining-headers">Orientation</div>

              <p>
                After that, you will be oriented about our laws, customs, and
                history by our New Member Education chair in a series of
                informative sessions. The number of sessions can vary, but they
                usually last about 4 to 6 weeks.
              </p>

              <div className="joining-headers">Testing </div>

              <p>
                After the sessions have been completed, a test will be held
                whereby your knowledge of the fraternity will be tested.
              </p>

              <div className="joining-headers">Voting</div>

              <p>
                All members must pass the test to join, but they must also be
                approved by our active members in an election. Should you be
                successful in passing the test and getting enough votes to be
                accepted into the fraternity, you will then be inaugurated in a
                ceremony held every semester. Afterwards, you will finally be a
                member of Theta Tau.
              </p>
            </div>
          </div>
          <div>
            <img src={thetatau1} width="50%" alt="" />
          </div>
        </div>
        {gears}
      </div>
    );
  }
}

export default Orientation;
