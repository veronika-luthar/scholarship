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
    const [stateLabels, setStateLabels] = useState(['0','1']);

    const labarr =['03-04-2021', '09-04-2021', '07-05-2021', '11-05-2021', '25-05-2021', '08-06-2021', '16-06-2021', '03-07-2021', '20-07-2021', '06-08-2021', '10-08-2021', '24-08-2021', '07-09-2021', '15-09-2021', '02-10-2021', '25-08-2021', '26-08-2021', '27-08-2021', '28-08-2021', '29-08-2021', '30-08-2021', '01-09-2021', '02-09-2021', '03-09-2021', '04-09-2021', '05-09-2021', '06-09-2021', '08-09-2021', '09-09-2021', '10-09-2021', '11-09-2021', '12-09-2021', '13-09-2021', '03-10-2021', '04-10-2021', '05-10-2021', '06-10-2021'];

    let chartData;
    const { pathname } = useLocation();
    const ref = useRef();

    useEffect(() => {
      setStateChart(chartData);
      
  }, []);

    // converts data from js files to format needed by chartjs
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
        
        switch(pathname) {

          case "/MG":
            switch(chartType) {
              case "Chlorine":
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
              case "Chlorine":
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
              case "Chlorine":
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
              case "Chlorine":
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
              case "Chlorine":
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
          setStateChart(chartData);
          setStateLabels(chartData.labels);


    }

    let results = ["Chlorine", "E. Coli", "Total Coliforms", "Metal"];
    
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
            type: "category",
            labels: [{stateLabels}],
              title: {
                display: true,
                text: "Days tested (date)",
                color: "rgba(255,255,255,1)",
               font: {
                   size: 20
               }},
               ticks: {
                 callback: function(value, index, values) {
                  return index === 0 ? '' : this.getLabelForValue(value);
                 },
                 color: "rgba(255,255,255,1)"
               }
           }
        }
        }} />
        
      </div> )
}

export default Graph;