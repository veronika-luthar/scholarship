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
          let newDataset = {label: _name, data: _data, backgroundColor: stringToColour(_name), pointRadius: 10, pointHoverRadius: 10};
          dataset.push(newDataset);
      }
      return {
          datasets: dataset
      }
  }
  
    function stringToColour(str) {
      let stringHash = 0;

      for(let i = 0; i < str.length; i++){
        stringHash = str.charCodeAt(i) + ((stringHash << 5) - stringHash);
      }

      let colour = '#';
      for(let i = 0; i < 3; i++){
        let value = (stringHash >> (i * 5)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
      }
      return colour;
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
    <div className="chart-container" >
        <Scatter 
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: true,
              labels: {
                  color: 'rgba(255, 255, 255, 1)'
              }
            },
            title: {
              display: true,
              text: "Water Data",
              color: "rgba(255,255,255,1)"
            },
            tooltip: {
              callbacks: {

                //   beforeLabel: function (tooltipItem) {
 
                //     let tooltipLabel=tooltipItem.dataset.label;              
                //     return tooltipLabel;
                    
                // },
                 label:  function (tooltipItem) {
 
                  let tooltipLabel=tooltipItem.dataset.label;              
                  return tooltipLabel;
                 }

              }
            }
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
              text: "March (days tested)",
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