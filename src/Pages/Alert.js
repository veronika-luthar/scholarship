import { getByDisplayValue } from "@testing-library/dom";
import React from "react";
import { Bar } from "react-chartjs-2";

function Alert() {
  const chartData = {
    labels: ["a", "b", "c", "d", "h"], 
    datasets: [{
      label: "bob",
      data: [5, 10, 6, 3, 12],
      backgroundColor: 'rgba(255,255,255,1)'
    }]
  };
    return (
        <div>
          <Bar 
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Water Data"
              },
            }
          }} />
        </div>
    )
}

export default Alert;