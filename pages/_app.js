import GlobalStyle from "../styles";
import { useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [assignedPoints, setAssignedPoints] = useState([]);
  const router = useRouter();

  // Logic 1
  function assignPointsToDog(dog) {
    setAssignedPoints((assignedPoints) => {
      const foundDog = assignedPoints.find(
        (dogItem) => dogItem.name === dog.name
      );
      if (foundDog) {
        return assignedPoints.map((dogItem) =>
          dogItem.name === dog.name
            ? { ...dogItem, points: dogItem.points + 1 }
            : dogItem
        );
      }
      // if the dog did not exist before
      return [...assignedPoints, { name: dog.name, points: 1 }];
    });
  }
  // Fetch from Backend
  async function getDogs(data) {
    const userValues = new URLSearchParams({
      barking: data.barking,
      trainability: data.trainability,
      energy: data.energy,
      protectiveness: data.protectiveness,
      shedding: data.shedding,
    });
    try {
      const response = await fetch(`/api/quizResults?${userValues}`);

      const data = await response.json();

      calculateAssignedPoints(data);
    } catch (error) {
      console.error(error);
    }
  }
  // Loop to assign points to each dog
  function calculateAssignedPoints(dogData) {
    dogData.forEach((dog) => {
      assignPointsToDog(dog);
    });
  }
  // User submits his answers and triggers logic
  async function handleSubmit(event) {
    event.preventDefault();
    // Collect form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Get dogs from API
    await getDogs(data);

    router.push("/quiz-results");
  }
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        assignedPoints={assignedPoints}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
