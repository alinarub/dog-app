import useSWR from "swr";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((response) => response.json());

const dummyDogs = [
  {
    trainability: 5,
    energy: 3,
    barking: 1,
    name: "Golden Retriever",
  },
  {
    trainability: 1,
    energy: 2,
    barking: 5,
    name: "Dachshund",
  },
  {
    trainability: 2,
    energy: 4,
    barking: 3,
    name: "German Shepherd",
  },
  {
    trainability: 5,
    energy: 5,
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
  const [assignedPoints, setAssignedPoints] = useState([
    { name: "Golden Retriever", points: 0 },
    { name: "Dachshund", points: 0 },
    { name: "German Shepherd", points: 0 },
    { name: "Border Collie", points: 0 },
    { name: "Pug", points: 0 },
  ]);

  function calculateAssignedPoints() {
    // dummyDogs.forEach(dog){
    //   if(dog.barking === answerValues.barking)
    // }
  }

  function handleClick(event) {
    console.log("state---", answerValues);
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("data---", data);
    setAnswerValues({ ...data });
    calculateAssignedPoints();
  }

  return (
    <div>
      <h1>Quiz Form</h1>
      <form onSubmit={handleClick}>
        <fieldset>
          <legend>How much barking is ok for you?</legend>

          <div>
            <input
              type="radio"
              id="oneTwo"
              name="barking"
              value="oneTwo"
              required
            />
            <label htmlFor="oneTwo">No barking (1+2)</label>
          </div>

          <div>
            <input type="radio" id="three" name="barking" value="three" />
            <label htmlFor="three">A little bit is ok (3)</label>
          </div>

          <div>
            <input type="radio" id="fourFive" name="barking" value="fourFive" />
            <label htmlFor="fourFive">I am deaf anyway (4+5)</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>How much energy do you have for your dog?</legend>

          <div>
            <input
              type="radio"
              id="oneTwo"
              name="energy"
              value="oneTwo"
              required
            />
            <label htmlFor="oneTwo">I like to stay on the couch (1+2)</label>
          </div>

          <div>
            <input type="radio" id="three" name="energy" value="three" />
            <label htmlFor="three">A little exercise is welcome (3)</label>
          </div>

          <div>
            <input type="radio" id="fourFive" name="energy" value="fourFive" />
            <label htmlFor="fourFive">
              I want my dog to be just as active as me (4+5)
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>How easy to train should your dog be?</legend>

          <div>
            <input
              type="radio"
              id="oneTwo"
              name="trainability"
              value="oneTwo"
              required
            />
            <label htmlFor="oneTwo">Difficult to train (1+2)</label>
          </div>

          <div>
            <input type="radio" id="three" name="trainability" value="three" />
            <label htmlFor="three">
              I want to teach my dog some tricks (3)
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="fourFive"
              name="trainability"
              value="fourFive"
            />
            <label htmlFor="fourFive">Easy to train (4+5)</label>
          </div>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}
