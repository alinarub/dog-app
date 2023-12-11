import useSWR from "swr";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";
import LoadingSpinner from "@/components/LoadingSpinner";
import Headline from "@/components/Headline";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Statistics() {
  const { data, error, isLoading } = useSWR("/api/favorites");

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
    .slice(0, 5);

  // extract names as array of strings
  const dogNames = dogsSortedByPoints.map((dog) => dog.name);

  const chartData = {
    labels: dogNames,
    datasets: [
      {
        label: "Points",
        data: dogsSortedByPoints.map((dog) => dog.value),
        backgroundColor: [
          "#febb49",
          "#056393",
          "#1694d4",
          "#4cb4e4",
          "#84bfde",
        ],
        borderColor: ["#ddeaee"],
        borderWidth: 3,
      },
    ],
    options: {
      interaction: {
        // Overrides the global setting
        borderRadius: 20,
      },
    },
  };

  const options = {
    cutout: "30%", // Adjust the cutout percentage as needed
    elements: {
      arc: {
        borderRadius: 10, // Set the border radius for the arcs
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    elements: {
      arc: {
        borderRadius: 10,
      },
    },
    font: { size: 20 },
  };

  return (
    <>
      <Headline>Statistics</Headline>
      <StyledParagraph>
        These dogs are the best matches for those of you who took the quiz.
      </StyledParagraph>
      <Doughnut data={chartData} options={options} />
    </>
  );
}

const StyledParagraph = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  color: var(--font-color);
  font-weight: 300;
  font-size: 1.1rem;
`;
