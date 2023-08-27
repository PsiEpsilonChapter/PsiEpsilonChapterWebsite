import React from "react";
import MainCarousel from "./MainCarousel";
import "./index.css";
import Orientation from "./Orientation";
import Contact from "./Contact";
import thetatau2 from "./thetatau2.jpg";
import PirateLaneCleanup from "../src/images/everyone_piratelane_cleanup_cropped.png";
import EveryoneCamping from "../src/images/everyone_camping_upscaled_cropped.png";
import ThetaPaddle from "../src/images/theta_paddle.png";
import GarrettPeterFacebook from "../src/images/garrett_peter_facebook.png";
import OldCafeteriaEveryone from "../src/images/old_cafeteria_everyone2.png";
import GarretPresidentsCup from "../src/images/garrett_presidents_cup.png";
import RanMichaelPeter from "../src/images/ran_michael_peter.png";
import sus_regionals from "../src/images/sus_regionals.png";
import adli_landon_cleanup_cropped from "../src/images/adli_landon_cleanup_cropped.png";

class MainPage extends React.Component {
  render() {
    let isMobile = this.props.isMobile;
    let volunteeringContent = (
      <div className="MainPointContent">
        {" "}
        We provide our members with the opportunity to give back to the
        community through a variety of events, including road cleanups,
        volunteering for spaghetti dinners, and cleaning up the local beach.{" "}
      </div>
    );
    let volunteeringDistributePics = (
      <div className="distribute-pics">
        {" "}
        <div className="polaroid" style={{ transform: "rotate(+3deg)" }}>
          {" "}
          <img
            id="pirate-lane-cleanup"
            alt="Changeme"
            src={PirateLaneCleanup}
          />{" "}
          <div className="polaroid-content"></div>{" "}
        </div>{" "}
        <div className="polaroid" style={{ transform: "rotate(-3deg)" }}>
          {" "}
          <img
            id="pirate-lane-cleanup"
            alt="Changeme"
            src={adli_landon_cleanup_cropped}
          />{" "}
          <div className="polaroid-content"></div>{" "}
        </div>{" "}
        <div className="polaroid" style={{ transform: "rotate(+3deg)" }}>
          {" "}
          <img
            id="pirate-lane-cleanup"
            alt="Changeme"
            src={OldCafeteriaEveryone}
          />{" "}
          <div className="polaroid-content"></div>{" "}
        </div>{" "}
      </div>
    );
    console.log("This state's isMobile is ", this.props.isMobile);
    let greetingPicture = (
      <div className="greeting-picture polaroid ">
        {" "}
        <img id="greeting-picture" alt="Changeme" src={thetatau2} />{" "}
      </div>
    );
    let volunteeringInner = [volunteeringContent, volunteeringDistributePics];
    if (this.props.isMobile) {
      volunteeringInner = [volunteeringDistributePics, volunteeringContent];
      greetingPicture = "";
    }
    return (
      <div className="MainPage">
        <MainCarousel />
        <div className="main-content">
          <div id="WhatIsThetaTau" className="what-is-theta-tau hor-flex">
            <h1>What is Theta Tau?</h1>
            <div
              id="greeting-content"
              className="greeting-content mainpage-text-and-images"
            >
              {greetingPicture}
              <div className="MainPointContent">
                Theta Tau is a <b>coed, professional engineering fraternity</b>.
                We focus on three main activities, these being{" "}
                <b>professional development</b>, <b>brotherhood</b>, and{" "}
                <b>volunteering</b>.
              </div>
            </div>
          </div>
          <div className="MissionStatement">
            <h1>Mission</h1>
            <div className="MainPointContent">
              The purpose of Theta Tau is to develop and maintain a high
              standard of professional interest among its members, and to unite
              them in a strong bond of fraternal fellowship. We focus on three
              main pillars:
            </div>
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
              <div className="mainpage-text-and-images">
                <div className="distribute-pics">
                  <div
                    className="polaroid"
                    style={{ transform: "rotate(-3deg)" }}
                  >
                    <img
                      id="pirate-lane-cleanup"
                      alt="Changeme"
                      src={GarretPresidentsCup}
                    />

                    <div className="polaroid-content"></div>
                  </div>
                  <div
                    className="polaroid"
                    style={{ transform: "rotate(+3deg)" }}
                  >
                    <img
                      id="pirate-lane-cleanup"
                      alt="Changeme"
                      src={RanMichaelPeter}
                    />
                    <div className="polaroid-content"></div>
                  </div>
                  <div className="polaroid">
                    <img
                      id="pirate-lane-cleanup"
                      alt="Changeme"
                      src={sus_regionals}
                    />
                    <div className="polaroid-content"> </div>
                  </div>
                </div>
                <div className="MainPointContent">
                  We provide our members with the opportunity to develop their
                  professional skills through a variety of events, including
                  resume workshops, and mock interviews.
                </div>
              </div>
            </div>
            <div>
              <h1>Volunteering</h1>
              <div className="mainpage-text-and-images">
                {volunteeringInner}
              </div>
            </div>
            <div>
              <h1> Brotherhood</h1>
              <div className="mainpage-text-and-images">
                <div className="distribute-pics">
                  <div
                    className="polaroid"
                    style={{ transform: "rotate(-3deg)" }}
                  >
                    <img
                      id="pirate-lane-cleanup"
                      alt="Changeme"
                      src={EveryoneCamping}
                    />

                    <div className="polaroid-content"></div>
                  </div>

                  <div
                    className="polaroid"
                    style={{ transform: "rotate(+3deg)" }}
                  >
                    <img
                      id="pirate-lane-cleanup"
                      alt="Changeme"
                      src={ThetaPaddle}
                    />
                    <div className="polaroid-content"></div>
                  </div>
                  <div
                    className="polaroid"
                    style={{ transform: "rotate(-3deg)" }}
                  >
                    <img
                      id="pirate-lane-cleanup"
                      alt="Changeme"
                      src={GarrettPeterFacebook}
                    />

                    <div className="polaroid-content"></div>
                  </div>
                </div>
                <div className="MainPointContent">
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
