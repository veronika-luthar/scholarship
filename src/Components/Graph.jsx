import React from "react";

const Graph = () => {
    const url = window.location.href.split('/').pop();
  //  const areas = ["SA", "NA", "ME", "AF", "AS", "EU", "AU", "NZ"];
   
  let dataGraph;

  switch(url) {
    case "SA":
        dataGraph = <h1>South America</h1>
        break;
    case "NA":
        dataGraph = <h1>North America</h1>
        break;
    case "EU":
        dataGraph = <h1>Europe</h1>
        break;
    case "ME":
        dataGraph = <h1>Middle East</h1>
        break;
    case "AU":
        dataGraph = <h1>Australia</h1>
        break;  
    case "AS":
        dataGraph = <h1>Asia</h1>
        break;  
    }

    return ( dataGraph )
}

export default Graph;