import React from "react";
import MainCarousel from "./MainCarousel";
import Orientation from "./Orientation";
import Contact from "./Contact";
import thetatau2 from "./thetatau2.jpg";
import PirateLaneCleanup from "../src/images/everyone_piratelane_cleanup_cropped.png";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <MainCarousel />
        <div className="main-content">
          <div id="WhatIsThetaTau" className="what-is-theta-tau hor-flex">
            <div>
              <img id="greeting-picture" alt="Changeme" src={thetatau2} />
            </div>
            <div id="">
              <h1>What is Theta Tau?</h1>
              <div>
                Theta Tau is a <b>coed, professional engineering fraternity</b>.
                We focus on three main activities, these being{" "}
                <b>professional development</b>, <b>brotherhood</b>, and{" "}
                <b>volunteering</b>.
              </div>
            </div>
          </div>
          <div>
            <h1>Mission</h1>
            The purpose of Theta Tau is to develop and maintain a high standard
            of professional interest among its members, and to unite them in a
            strong bond of fraternal fellowship. We focus on three main pillars:
          </div>
          <div id="MainPoints">
            {/* <div> */}
            {/* <h1>Professional Development</h1> */}
            {/* <div> */}
            {/* <img */}
            {/* id="pirate-lane-cleanup" */}
            {/* alt="Changeme" */}
            {/* src={PirateLaneCleanup} */}
            {/* /> */}
            {/* <div> */}
            {/* We provide our members with the opportunity to develop their */}
            {/* professional skills through a variety of events, including */}
            {/* resume workshops, and mock interviews. */}
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
            <div>
              <h1>Professional Development</h1>
              <div>
                <img
                  id="pirate-lane-cleanup"
                  alt="Changeme"
                  src={PirateLaneCleanup}
                />
                <div>
                  We provide our members with the opportunity to develop their
                  professional skills through a variety of events, including
                  resume workshops, and mock interviews.
                </div>
              </div>
            </div>
            <div>
              <h1>Volunteering</h1>
              <div>
                <div>
                  We provide our members with the opportunity to give back to
                  the community through a variety of events, including road
                  cleanups, volunteering for spaghetti dinners, and cleaning up
                  the local beach.
                </div>
                <img
                  id="pirate-lane-cleanup"
                  alt="Changeme"
                  src={PirateLaneCleanup}
                />
              </div>
            </div>
            <div>
              <h1> Brotherhood</h1>
              <div>
                <img
                  id="pirate-lane-cleanup"
                  alt="Changeme"
                  src={PirateLaneCleanup}
                />
                <div>
                  We provide our members with the opportunity to bond with each
                  other through a variety of events, including game nights,
                  movie nights, and socials with other organizations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
