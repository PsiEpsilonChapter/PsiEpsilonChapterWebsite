import React from "react";
import member_list from "./member_list";
import Member from "./member";
import Footer from "./Footer";

class Members extends React.Component {

  importAll(r) {
    return r.keys().map(r);
  }
	  componentWillMount() {
	    this.listOfImages = this.importAll(
	      require.context("../public/images/member_images/", false, /\.(png)$/)
	    );
	  }

	render() {
	    var retHTML = [];
		console.log(this.listOfImages);
	    for (const [key, value] of Object.entries(member_list.members)) {
		    console.log("value is ");
		    console.log(value);
		    console.log(value.img_src);
	      retHTML.push(<Member member={value} />);
	    }
	    return (
		<div className="member-display">{retHTML}</div>
	    );

	}

}

export default Members;
