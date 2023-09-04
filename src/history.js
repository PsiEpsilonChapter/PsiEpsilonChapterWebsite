import React from "react";
import member_list from "./member_list";
import Regent from "./regent_entry.js";
import FamilyTreeComponent from "./FamilyTreeComponent.js";
import CytoScapeFamilyTree from "./CytoScapeFamilyTree.js";

class History extends React.Component {
  render() {
    var previousRegents = [];
    for (const [key, value] of Object.entries(member_list.regents.previous)) {
      console.log(`There are ${value.length} regents`);
      for (var i = 0; i < value.length; i++) {
        var regent_prof = member_list["members"][value[i]];
        console.log("regent_prof: ");
        console.log(regent_prof);
        console.log("key: ");
        console.log(key);
        var regent = <Regent member={regent_prof} time_of_regency={key} />;
        previousRegents.push(regent);
      }
    }

    var current_regent = member_list["members"][member_list.regents.current];
    var current_regent_entry = <Regent member={current_regent} />;
    return (
      <div className="HistorySummary">
        <h1> Summary </h1>
        <p>
          In January 2017, a group of students at Florida Tech recognized the
          absence of a close-knit campus community for engineering students.
          They desired an organization that would foster personal and
          professional growth while accommodating both genders. Discovering the
          values of Theta Tau, a national co-ed engineering fraternity, they
          decided to establish a local fraternity called Zeta Theta Tau. With 10
          core members, they organized social and professional development
          events during their first semester.
        </p>

        <p>
          During the following semester, the fraternity expanded its membership
          and engaged in service and social activities. They collaborated with
          other campus organizations, volunteered for Engineers' Week, and
          conducted a beach cleanup. Social events such as game and movie
          nights, beach days, and a trip to Disney strengthened the bond among
          members. Simultaneously, they submitted a petition to become a colony
          of Theta Tau.
        </p>

        <p>
          In August 2018, the Florida Institute of Technology Colony of Theta
          Tau was certified with 15 founders. They welcomed new pledge classes,
          hosted events, and began establishing connections with Theta Tau
          brothers from various regions. However, their journey faced challenges
          when the COVID-19 pandemic hit in March 2020. Despite the
          difficulties, the fraternity adapted and persisted, using virtual
          platforms like Minecraft to stay connected and continue their
          activities.
        </p>

        <p>
          As the pandemic continued into the Fall 2020 semester, the chapter
          planned a combination of virtual and carefully planned in-person
          events, focusing on community service, meme contests, and virtual
          workshops for professional development. They maintained connections
          with alumni and other Theta Tau chapters through online interactions.
        </p>

        <p>
          Throughout the Spring 2021 semester, the colony thrived by hosting
          virtual movie and game nights, organizing hiking trips, and providing
          professional development opportunities to the student body. They
          actively participated in regional conferences and fostered
          communication with the Zeta Gamma chapter. In June 2021, the colony's
          petition for chapter status was approved at the Theta Tau National
          Convention, and they became a chapter-elect.
        </p>

        <p>
          Looking forward, the chapter-elect anticipates their official
          installation as Psi Epsilon chapter and played a role in persuading
          the university to recognize them as a professional fraternity. With
          the COVID-19 situation improving, the fraternity envisions becoming a
          close campus community where engineering students can live, learn, and
          grow together.
        </p>

        <div></div>

        <h1> Regents Hall </h1>
        <div id="CurrentRegent"></div>
        <div id="PreviousRegents">
          <b>Previous Regents</b>
          <div id="regents-list" className="hor-flex">
            {previousRegents}
          </div>
        </div>

        <div>
          <div>
            <b>Current Regent</b>
            {current_regent_entry}
          </div>
          <div></div>
        </div>
        <h1> Family Tree </h1>
        {/* <FamilyTreeComponent /> */}
        <div id="cy-wrapper">
          <CytoScapeFamilyTree />
        </div>
      </div>
    );
  }
}

export default History;
