import useSWR from "swr";
import { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import LoadingSpinner from "@/components/LoadingSpinner";
import Headline from "@/components/Headline";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Statistics() {
  const { data, error, isLoading, mutate } = useSWR("/api/favorites");

  // useEffect(() => {
  //   mutate();
  // }, [data]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <h2>An error occurred...</h2>;
  }

  // All dogs
  const allDogs = [...data];

  // Sort and Slice dogs data
  const dogsSortedByPoints = data
    .sort(function (a, b) {
      return b.value - a.value;
    })
    .splice(0, 5);

  // extract names as array of strings
  const dogNames = dogsSortedByPoints.map((dog) => dog.name);
  // console.log("data", data);
  // console.log("allDogs", allDogs);
  // console.log("dogsSortedByPoints", dogsSortedByPoints);
  // console.log("dogNames", dogNames);
  const chartData = {
    labels: dogNames,
    datasets: [
      {
        label: "# of Votes",
        data: dogsSortedByPoints.map((dog) => dog.value),
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
  };

  return (
    <>
      <Headline>Statistics</Headline>
      {/* <p>{data.length} people have already taken the quiz before you!</p> */}
      <p>{allDogs.length} dogs are listed as most favorited.</p>
      <Doughnut data={chartData} />
    </>
  );
}
