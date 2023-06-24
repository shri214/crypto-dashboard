import { convertDate } from "./convertDate";

export const settingChartData = (setChartData, price1, price2) => {
  console.log("setting chart data is ", price1, price2);
  if (price2) {
    setChartData({
      labels: price1.map((price) => convertDate(price[0])),
      datasets: [
        {
          label: "crypto1",
          data: price1.map((price) => price[1]),
          borderColor: "#3a80e9",
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          pointRadius: 0,
          yAxisID: "crypto1",
        },
        {
          label: "crypto2",
          data: price2.map((price) => price[1]),
          borderColor: "#12ac12",
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          pointRadius: 0,
          yAxisID: "crypto2",
        },
      ],
    });
  } else {
    setChartData({
      labels: price1.map((price) => convertDate(price[0])),
      datasets: [
        {
          data: price1.map((price) => price[1]),
          borderColor: "#3a80e9",
          borderWidth: 2,
          fill: true,
          tension: 0.25,
          backgroundColor: "rgba(58, 128,233,0.1)",
          pointRadius: 0,
          yAxisID: "crypto1",
        },
      ],
    });
  }
};
