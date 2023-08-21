import React from "react";
import member_list from "./member_list";
import Member from "./member";
import Footer from "./Footer";

class Members extends React.Component {

  importAll(r) {
	  console.log("r is ");
	  console.log(r);
	  console.log(r.keys());
	  var mapped_arr = r.keys().map(r);
	  var local_arr = r.keys();
    return [mapped_arr, local_arr];
  }
	  componentWillMount() {
		  var temp = this.importAll(
	      require.context("../public/images/member_images/", false, /\.(png)$/)
	    );

	    this.listOfImages =temp[0]
	  this.listOfImageSrcs = temp[1];
	  }

	render() {
		var retHTML = [];
		console.log("List of images is ");
		console.log(this.listOfImages);
	    for (const [key, value] of Object.entries(member_list.members)) {
// console.log("value is ");
// console.log(value);
// console.log(value.img_src);
		    console.log("Image sources are ");
		    console.log(this.listOfImageSrcs);
		    console.log("member image is ");
		    console.log(value);
		    console.log(value.img_src);
		    console.log("replaced version is ")
		    var modded_src = value.img_src.replace("./public", ".")
		    console.log(modded_src);
		    var img_src_ind = this.listOfImageSrcs.indexOf(modded_src);
		    console.log("Image src index is ");
		    console.log(img_src_ind);
		    var replace = value;
		    if(img_src_ind !=-1){
replace.img_src = this.listOfImages[img_src_ind];

		    }

// console.log("Img src is ");
// console.log(img_src);
		    
		    if(replace.include != undefined && replace.include == false) {
			    continue;
		    }
	      retHTML.push(<Member member={replace} />);
	    }
	    return (
		<div className="member-display">{retHTML}</div>
	    );

	}

}

export default Members;
