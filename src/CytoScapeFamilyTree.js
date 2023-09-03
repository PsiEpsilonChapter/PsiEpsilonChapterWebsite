import React from 'react';
import dagre from 'cytoscape-dagre';
import cytoscape from 'cytoscape';
import ReactDOM from 'react-dom';
import CytoscapeComponent from 'react-cytoscapejs';
import member_list from './member_list';

cytoscape.use(dagre);

class CytoScapeFamilyTree extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
  const layout = {name: 'dagre'};
  var nodeElements = [];
  console.log("members are ");
  console.log(member_list["members"]);
  console.log(Object.entries(member_list["members"]));
  // for(const [key,value] in Object.entries(member_list["members"])) {
  //   console.log("Value is ");
  //   console.log(value);
  //   console.log("Key is ");
  //   console.log(key);
  //   nodeElements.push({data: value});
  // }
  Object.values(member_list["members"]).forEach( value => { nodeElements.push({data: value})});
  Object.values(member_list["linkDataArray"]).forEach(value => {nodeElements.push({data: value})});

  var elements = nodeElements;

    return <CytoscapeComponent elements={elements} layout={layout} style={ { width: '100%', height: '60vh' } } />;
  }
}

export default CytoScapeFamilyTree;