import React from "react";
import { Scatter } from "react-chartjs-2";
import {southernSurfaceSample} from "../Data/SouthernSurfaceSample";

const Graph = () => {
    const url = window.location.href.split('/').pop();
    console.log(url);
    let dataGraph = [];

  function dataConversion(sourceData) {
    let allresult={};
    let dataset=[];

    for(let i = 0; i < sourceData.length; i++){
        
        let _name=sourceData[i].name;
        if ( ! allresult[_name] ) {
            allresult[_name]=[];
        }
        allresult[_name].push({x: sourceData[i].date.split('/')[0], y: sourceData[i].result});
    }

    for (const _name in allresult) {
        let _data=allresult[_name];
        let newDataset = {label: _name, data: _data, backgroundColor: randomColour()};
        dataset.push(newDataset);
    }
    return {
        datasets: dataset
    }
}

function randomColour() {
  let colour = "rgb(";
  for(let i = 0; i < 3; i++){
    let colourCode = Math.floor(Math.random() * 256) + 1;
    colour += colourCode + ","

  }
  return colour + "1)";
}



//  const fgg = {
//   datasets: [{
//     label: 'Scatter Dataset',
//     data: [{
//       x: -10,
//       y: 0
//     }, {
//       x: 0,
//       y: 10
//     }, {
//       x: 10,
//       y: 5
//     }, {
//       x: 0.5,
//       y: 5.5
//     }],
//     backgroundColor: 'rgb(255, 99, 132)'
//   }],
// }

// function bob(_dataset) {
//   let dataset = _dataset.datasets;
//     for(let i = 0; i < dataset.length; i ++){
//       console.log(dataset[i].label);
//       for(let j = 0; j < dataset[i].data.length; j++){
//         console.log(dataset[i].data[j].x + " " + dataset[i].data[j].y);
//       }
//     }
// }

let chartData;


    switch(url) {
      case "MG":
          chartData = dataConversion(southernSurfaceSample);
         // bob(chartData);
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
    // let barColor = [];
    // for(let i = 0; i < dataGraph.data.length; ){
    //   if(dataGraph.data[i] <= 1){
    //     dataGraph.labels.splice([i], 1);
    //     dataGraph.data.splice([i], 1);
    //     continue;
    //   }
    //   if(dataGraph.data[i] > 3 && dataGraph.data[i] < 5 ){
    //     barColor.push('rgba(253,253,150,1)');
    //   }
    //   else if(dataGraph.data[i] > 5){
    //     barColor.push('rgba(255,105,97,1)');
    //   }
    //   else {
    //     barColor.push('rgba(119,221,119,1)');
    //   }
    //   i++;
    // } 

    // const chartData = {
    //     labels: dataGraph.labels, 
    //     datasets: [{
    //       label: "bob",
    //       data: dataGraph.data,
    //       backgroundColor: barColor,
    //       // color: "rgba(255,255,255,1)"
    //     }, {
    //       label: "dgsg",
    //       data: dataGraph2.data,
    //       backgroundColor: "rgba(255,255,255,1)"
    //     }]
    //   };
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
              suggestedMax: 0.01,
              ticks: {
                color: "rgba(255,255,255,1)"
              }
          },
          x: {
            suggestedMax: 31,
            suggestedMin:  1,
              ticks: {
                stepSize: 1,
                color: "rgba(255,255,255,1)"
              }
          }
        }
        }} />
      </div> )
}

export default Graph;