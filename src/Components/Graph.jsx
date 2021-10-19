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
        dataGraph = [3, 5, 9, 1, 1]
        break;
    case "ME":
        dataGraph = [8, 8, 2, 3, 3]
        break;
    case "AU":
        dataGraph = [1, 2, 2, 1, 0]
        break;  
    case "AS":
        dataGraph = [8, 7, 7, 9, 3]
        break; 
    case "AF":
        dataGraph = [0, 1, 2, 1, 7]
        break;
    }

    let barColor = [];
    for(let i = 0; i < dataGraph.length; i++){
      if(dataGraph[i] > 3 && dataGraph[i] < 5 ){
        barColor.push('rgba(255,255,0,1)');
      }
      else if(dataGraph[i] > 5){
        barColor.push('rgba(255,0,0,1)');
      }
      else {
        barColor.push('rgba(0,255,0,1)');
      }
    }

    const chartData = {
        labels: ["a", "b", "c", "d", "h"], 
        datasets: [{
          label: "bob",
          data: dataGraph,
          backgroundColor: barColor
        }]
      };

    return ( <div>
        <Bar 
        data={chartData}
        options={{
        //  plugins: {
          //  title: {
           //   display: true,
          //    text: "Water Data"
          //  },
         // },
         scales: {
          y: {
              suggestedMin: 0,
              suggestedMax: 10
          }
        }
        }} />
      </div> )
}

export default Graph;