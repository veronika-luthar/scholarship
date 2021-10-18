import React from "react";
import { Bar } from "react-chartjs-2";

const Graph = () => {
    const url = window.location.href.split('/').pop();
  //  const areas = ["SA", "NA", "ME", "AF", "AS", "EU", "AU", "NZ"];
   
  let dataGraph = [];

  switch(url) {
    case "SA":
        dataGraph = [1, 2, 4, 8, 2]
        break;
    case "NA":
        dataGraph = [4, 9, 2, 3, 1]
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

    const chartData = {
        labels: ["a", "b", "c", "d", "h"], 
        datasets: [{
          label: "bob",
          data: dataGraph,
          backgroundColor: 'rgba(255,255,255,1)'
        }]
      };

    return ( <div>
        <Bar 
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Water Data"
            },
          }
        }} />
      </div> )
}

export default Graph;