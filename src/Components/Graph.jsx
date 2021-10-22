import React from "react";
import { Bar } from "react-chartjs-2";

const Graph = () => {
    const url = window.location.href.split('/').pop();
    
    let dataGraph = [];

    switch(url) {
      case "SA":
          dataGraph = {
            data: [1, 2, 4, 8, 2],
            labels: ["a", "b", "c", "d", "e"]
          }
          break;
      case "NA":
          dataGraph = {
            data: [4, 9, 2, 3, 1],
            labels: ["a", "b", "c", "d", "e"]
          }
          break;
      case "EU":
          dataGraph = {
            data: [3, 5, 9, 1, 1],
            labels: ["a", "b", "c", "d", "e"]
          }
          break;
      case "ME":
          dataGraph = {
            data: [8, 8, 2, 3, 3],
            labels: ["a", "b", "c", "d", "e"]
          }
          break;
      case "AU":
          dataGraph = {
            data: [1, 2, 2, 1, 0],
            labels: ["a", "b", "c", "d", "e"]
          }
          break;  
      case "AS":
          dataGraph = {
            data: [8, 7, 7, 9, 3],
            labels: ["a", "b", "c", "d", "e"]
          }
          break; 
      case "AF":
          dataGraph = {
            data: [0, 1, 2, 1, 7],
            labels: ["a", "b", "c", "d", "e"]
          }
          break;
      }
    
    // let test = dataGraph.data.filter(result => result.length > 1);
    // console.log(test);
    let barColor = [];
    for(let i = 0; i < dataGraph.data.length; ){
      if(dataGraph.data[i] <= 1){
        dataGraph.labels.splice([i], 1);
        dataGraph.data.splice([i], 1);
        continue;
      }
      if(dataGraph.data[i] > 3 && dataGraph.data[i] < 5 ){
        barColor.push('rgba(253,253,150,1)');
      }
      else if(dataGraph.data[i] > 5){
        barColor.push('rgba(255,105,97,1)');
      }
      else {
        barColor.push('rgba(119,221,119,1)');
      }
      i++;
    }

    const chartData = {
        labels: dataGraph.labels, 
        datasets: [{
          label: "bob",
          data: dataGraph.data,
          backgroundColor: barColor,
          // color: "rgba(255,255,255,1)"
        }]
      };
    return ( <div>
        <Bar 
        //className="white-background"
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Water Data",
              color: "rgba(255,255,255,1)"
            },
          },
         scales: {
          y: {
              suggestedMin: 0,
              suggestedMax: 10,
              ticks: {
                color: "rgba(255,255,255,1)"
              }
          },
          x: {
              ticks: {
                color: "rgba(255,255,255,1)"
              }
          }
        }
        }} />
      </div> )
}

export default Graph;