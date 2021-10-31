import React from "react";
import { Scatter } from "react-chartjs-2";
import {southernSurfaceSample} from "../Data/SouthernSurfaceSample";


const Graph = () => {
    let chartData;

    const url = window.location.href.split('/').pop();

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
        let colourCode = Math.floor(Math.random() * 256) + 50;
        colour += colourCode + ","

      }
      return colour + "1)";
    }

    switch(url) {
      case "MG":
          chartData = dataConversion(southernSurfaceSample);
          break;
      case "ST":
          chartData = dataConversion(southernSurfaceSample);
          break;
      case "SMG":
          chartData = dataConversion(southernSurfaceSample);
          break;
      case "ML":
          chartData = dataConversion(southernSurfaceSample);
          break;
      case "PC":
          chartData = dataConversion(southernSurfaceSample);
          break;
      }

    return ( 
    <div>
        <Scatter 
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