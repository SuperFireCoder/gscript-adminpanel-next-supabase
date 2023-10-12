"use client";
import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface DonutChart {
  series: number[];
}

const options: ApexOptions = {
  title: {
    text: "900",
    style: { fontSize: "28px", fontWeight: "700", color: "#111927" },
    align: "center",
    offsetY: 210,
  },
  subtitle: {
    text: "Active Subscriptions",
    style: { fontSize: "16px", fontWeight: "500", color: "#6C737F" },
    align: "center",
    offsetY: 250,
  },
  chart: {
    type: "donut",
  },
  colors: ["#0FADCF", "#3C50E0", "#0D0561"],
  labels: ["Cancelled", "Subscribed", "Trial"],
  legend: {
    show: true,
    position: "bottom",
  },
  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 600,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const DonutChart: React.FC = () => {
  const [state, setState] = useState<DonutChart>({
    series: [650, 216, 200],
  });

  return (
    <ReactApexChart options={options} series={state.series} type="donut" />
  );
};

export default DonutChart;
