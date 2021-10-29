import React from "react";
import { Scatter } from "react-chartjs-2";

const Graph = () => {
    const url = window.location.href.split('/').pop();
    console.log(url);
    let dataGraph = [];
  let dataGraph2 = [];
    switch(url) {
      case "MG":
          dataGraph = {
            data: [{
              x: 1,
              y: 0
            }, {
              x: 31,
              y: 10
            }, {
              x: 10,
              y: 5
            }, {
              x: 0.5,
              y: 5.5
            }],
          }
          dataGraph2 = {
            data: [{
              x: 1,
              y: 4
            }, {
              x: 31,
              y: 7
            }, {
              x: 10,
              y: 1
            }, {
              x: 0.5,
              y: 2
            }],
          }
          break;
      case "ST":
          dataGraph = {
            data: [4, 9, 2, 3, 1],
            labels: ["a", "b", "c", "d", "e"]
          }
          break;
      case "SMG":
          dataGraph = {
            data: [3, 5, 9, 1, 1],
            labels: ["a", "b", "c", "d", "e"]
          }
          break;
      case "ML":
          dataGraph = {
            data: [8, 8, 2, 3, 3],
            labels: ["a", "b", "c", "d", "e"]
          }
          break;
      case "PC":
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
        }, {
          label: "dgsg",
          data: dataGraph2.data,
          backgroundColor: "rgba(255,255,255,1)"
        }]
      };
    return ( 
    <div>
        <Scatter 
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