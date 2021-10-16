import React from "react";

const Graph = () => {
    const url = window.location.href.split('/').pop();
  //  const areas = ["SA", "NA", "ME", "AF", "AS", "EU", "AU", "NZ"];
   
  switch(url) {
    case "SA":
        console.log("South America");
        break;
    case "NA":
        console.log("North America");
        break;
    case "EU":
        console.log("Europe");
        break;
    case "ME":
        console.log("Middle East");
        break;  

    }

    return (  )
}

export default Graph;