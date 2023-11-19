import { chartsConfig } from "@/configs";

const websiteViewsChart = {
  type: "bar",
  height: 220,
  series: [
    {
      name: "Views",
      data: [50, 20, 10, 22, 50, 10, 40],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#fff",
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
  },
};

const websiteDataChart = {
  type: "area",
  height: 380,
  series: [
    {
      name: "FY21_22",
      data: [
        535.56, 0.22, 138.2, 0.21, 145.57, 133.13, 65.88, 50.45, 102.75, 162.88,
        1.66, 73.3, 25.89, 154.89, 4.05,
      ],
    },

    {
      name: "FY22_23",
      data: [
        199.8, 0.25, 20.16, 0.18, 99.03, 76.66, 64.22, 11.23, 108.75, 154.35,
        0.38, 14.8, 14.08, 121.09, 5.53,
      ],
    },
  ],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
  options: {
    ...chartsConfig,
    colors: ["#2E93fA", "#66DA26", "#546E7A", "#E91E63", "#FF9800"],
    stroke: {
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    yaxis: {
      ...chartsConfig.yaxis,
      tickAmount: 15, // Divide the y-axis into 10 ticks
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Cashew",
        "Castor Oil",
        "Coffee",
        "Groundnut",
        "Natural Rubber",
        "Pulses",
        "Sesame seeds",
        "Tea",
        "Vegetable Oils",
        "Fresh Fruits",
        "Fresh Vegetables",
        "Other Cereals",
        "Palm Oil",
        "Legumes",
        "sunflower",
      ],
    },
  },
};

const websiteDataChart1 = {
  type: "area",
  height: 380,
  series: [
    {
      name: "FY21_22",
      data: [
        12.59, 0.08, 19.2, 0.98, 431.97, 124.13, 65.88, 293.28, 109.05, 554.88,
        108.66, 33.3, 30.89, 154.89, 40.05,
      ],
    },

    {
      name: "FY22_23",
      data: [
        199.8, 0.25, 20.16, 0.18, 99.03, 76.66, 64.22, 11.23, 108.75, 154.35,
        0.38, 14.8, 14.08, 121.09, 5.53,
      ],
    },
  ],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
  options: {
    ...chartsConfig,
    colors: ["#2E93fA", "#66DA26", "#546E7A", "#E91E63", "#FF9800"],
    stroke: {
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    yaxis: {
      ...chartsConfig.yaxis,
      tickAmount: 15, // Divide the y-axis into 10 ticks
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Cotton",
        "Gram",
        "Rapeseed and Mustard",
        "Groundnut",
        "Sugarcane",
        "Pulses",
        "Wheat",
        "Non-Basmati Rice",
        "Basmati Rice",
        "Maize",
        "Paddy",
        "Processed Vegetables",
        "Coffee",
        "Sugar",
        "sunflower",
      ],
    },
  },
};
const optionsData = {
  type: "line",
  height: 400,
  series: [
    {
      name: "TEAM A",
      type: "area",
      data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
    },
    {
      name: "TEAM B",
      type: "line",
      data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#2E93fA", "#66DA26"],
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "solid",
      opacity: [0.35, 1],
    },
    labels: [
      "Dec 01",
      "Dec 02",
      "Dec 03",
      "Dec 04",
      "Dec 05",
      "Dec 06",
      "Dec 07",
      "Dec 08",
      "Dec 09",
      "Dec 10",
      "Dec 11",
    ],
    markers: {
      size: 0,
    },
    yaxis: [
      {
        title: {
          text: "Series A",
        },
      },
      {
        opposite: true,
        title: {
          text: "Series B",
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
  },
};

const production = {
  type: "bar",
  height: 450,
  series: [
    {
      name: "Uttar Pradesh",
      data: [9.83, 2, 10.83, 1.5, 13.7, 1.7, 36.61, 48, 34, 55],
    },
    {
      name: "Punjab",
      data: [3, 24.39, 3.34, 4, 5.76, 21, 67, 5.67, 39.5, 70.67],
    },
    {
      name: "West Bengal",
      data: [6, 7.56, 4.5, 7.6, 15.6, 17.4, 39.8, 14.67, 30.56, 70.8],
    },
    {
      name: "Andhra Pradesh",
      data: [9, 7, 5, 8, 6, 9, 4],
    },
    {
      name: "Orissa",
      data: [25, 12, 19, 32, 25, 24, 10],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#2E93fA", "#66DA26", "#546E7A", "#E91E63", "#FF9800"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Arhar",
        "Cotton",
        "Gram",
        "GroundNut",
        "Maize",
        "Moong",
        "Paddy",
        "Sugarcane",
        "Wheat",
        "Rice",
      ],
    },
    yaxis: {
      ...chartsConfig.yaxis,
      tickAmount: 20, // Divide the y-axis into 10 ticks
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    // title: {
    //   text: "100% Stacked Bar",
    // },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K";
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetX: 10,
    },
  },
};

const dailySalesChart = {
  type: "line",
  height: 250,
  series: [
    {
      name: "Sales",
      data: [
        5.53, 4.93, 4.65, 5.23, 5.99, 6.36, 8.41, 7.07, 6.6, 5.54, 3.08, 9.96,
        3.24, 5.26, 6.03, 10.39, 7.76, 9.69, 8.63, 15.88, 9.16, 6.7, 9.73, 9.37,
        9.56, 7.45, 9.51, 8.2, 7.32, 12.44, 4.58,
      ],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#2E93fA"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Paddy",
        "Wheat",
        "Maize",
        "Bajra",
        "Sorghum",
        "Pigeon pea",
        "Chick pea",
        "Black gram",
        "Green gram",
        "Mustard",
        "Cotton seed",
        "Soybean",
        "Safflower",
        "Sunflower",
        "Groundnut",
        "Apple",
        "Banana",
        "Citrus",
        "Grapes",
        "Guava",
        "Mango",
        "Papaya",
        "Sapota",
        "Cabbage",
        "Cauliflower",
        "Green pea",
        "Mushroom",
        "Onion",
        "Potato",
        "Tomato",
        "Tapioca",
      ],
    },
  },
};

const completedTasksChart = {
  ...dailySalesChart,
  series: [
    {
      name: "Tasks",
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
    },
  ],
};

export const statisticsChartsData = [
  {
    color: "white",
    title: "Agriculture Imports",
    description:
      "Agriculture commodities including plants and crops imported by a country",
    footer: "(Commodity, Value) in metric tonnes",
    chart: websiteDataChart,
  },
  {
    color: "white",
    title: "Agriculture Exports",
    description:
      "Agriculture commodities including plants and crops exported by a country",
    footer: "(Commodity, value) in metric tonnes",
    chart: websiteDataChart1,
  },
  {
    color: "white",
    title: "Production Statistics",
    description:
      "Commodities produced by a particular state in a particular time frame",
    footer: "(Commodity, Yield) in metric tonnes",
    chart: production,
  },
  {
    color: "white",
    title: "Yearly Wastage",
    description:
      "Percentage of commodities not utilized in a particular time frame",
    footer: "(Commodity, TotalLoss) waste percentage",
    chart: dailySalesChart,
  },
  {
    color: "blue",
    title: "Per Capita Consumption",
    description: "The yearly use of goods and services by each person.",
    footer: "(Commodity, Consumption(kg))",
    chart: websiteViewsChart,
  },
  
  // {
  //   color: "pink",
  //   title: "Daily Sales",
  //   description: "15% increase in today sales",
  //   footer: "updated 4 min ago",
  //   chart: optionsData,
  // },
  // {
  //   color: "green",
  //   title: "Completed Tasks",
  //   description: "Last Campaign Performance",
  //   footer: "just updated",
  //   chart: completedTasksChart,
  // },
];

export default statisticsChartsData;
