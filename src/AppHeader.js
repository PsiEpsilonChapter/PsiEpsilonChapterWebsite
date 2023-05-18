import React from "react";
import ReactDOM from "react-dom";

class AppHeader extends React.Component {
  render() {
    return (
      <header className="App-header">
        <div className="header-bar">
          <div>Mission</div>
          <div>Events</div>
          <div>Members</div>
          <div>History</div>
          <div>Contact</div>
          <div>Gallery</div>
        </div>
      </header>
    );
  }
}

export default AppHeader;
