import React, { useRef,useState,useEffect } from "react";
import { Scatter } from "react-chartjs-2";
import {southernMetal, southernChlorine, southernTotalCloroforms, southernEColi} from "../Data/Southern";
import {mountGrandMetal, mountGrandChlorine, mountGrandTotalCloroforms, mountGrandEColi} from "../Data/MountGrand";
import {mosgielMetal, mosgielChlorine, mosgielTotalCloroforms, mosgielEColi} from "../Data/Mosgiel";
import {portChalmersMetal, portChalmersChlorine, portChalmersTotalCloroforms, portChalmersEColi} from "../Data/PortChalmers";
import {southernMountGrandMetal, southernMountGrandChlorine, southernMountGrandTotalCloroforms, southernMountGrandEColi} from "../Data/Southern-MountGrand";


const Graph = () => {

    const [stateChart, setStateChart] = useState({});

    let chartData;

    const url = window.location.href.split('/').pop();
    const ref = useRef();

    useEffect(() => {
      setStateChart(chartData);
  }, []);

    // converts data from js files to format needed by chartjs
    function dataConversion(sourceData) {
      let allresult={};
      let dataset=[];

      for(let i = 0; i < sourceData.length; i++){
          //sets object name to the name of substance in raw data
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
    //creates colour based on string hash
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

      function test(e){
        updateChart(e.target.defaultValue);
      }

      //updates chart and data
      function updateChart(chartType) {
        
        switch(url) {

          case "MG":
            switch(chartType) {
              case "Chlorine":
                chartData = dataConversion(mountGrandChlorine);
                break;
              case "Metal":
                chartData = dataConversion(mountGrandMetal);
                break;
              case "Total Cloroforms":
                chartData = dataConversion(mountGrandTotalCloroforms);
                break;
              case "E. Coli":
                chartData = dataConversion(mountGrandEColi);
                break;
              }
              break;

          case "ST":
            switch(chartType) {
              case "Chlorine":
                chartData = dataConversion(southernChlorine);
                break;
              case "Metal":
                chartData = dataConversion(southernMetal);
                break;
              case "Total Cloroforms":
                chartData = dataConversion(southernTotalCloroforms);
                break;
              case "E. Coli":
                chartData = dataConversion(southernEColi);
                break;
              }
              break;

          case "SMG":
            switch(chartType) {
              case "Chlorine":
                chartData = dataConversion(southernMountGrandChlorine);
                break;
              case "Metal":
                chartData = dataConversion(southernMountGrandMetal);
                break;
              case "Total Cloroforms":
                chartData = dataConversion(southernMountGrandTotalCloroforms);
                break;
              case "E. Coli":
                chartData = dataConversion(southernMountGrandEColi);
              break;
            }
              break;

          case "ML":
            switch(chartType) {
              case "Chlorine":
                chartData = dataConversion(mosgielChlorine);
                break;
              case "Metal":
                chartData = dataConversion(mosgielMetal);
                break;
              case "Total Cloroforms":
                chartData = dataConversion(mosgielTotalCloroforms);
                break;
              case "E. Coli":
                chartData = dataConversion(mosgielEColi);
                break;
            }
              break;

          case "PC":
            switch(chartType) {
              case "Chlorine":
                chartData = dataConversion(portChalmersChlorine);
                break;
              case "Metal":
                chartData = dataConversion(portChalmersMetal);
                break;
              case "Total Cloroforms":
                chartData = dataConversion(portChalmersTotalCloroforms);
                break;
              case "E. Coli":
                chartData = dataConversion(portChalmersEColi);
                break;
            }
              break;
          }
          setStateChart(chartData);

    }

    let results = ["Chlorine", "E. Coli", "Total Cloroforms", "Metal"];
    
    return ( 
    <div className="chart-container" ><h1 className="white-text">I want to check for:</h1>
      {results.map(function(name, i) {
          return <label className="radio-text" key={name}><input name="radioGroup" /* defaultChecked={name=="Metal"} */ type="radio" value={name} onClick={test}/>{name}</label>;
          })}
    <Scatter 
        ref={ref}
        
        data={stateChart}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              labels: {
                  color: 'rgba(255, 255, 255, 1)'
              }
            },
            title: {
              display: true,
              text: "Water Supply Testing Results",
              color: "rgba(255,255,255,1)"
            },
            tooltip: {
              callbacks: {
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