"use client";
import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic( () => import( "react-apexcharts" ), { ssr: false } );

export default function SystemHealthChart() {
    const series = [
        { name: "CPU Usage", data: [ 45, 52, 38, 45, 19, 23, 42 ] },
        { name: "Memory Usage", data: [ 35, 41, 36, 26, 45, 48, 52 ] },
        { name: "Requests", data: [ 240, 280, 300, 260, 320, 400, 380 ] },
    ];

    const options = {
        chart: {
            type: "area",
            height: 300,
            toolbar: { show: false },
            zoom: { enabled: false },
        },
        colors: [ "#4f46e5", "#22c55e", "#f59e0b" ],
        dataLabels: { enabled: false },
        stroke: { curve: "smooth", width: 2 },
        xaxis: {
            categories: [ "10:00", "10:05", "10:10", "10:15", "10:20", "10:25", "10:30" ],
            labels: { style: { colors: "#6b7280" } },
        },
        yaxis: {
            labels: { style: { colors: "#6b7280" } },
        },
        legend: {
            position: "top",
            labels: { colors: "#6b7280" },
        },
        grid: {
            borderColor: "#e5e7eb",
            strokeDashArray: 4,
        },
        tooltip: { theme: "light" },
    };

    return <Chart options={ options } series={ series } type="area" height={ 300 } />;
}
