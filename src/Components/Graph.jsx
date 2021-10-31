import React from "react";
import { Scatter } from "react-chartjs-2";
import {southernSurfaceSample} from "../Data/SouthernSurfaceSample";
import {mountGrand} from "../Data/MountGrand";
import {mosgiel} from "../Data/Mosgiel";
import {portChalmers} from "../Data/PortChalmers";
import {southernMountGrand} from "../Data/Southern-MountGrand";


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
          let newDataset = {label: _name, data: _data, backgroundColor: randomColour(), pointRadius: 10, pointHoverRadius: 10};
          dataset.push(newDataset);
      }
      return {
          datasets: dataset
      }
  }

    function randomColour() {
      let colour = "rgba(";
      for(let i = 0; i < 3; i++){
        let colourCode = Math.floor(Math.random() * 256) + 50;
        colour += colourCode + ","

      }
      return colour + "1)";
    }

    switch(url) {
      case "MG":
          chartData = dataConversion(mountGrand);
          break;
      case "ST":
          chartData = dataConversion(southernSurfaceSample);
          break;
      case "SMG":
          chartData = dataConversion(southernMountGrand);
          break;
      case "ML":
          chartData = dataConversion(mosgiel);
          break;
      case "PC":
          chartData = dataConversion(portChalmers);
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
            title: {
              display: true,
              text: "Quantity (g/m³)",
              color: "rgba(255,255,255,1)",
              font: {
                  size: 20
              }},
              suggestedMin: 0,
              suggestedMax: 0.01,
              ticks: {
                color: "rgba(255,255,255,1)"
              }
          },
          x: {
            title: {
              display: true,
              text: "March (days)",
              color: "rgba(255,255,255,1)",
              font: {
                  size: 20
              }},
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