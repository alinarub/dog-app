import useSWR from "swr";
import { useState } from "react";
import QuizForm from "@/components/QuizForm";
import IntroText from "@/components/IntroText";

const fetcher = (url) => fetch(url).then((response) => response.json());

const dummyDogs = [
  {
    trainability: 4,
    energy: 3,
    barking: 2,
    name: "Golden Retriever",
  },
  {
    trainability: 2,
    energy: 3,
    barking: 4,
    name: "Dachshund",
  },
  {
    trainability: 2,
    energy: 4,
    barking: 3,
    name: "German Shepherd",
  },
  {
    trainability: 4,
    energy: 4,
    barking: 2,
    name: "Border Collie",
  },
  {
    trainability: 3,
    energy: 2,
    barking: 3,
    name: "Pug",
  },
];

export default function HomePage() {
  // step 1: client makes request to backend
  const { data } = useSWR("/api/quizResults", fetcher);

  // State (memory) for the answer values of the three questions
  const [answerValues, setAnswerValues] = useState({});
  // This array is empty at the beginning and will be filled piece by piece (Peet Demo)
  const [assignedPoints, setAssignedPoints] = useState([]);

  function assignPointsToDog(dog) {
    setAssignedPoints((assignedPoints) => {
      const foundDog = assignedPoints.find(
        (dogItem) => dogItem.name === dog.name
      );
      // trifft noch nicht zu, da nur barking
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

  // Algorithmus Try #4
  function calculateAssignedPoints() {
    dummyDogs.forEach((dog) => {
      // question #1
      if (+answerValues.barking === dog.barking) {
        assignPointsToDog(dog);
        // setAssignedPoints for these dogs +1
      }
      // question #2
      if (+answerValues.energy === dog.energy) {
        assignPointsToDog(dog);
        // setAssignedPoints for these dogs +1
      }
      // question #3
      if (+answerValues.trainability === dog.trainability) {
        assignPointsToDog(dog);
        // setAssignedPoints for these dogs +1
      } else {
        // setAssignedPoints for these dogs +0
        // do nothing
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setAnswerValues({ ...data });
    // Assign Points to the corresponding dog
    calculateAssignedPoints();
  }

  return (
    <div>
      <IntroText />
      <QuizForm onSubmit={handleSubmit} />
    </div>
  );
}
