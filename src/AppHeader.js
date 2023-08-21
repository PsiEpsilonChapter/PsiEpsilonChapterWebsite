import React from "react";
import AppPagesEnum from "./AppPagesEnum.ts";
import history_icon from "./icons/history.png"
import gallery_icon from "./icons/gallery.png"
import home_icon from "./icons/home.png"
import mission_icon from "./icons/mission.png"
import members_icon from "./icons/members.png"
import silly_icon from "./icons/silly.png"
import PsiEps from "./PsiEps.png"
// import members_icon from "./icons/members.png"


class AppHeader extends React.Component {
  render() {
    console.log("AppPagesEnum is ");
    console.log(AppPagesEnum);

    return (
	    <div>
		    <div className="under-construction">
			    <b>
				    !
			    </b>

			    <b>
		     Website under construction
			    </b>

			    <b>
				    !
			    </b>

		    </div>

	    <head>
		    <link rel="icon" href={PsiEps}/>
		    <title> Psi Epsilon Chapter </title>
	    </head>
      <div className="App-header">
        <div className="header-bar">
          <div onClick={() => this.props.setPage(AppPagesEnum.Home)}>


		  <img src={home_icon}/>
		Home</div>

          <div onClick={() => this.props.setPage(AppPagesEnum.Mission)}>
		  <img src={mission_icon}/>
            Mission
          </div>
          <div onClick={() => this.props.setPage(AppPagesEnum.History)}>
		  <img src={history_icon}/>
            {" "}
            History{" "}
          </div>
          <div onClick={() => this.props.setPage(AppPagesEnum.Members)}>
		  <img id="members-icon" src={members_icon}/>
            {" "}
            Members{" "}
          </div>
          <div onClick={() => this.props.setPage(AppPagesEnum.Gallery)}>
		  <img src={gallery_icon}/>
            {" "}
            Gallery{" "}
          </div>
          <div onClick={() => this.props.setPage(AppPagesEnum.Silly)}>
		  <img src={silly_icon} style={{height: "4vh", width: "auto"}}/>
            {" "}
            Silly{" "}
          </div>
        </div>
      </div>
	    </div>
		    
    );
  }
}

export default AppHeader;
