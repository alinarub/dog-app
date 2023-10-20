import GlobalStyle from "../styles";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [assignedPoints, setAssignedPoints] = useState([]);

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
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        assignedPoints={assignedPoints}
        handleAssignPointsToDog={assignPointsToDog}
      />
    </>
  );
}
