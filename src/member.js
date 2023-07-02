import React from "react";
import computer_science_icon from "../src/major_images/computer-science.png";
import computer_engineering_icon from "../src/major_images/computer-engineering.png";
import electrical_engineering_icon from "../src/major_images/electrical-engineering.png";
import mechanical_engineering_icon from "../src/major_images/mechanical-engineering.png";
import civil_engineering_icon from "../src/major_images/civil-engineering.png";
import chemical_engineering_icon from "../src/major_images/chemical-engineering.png";
import bioengineering_icon from "../src/major_images/biomedical-engineering.png";
import aerospace_engineering_icon from "../src/major_images/aerospace-engineering.png";

class Member extends React.Component {
  // lol this tutorial helped https://www.youtube.com/watch?v=taMJct5oeoI
  render() {
    var major_icon = "";
    if (this.props.member.major === "Computer Science") {
      major_icon = computer_science_icon;
    } else if (this.props.member.major === "Computer Engineering") {
      major_icon = computer_engineering_icon;
    } else if (this.props.member.major === "Electrical Engineering") {
      major_icon = electrical_engineering_icon;
    } else if (this.props.member.major === "Mechanical Engineering") {
      major_icon = mechanical_engineering_icon;
    } else if (this.props.member.major === "Civil Engineering") {
      major_icon = civil_engineering_icon;
    } else if (this.props.member.major === "Chemical Engineering") {
      major_icon = chemical_engineering_icon;
    } else if (this.props.member.major === "Bioengineering") {
      major_icon = bioengineering_icon;
    } else if (this.props.member.major === "Aerospace Engineering") {
      major_icon = aerospace_engineering_icon;
    }

    return (
      <div className="member-profile">
        <img alt="member profile" src={this.props.member.img_src}></img>
        <div>{this.props.member_name}</div>
        <div className="member-name">{this.props.member.name}</div>
        <div className="">{this.props.member.pledge_date}</div>
        <div className="member-major">
          {this.props.member.major}
          <img src={major_icon} />
        </div>
        <div>{this.props.member.hometown}</div>
        <div className="italic">{this.props.member.catchphrase}</div>
      </div>
    );
  }
}

export default Member;
