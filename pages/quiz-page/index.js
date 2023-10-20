import useSWR from "swr";
import { useState } from "react";
import QuizForm from "@/components/QuizForm";
import IntroText from "@/components/IntroText";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function QuizPage({ assignedPoints, handleAssignPointsToDog }) {
  const router = useRouter();
  // State (memory) for the answer values of the three questions
  const [answerValues, setAnswerValues] = useState({});
  const userValues = new URLSearchParams({
    barking: answerValues.barking,
    trainability: answerValues.trainability,
    energy: answerValues.energy,
  });
  console.log("data", assignedPoints);
  // Fetch Data for all questions (answers)
  const { data } = useSWR(`/api/quizResults?${userValues}`, fetcher);

  // This state array is empty at the beginning and will be filled piece by piece
  // const [assignedPoints, setAssignedPoints] = useState([]);

  // Solution 1 (derived state)
  // const filteredAssignedPoints = assignedPoints;
  // filteredAssignedPoints.sort((a, b) => b.points - a.points);

  // function assignPointsToDog(dog) {
  //   setAssignedPoints((assignedPoints) => {
  //     const foundDog = assignedPoints.find(
  //       (dogItem) => dogItem.name === dog.name
  //     );
  //     if (foundDog) {
  //       return assignedPoints.map((dogItem) =>
  //         dogItem.name === dog.name
  //           ? { ...dogItem, points: dogItem.points + 1 }
  //           : dogItem
  //       );
  //     }
  //     // if the dog did not exist before
  //     return [...assignedPoints, { name: dog.name, points: 1 }];
  //   });
  // }

  // Algorithmus
  function calculateAssignedPoints() {
    data[0].forEach((dog) => {
      // question #1 (barking)
      handleAssignPointsToDog(dog);
      // setAssignedPoints for these dogs +1
    });
    data[1].forEach((dog) => {
      // question #2 (energy)
      handleAssignPointsToDog(dog);
      // setAssignedPoints for these dogs +1
    });
    data[2].forEach((dog) => {
      // question #3 (trainability)
      handleAssignPointsToDog(dog);
      // setAssignedPoints for these dogs +1
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Collect form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setAnswerValues({ ...data });
    // Assign Points to the corresponding dog
    calculateAssignedPoints();
    router.push("/quiz-results");
  }

  return (
    <div>
      <IntroText />
      <QuizForm onSubmit={handleSubmit} />
      {/* <h2>List of dogs with their points</h2>
      <ul>
        {filteredAssignedPoints.map((dog) => {
          return (
            <li key={dog.name}>
              {dog.name} -- {dog.points}
            </li>
          );
        })}
      </ul>
      <p>Total dogs: {assignedPoints.length}</p> */}
    </div>
  );
}
