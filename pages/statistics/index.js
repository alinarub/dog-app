import useSWR from "swr";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";
import LoadingSpinner from "@/components/LoadingSpinner";
import Headline from "@/components/Headline";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Statistics() {
  const {
    data: dataFavorites,
    error: errorFavorites,
    isLoading: isLoadingFavorites,
  } = useSWR("/api/favorites");
  const {
    data: dataStatistics,
    error: errorStatistics,
    isLoading: isLoadingStatistics,
  } = useSWR("/api/statistics");

  if (isLoadingFavorites || isLoadingStatistics) {
    return <LoadingSpinner />;
  }

  if (errorFavorites || errorStatistics) {
    return <h2>An error occurred...</h2>;
  }

  // All dogs
  const allDogs = [...dataFavorites];

  // Sort and Slice dogs data
  const dogsSortedByPoints = dataFavorites
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
      <Headline>Quiz visitors</Headline>
      <StyledParagraph>
        <StyledSpan>{dataStatistics.length}</StyledSpan> people have taken the
        quiz so far.
      </StyledParagraph>
      <Headline>Best matches</Headline>
      <StyledParagraph>
        These dogs are the most common matches for our quiz visitors.
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

const StyledSpan = styled.span`
  font-weight: 600;
`;
