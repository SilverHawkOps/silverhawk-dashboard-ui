import { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";

const CPUChart = ({ totalLoad, perCoreLoad }) => {
  const series = [
    {
      name: "Per-Core Load",
      data: perCoreLoad
    }
  ];

  const options: ApexOptions = {
    chart: {
      type: "line",
      height: 200,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%"
      }
    },
    xaxis: {
      categories: perCoreLoad.map((_, i) => `Core ${i + 1}`)
    },
    yaxis: {
      max: 100,
      labels: {
        formatter: val => `${val}%`
      }
    },
    dataLabels: { enabled: true },
    colors: ["#4ade80"]
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-5">
      <h3 className="text-gray-700 dark:text-gray-300 font-semibold mb-2">CPU Usage</h3>
      <p className="font-bold text-gray-900 dark:text-white mb-4">Total Load: {totalLoad}%</p>
      <Chart options={options} series={series} type="bar" height={200} />
    </div>
  );
};

export default CPUChart;
