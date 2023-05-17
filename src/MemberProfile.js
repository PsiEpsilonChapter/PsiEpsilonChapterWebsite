import React from "react";
import ReactDOM from "react-dom";

class MemberProfile extends React.Component {
  render() {
    var content = (
      <div className="member-profile">
        <img src="https://i.musicaimg.com/letras/resmax/ian-leon.jpg"></img>
        <h2>Ian Leon</h2>
        <div className="">Class of 2023</div>
        <div className="">Pledged: Spring 2021</div>
        <div className="">Aerospace Engineering</div>
        <div className="italic">"Goth girls will break your heart..."</div>
      </div>
    );

    return content;
  }
}

export default MemberProfile;
