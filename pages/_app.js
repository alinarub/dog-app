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
  async function getDogs(dataFromForm) {
    try {
      const response = await fetch(`/api/quizResults`);

      const data = await response.json();

      calculateAssignedPoints(data, dataFromForm);
    } catch (error) {
      console.error(error);
    }
  }
  // Loop to assign points to each dog
  function calculateAssignedPoints(dogData, dataFromForm) {
    const {
      barking,
      energy,
      trainability,
      good_with_children,
      good_with_other_dogs,
      protectiveness,
      shedding,
    } = dataFromForm;
    dogData.forEach((dog) => {
      if (+barking === +dog.barking) {
        assignPointsToDog(dog);
      }
      if (+energy === +dog.energy) {
        assignPointsToDog(dog);
      }
      if (+trainability === +dog.trainability) {
        assignPointsToDog(dog);
      }
      if (+good_with_children === +dog.good_with_children) {
        assignPointsToDog(dog);
      }
      if (+good_with_other_dogs === +dog.good_with_other_dogs) {
        assignPointsToDog(dog);
      }
      if (+protectiveness === +dog.protectiveness) {
        assignPointsToDog(dog);
      }
      if (+shedding === +dog.shedding) {
        assignPointsToDog(dog);
      } else {
        // setAssignedPoints for these dogs +0
      }
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
