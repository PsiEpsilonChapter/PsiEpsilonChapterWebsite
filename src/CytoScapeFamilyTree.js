import React from "react";
import dagre from "cytoscape-dagre";
import cytoscape from "cytoscape";
import ReactDOM from "react-dom";
import CytoscapeComponent from "react-cytoscapejs";
import member_list from "./member_list";
import cytoscapeNodeHtmlLabel from "cytoscape-node-html-label";
import PsiEps from "./PsiEps.png";

cytoscape.use(dagre);
cytoscape.use(cytoscapeNodeHtmlLabel);
class CytoScapeFamilyTree extends React.Component {
  constructor(props) {
    super(props);
  }

  importAll(r) {
    console.log("r is ");
    console.log(r);
    console.log(r.keys());
    var mapped_arr = r.keys().map(r);
    var local_arr = r.keys();
    return [mapped_arr, local_arr];
  }
  elements = null;
  style = null;
  layout = null;
  cy = null;
  componentWillMount() {
    var temp = this.importAll(
      require.context("./images/member_images/", false, /\.(png)$/)
    );

    this.listOfImages = temp[0];
    this.listOfImageSrcs = temp[1];
  }

  componentDidMount() {
    var nodeElements = [];
    console.log("members are ");
    console.log(member_list["members"]);
    console.log(Object.entries(member_list["members"]));
    Object.values(member_list["members"]).forEach((value) => {
      nodeElements.push({ data: value });
    });
    Object.values(member_list["linkDataArray"]).forEach((value) => {
      nodeElements.push({ data: value });
    });
    this.cy = cytoscape({
      container: document.getElementById("cy"),
      boxSelectionEnabled: false,
      autounselectify: true,
      wheelSensitivity: 0.2,
      userZoomingEnabled: true, //滾輪縮放
      // wheelSensitivity: 1,
      // minZoom: 0.1,
      avoidOverlap: true,
      layout: this.layout,
      style: this.stylesheet,
      elements: this.elements,
    });
  }

  render() {
    this.labels = [
      {
        query: "node", // apply this template to all nodes
        halignBox: "center",
        valignBox: "center",
        halign: "center",
        valign: "center",
        tpl: (d) => `<div>${d.id}</div>`,
      },
    ];

    this.stylesheet = [
      {
        selector: "node",
        style: {
          "background-image": "data(img_src)",
          width: 30,
          height: 30,
          label: "data(name)",

          // "width": "mapData(score, 0, 0.006769776522008331, 20, 60)",
          // "height": "mapData(score, 0, 0.006769776522008331, 20, 60)",
          // "text-valign": "center",
          // "text-halign": "center",
          "overlay-padding": "6px",
          "z-index": "10",
          //text props
          "text-outline-color": "#4a56a6",
          "text-outline-width": "2px",
          color: "white",
          fontSize: 20,
        },
      },
      {
        selector: "node:selected",
        style: {
          "border-width": "6px",
          "border-color": "#AAD8FF",
          "border-opacity": "0.5",
          "background-color": "#77828C",
          width: 50,
          height: 50,
          //text props
          "text-outline-color": "#77828C",
          "text-outline-width": 8,
        },
      },
      {
        selector: "node[type='device']",
        style: {
          shape: "rectangle",
        },
      },
      {
        selector: "edge",
        style: {
          width: 3,
          // "line-color": "#6774cb",
          "line-color": "#AAD8FF",
          "target-arrow-color": "#6774cb",
          "target-arrow-shape": "triangle",
          "curve-style": "bezier",
        },
      },
    ];

    this.stylesheet = cytoscape.stylesheet().selector("node").css({
      height: 80,
      width: 80,
      "background-fit": "cover",
      "border-color": "#000",
      "border-width": 3,
      label: "data(name)",
      "background-image": PsiEps,
      "border-opacity": 0.5,
    });

    this.elements = this.prepElements();

    this.layout = {
      name: "dagre",
      directed: true,
      padding: 10,
      avoidOverlap: true,
      fit: true,
    };
    console.log("elements are ");
    console.log(this.elements);
    console.log("Layout is ");
    console.log(this.layout);
    console.log("Stylesheet is ");
    console.log(this.style);
    return (
      <CytoscapeComponent
        id="cy"
        elements={this.elements}
        style={{ width: "100%", height: "35vw" }}
        stylesheet={this.style}
        layout={this.layout}
        cy={(cy) => {
          this.cy = cy;
        }} // this gives you a reference to the current cytoscape instance
      />
    );
  }

  prepElements() {
    var data = [];
    var modded_members_list = [];
    for (const [key, value] of Object.entries(member_list["members"])) {
      var member_dict = value;
      member_dict["key"] = key;
      console.log("List of images is ");
      console.log(this.listOfImages);
      member_dict = { group: "nodes", data: member_dict };
      modded_members_list.push(member_dict);
      console.log("member is ");
      console.log(member_dict);
      var image = this.listOfImages.filter((image) => {
        console.log("Image is ");
        console.log(image);
        console.log("Key is ");
        console.log(key);
        if (image.includes(key)) {
          return image;
        }
      });
      console.log("Image match is ");
      console.log(image);
      modded_members_list.push(member_dict);
    }

    modded_members_list = modded_members_list.concat(
      member_list["linkDataArray"]
    );
    console.log("Modded members list is ");
    console.log(modded_members_list);
    return modded_members_list;

    return [
      {
        group: "nodes",
        data: { id: "cat" },
      },
      { group: "nodes", data: { id: "bird" } },
      { group: "nodes", data: { id: "ladybug" } },
      { group: "nodes", data: { id: "aphid" } },
      { group: "nodes", data: { id: "rose" } },
      { group: "nodes", data: { id: "grasshopper" } },
      { group: "nodes", data: { id: "plant" } },
      { group: "nodes", data: { id: "wheat" } },
      { group: "edges", data: { source: "cat", target: "bird" } },
      { group: "edges", data: { source: "bird", target: "ladybug" } },
      { group: "edges", data: { source: "bird", target: "grasshopper" } },
      { group: "edges", data: { source: "grasshopper", target: "plant" } },
      { group: "edges", data: { source: "grasshopper", target: "wheat" } },
      { group: "edges", data: { source: "ladybug", target: "aphid" } },
      { group: "edges", data: { source: "aphid", target: "rose" } },
    ];
  }
}

export default CytoScapeFamilyTree;

