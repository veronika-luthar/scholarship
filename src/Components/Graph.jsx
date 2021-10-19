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
        dataGraph = [[4, 9, 2, 3, 1],["s","s","s","s","s",]]
        break;
    case "EU":
        dataGraph = [{name: "helo", data: 3}, 5, 9, 1, 1]
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
        barColor.push('rgba(253,253,150,1)');
      }
      else if(dataGraph[i] > 5){
        barColor.push('rgba(255,105,97,1)');
      }
      else {
        barColor.push('rgba(119,221,119,1)');
      }
    }

    const chartData = {
        labels: dataGraph[1], 
        datasets: [{
          label: "bob",
          data: dataGraph[0],
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