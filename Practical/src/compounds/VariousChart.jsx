import React from "react";
// import { Line } from "react-chartjs-2";
// function VariousChart() {
//   const data = {
//     labels: ["jan", "feb", "march", "april", "may"],
//     datasets: [
//       {
//         label: "sales at each month",
//         data: [2, 3, 6, 1, 4],
//         borderColor: ["rgba(255,206,86,1)"],
//         backgroundColor: ["rgba(255,2,86,0.2)"],
//         pointBackgroundColor: [
//           "rgba(255,2,86,1)",
//           "rgba(255,2,86,1)",
//           "rgba(255,2,86,1)",
//         ],

//         pointBorderColor: [
//           "rgba(255,200,221,1)",
//           "rgba(255,200,221,1)",
//           "rgba(255,200,221,1)",
//           "rgba(255,200,221,1)",
//           "rgba(255,200,221,1)",
//         ],
//       },
//       {
//         label: "sales at each month",
//         data: [1, 2, 4, 3, 5],
//         borderColor: ["rgba(255,20,86,1)"],
//         backgroundColor: ["rgba(255,2,86,0.2)"],
//       },
//     ],
//   };
//   const options = {
//     title: {
//       display: true,
//       text: "Line chart",
//     },
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             min: 0,
//             max: 7,
//             stepSize: 1,
//           },
//         },
//       ],
//     },
//   };
//   return (
//     <div style={{ width: "900px", marginLeft: "1rem" }}>
//       <Line data={data} options={options} />
//     </div>
//   );
// }

import { Bar } from "react-chartjs-2";
function VariousChart() {
  const data = {
    labels: ["jan", "feb", "march", "april", "may"],
    datasets: [
      {
        label: "frist mothly income",
        data: [0.5, 0.9, 2, 1, 0.6],
        // borderColor: ["rgba(255,206,86,1)"],
        backgroundColor: ["rgba(255,2,86,0.2)","rgba(255,2,86,0.2)","rgba(255,2,86,0.2)","rgba(255,2,86,0.2)","rgba(255,2,86,0.2)"],
      },
      {
        label: "second mothly income",
        data: [0.4, 0.8, 1, 1, 0.7],
        backgroundColor: ["rgba(255,2,86,0.1)","rgba(255,2,86,0.1)","rgba(255,2,86,0.1)","rgba(255,2,86,0.1)","rgba(255,20,286,0.1)"],
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
}

export default VariousChart;
