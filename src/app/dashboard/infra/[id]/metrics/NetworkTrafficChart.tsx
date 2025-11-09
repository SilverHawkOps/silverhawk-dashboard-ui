"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { InfoIcon } from "lucide-react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });



interface NetworkTrafficChartProps {
  data: {
    timestamp: string;
    rx_bytes: number;
    tx_bytes: number;
  }[];
}

// function detectAnomaly(dataPoints) {
//   if (dataPoints.length < 3) {
//     return {
//       isAnomaly: false,
//       message: "Not enough data to detect anomalies.",
//     };
//   }

//   const history = dataPoints.slice(0, -1);
//   const latest = dataPoints[dataPoints.length - 1];

//   const mean = history.reduce((a, b) => a + b, 0) / history.length;
//   const variance = history.reduce((a, b) => a + (b - mean) ** 2, 0) / history.length;
//   const stdDev = Math.sqrt(variance);
//   const zScore = (latest - mean) / stdDev;

//   const isAnomaly = Math.abs(zScore) > 3;

//   // 🧠 Smart reactive message
//   let message;
//   if (isAnomaly) {
//     if (latest > mean) {
//       message = `⚠️ High latency detected! Current response time (${latest}ms) is significantly above the average (${mean.toFixed(1)}ms).`;
//     } else {
//       message = `⚠️ Unusually low latency detected (${latest}ms). Possible sampling or reporting anomaly.`;
//     }
//   } else {
//     if (latest > mean * 1.2) {
//       message = `📈 Slight increase in response time (${latest}ms) compared to average (${mean.toFixed(1)}ms). Keep monitoring.`;
//     } else if (latest < mean * 0.8) {
//       message = `📉 Slight decrease in response time (${latest}ms). System seems to be responding faster than usual.`;
//     } else {
//       message = `✅ Response time is normal (${latest}ms, mean ${mean.toFixed(1)}ms).`;
//     }
//   }

//   return {
//     isAnomaly,
//     zScore: Number(zScore.toFixed(2)),
//     mean: Number(mean.toFixed(2)),
//     stdDev: Number(stdDev.toFixed(2)),
//     message,
//   };
// }

const NetworkTrafficChart: React.FC<NetworkTrafficChartProps> = ({ data }) => {

  const labels = data.map(d => d.timestamp);
  const rxSeries = data.map(d => d.rx_bytes / 1024); // convert to KB
  const txSeries = data.map(d => d.tx_bytes / 1024);

  const series = [
    { name: "Inbound (Rx)", data: rxSeries },
    { name: "Outbound (Tx)", data: txSeries },
  ];

  const options: ApexOptions = {
    chart: {
      type: "area",
      height: 300,
      toolbar: { show: false },
      zoom: { enabled: true },
    },
    colors: ["#3b82f6", "#f97316"], // blue for Rx, orange for Tx
    stroke: {
      curve: "monotoneCubic",
      width: 2,
    },
    markers: { size: 0 },
    grid: {
      borderColor: "#e5e7eb",
      strokeDashArray: 3,
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8,
      }
    },
    xaxis: {
      categories: labels,
      labels: { rotate: -45, style: { colors: "#6b7280" } },
      title: { text: "Time", style: { color: "#374151" } },
    },
    yaxis: {
      labels: { formatter: val => `${val.toFixed(0)} KB`, style: { colors: "#6b7280" } },
      title: { text: "Network Traffic", style: { color: "#374151" } },
    },
    tooltip: {
      x: { formatter: val => `Time: ${val}` },
      y: { formatter: val => `${val.toFixed(2)} KB` },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      markers: {},
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: { height: 200 },
          xaxis: { labels: { show: false } },
        },
      },
    ],
  };


  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-md">
      <div className="flex justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-100 mb-2">
            Network Traffic
          </h2>
          <span>Since 30 min</span>
        </div>
        <div>
          <InfoIcon />
        </div>
      </div>
      <Chart options={options} series={series} type="line" height={300} />
    </div>
  )
};

export default NetworkTrafficChart;