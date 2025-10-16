"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const NetworkTrafficChart = ({ data }) => {
  const labels = data.map(d => new Date(d.timestamp).toLocaleTimeString());
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
      markers: { width: 12, height: 12, radius: 12 },
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
      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-100 mb-2">
        Network Traffic
      </h2>
      <span>Since 30 min</span>
      <Chart options={options} series={series} type="line" height={300} />
    </div>
  )
};

export default NetworkTrafficChart;
