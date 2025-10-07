"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CPUChart = ({ data }) => {
  const labels = data.map((d) => d.timestamp);
  const cpuLoad = data.map((d) => d.cpu.load);

  const series = [
    {
      name: "CPU Load (%)",
      data: cpuLoad,
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "line",
      height: 350,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    colors: ["#10b981"], // base color (greenish)
    stroke: {
      curve: "smooth",
      width: 3, // thicker stroke for better visibility
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    markers: {
      size: 0,
    },
    grid: {
      borderColor: "#e5e7eb",
      strokeDashArray: 4,
      padding: { left: 10, right: 10 },
    },
    xaxis: {
      categories: labels,
      labels: {
        show: false,
        rotate: -45,
        style: { colors: "#6b7280" },
      },
      title: { text: "Time", style: { color: "#374151" } },
      axisBorder: { color: "#d1d5db" },
      axisTicks: { color: "#d1d5db" },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: {
        style: { colors: "#6b7280" },
      },
      title: {
        text: "CPU Load (%)",
        style: { color: "#374151", fontWeight: 600 },
      },
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: { height: 250 },
          xaxis: { labels: { show: false } },
        },
      },
    ],
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-100 mb-2">
        CPU Load Over Time
      </h2>
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default CPUChart;
