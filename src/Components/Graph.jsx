import React, { useRef,useState,useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Scatter } from "react-chartjs-2";
import {southernMetal, southernChlorine, southernTotalColiforms, southernEColi} from "../Data/Southern";
import {mountGrandMetal, mountGrandChlorine, mountGrandTotalColiforms, mountGrandEColi} from "../Data/MountGrand";
import {mosgielMetal, mosgielChlorine, mosgielTotalColiforms, mosgielEColi} from "../Data/Mosgiel";
import {portChalmersMetal, portChalmersChlorine, portChalmersTotalColiforms, portChalmersEColi} from "../Data/PortChalmers";
import {southernMountGrandMetal, southernMountGrandChlorine, southernMountGrandTotalColiforms, southernMountGrandEColi} from "../Data/Southern-MountGrand";


const Graph = () => {

    const initState = { datasets: [], labels: [] };
    const [stateChart, setStateChart] = useState(initState);

    let chartData;
    const { pathname } = useLocation();
    const ref = useRef();

    //sets new data for chart
    useEffect(() => {
      setStateChart(chartData);
      
  }, []);

    //converts data from js files to format needed by chartjs
    function dataConversion(sourceData) {
      let allresult={};
      let dataset=[];
      let labels={};

      for(let i = 0; i < sourceData.length; i++){
          //sets object name to the name of substance in raw data
          let _name=sourceData[i].name;
          if ( ! allresult[_name] ) {
              allresult[_name]=[];
          }
          let _label = sourceData[i].date.replaceAll('/','-');
          labels[_label]=1;
          allresult[_name].push({x: _label, y: sourceData[i].result});
      }

      //fills out dataset for each substance and pushes it to a new dataset
      for (const _name in allresult) {
          let _data=allresult[_name];
          let newDataset = {label: _name, data: _data, backgroundColor: stringToColour(_name), pointRadius: 10, pointHoverRadius: 10};
          dataset.push(newDataset);
      }

      return {
          labels: Object.keys(labels).map(function(key) {
            return key;
          }),
          datasets: dataset
      }
  }

    //creates colour based on string
    const stringToColour = require('string-to-color');

      //updates chart
      function reloadChart(e){
        updateChart(e.target.defaultValue);
      }

      //updates chart and data
      function updateChart(chartType) {
        
        //switch to determine what zone was clicked on
        switch(pathname) {
          case "/MG":
            
          //switch to determine what radio button was clicked and what data to show
            switch(chartType) {
              case "Free Available Chlorine":
                chartData = dataConversion(mountGrandChlorine);
                break;
              case "Metal":
                chartData = dataConversion(mountGrandMetal);
                break;
              case "Total Coliforms":
                chartData = dataConversion(mountGrandTotalColiforms);
                break;
              case "E. Coli":
                chartData = dataConversion(mountGrandEColi);
                break;
              }
              break;

          case "/ST":
            switch(chartType) {
              case "Free Available Chlorine":
                chartData = dataConversion(southernChlorine);
                break;
              case "Metal":
                chartData = dataConversion(southernMetal);
                break;
              case "Total Coliforms":
                chartData = dataConversion(southernTotalColiforms);
                break;
              case "E. Coli":
                chartData = dataConversion(southernEColi);
                break;
              }
              break;

          case "/SMG":
            switch(chartType) {
              case "Free Available Chlorine":
                chartData = dataConversion(southernMountGrandChlorine);
                break;
              case "Metal":
                chartData = dataConversion(southernMountGrandMetal);
                break;
              case "Total Coliforms":
                chartData = dataConversion(southernMountGrandTotalColiforms);
                break;
              case "E. Coli":
                chartData = dataConversion(southernMountGrandEColi);
              break;
            }
              break;

          case "/ML":
            switch(chartType) {
              case "Free Available Chlorine":
                chartData = dataConversion(mosgielChlorine);
                break;
              case "Metal":
                chartData = dataConversion(mosgielMetal);
                break;
              case "Total Coliforms":
                chartData = dataConversion(mosgielTotalColiforms);
                break;
              case "E. Coli":
                chartData = dataConversion(mosgielEColi);
                break;
            }
              break;

          case "/PC":
            switch(chartType) {
              case "Free Available Chlorine":
                chartData = dataConversion(portChalmersChlorine);
                break;
              case "Metal":
                chartData = dataConversion(portChalmersMetal);
                break;
              case "Total Coliforms":
                chartData = dataConversion(portChalmersTotalColiforms);
                break;
              case "E. Coli":
                chartData = dataConversion(portChalmersEColi);
                break;
            }
              break;
          }
          //sets the new data
          setStateChart(chartData);
    }

    //radio button options
    let results = ["Free Available Chlorine", "E. Coli", "Total Coliforms", "Metal"];
    
    return ( 
    <div className="chart-container" ><h1 className="white-text">I want to check for:</h1>
    {/* creates a radio button and label for every item in array*/ }
      {results.map(function(name, i) {
          return <label className="radio-text" key={name}><input name="radioGroup" type="radio" value={name} onClick={reloadChart}/>{name}</label>;
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
                /* renames tooltip to name of substance */
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
            type: "category",
              title: {
                display: true,
                text: "Days tested (date)",
                color: "rgba(255,255,255,1)",
               font: {
                   size: 20
               }},
               ticks: {
                 /* sets x axis to show dates */
                 callback: function(value, index) {
                  return this.getLabelForValue(value);
                 },
                 color: "rgba(255,255,255,1)"
               }
           }
        }
        }} />
        
      </div> )
}

export default Graph;