import useSWR from "swr";
import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import LoadingSpinner from "@/components/LoadingSpinner";
import Headline from "@/components/Headline";

export default function Statistics() {
  const { data, error, isLoading } = useSWR("/api/favorites");
  ChartJS.register(ArcElement, Tooltip, Legend);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "# of Votes",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  // const MyDoughnutChart = ({ newData }) => {
  //   const [chartData, setChartData] = useState({
  //     labels: ['Label 1', 'Label 2', 'Label 3'],
  //     datasets: [{
  //       data: [10, 20, 30], // Initial data
  //       backgroundColor: ['red', 'green', 'blue'],
  //     }],
  //   });

  useEffect(() => {
    // Update the data when newData changes
    setChartData((prevData) => ({
      ...prevData,
      datasets: [
        {
          ...prevData.datasets[0],
          data: data,
        },
      ],
    }));
  }, [data]);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (!data) {
    return;
  }
  if (error) {
    return <h2>An error occurred...</h2>;
  }

  // Sort and Slice dogs data
  const dogsSortedByPoints = data
    ?.sort(function (a, b) {
      return b.value - a.value;
    })
    ?.splice(0, 5);

  // extract names as array of strings
  const dogNames = dogsSortedByPoints.map((dog) => dog.name);
  console.log("sorted", dogNames);

  return (
    <>
      <Headline>Statistics</Headline>
      {/* <p>{data.length} people have already taken the quiz before you!</p> */}
      <p>{data.length} dogs are listed as most favorited.</p>
      <Doughnut data={chartData} />
    </>
  );
}
