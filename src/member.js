import React from "react";

class Member extends React.Component {
  // lol this tutorial helped https://www.youtube.com/watch?v=taMJct5oeoI
  render() {
    return (
      <div className="member-profile">
        <img alt="member profile" src={this.props.member.img_src}></img>
        <h2>{this.props.member_name}</h2>
        <div className="member-name">{this.props.member.name}</div>
        <div className="">{this.props.member.pledge_date}</div>
        <div className="">{this.props.member.major}</div>
        <div className="italic">{this.props.member.catchphrase}</div>
      </div>
    );
  }
}

export default Member;
