import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import QuizFormQuestion from "./QuizFormQuestion";
import LinkButton from "./LinkButton";

const questionsData = [
  {
    id: 1,
    question: "How much barking is ok for you?",
    topic: "barking",
    answers: [
      {
        answer: "I do not want any barking",
      },
      {
        answer: "A little bit of barking is ok",
      },
      {
        answer: "I am deaf anyway",
      },
    ],
  },
  {
    id: 2,
    question: "How much energy do you have for your dog?",
    topic: "energy",
    answers: [
      {
        answer: "I like to stay on the couch",
      },
      {
        answer: "A little exercise is welcome",
      },
      {
        answer: "I want my dog to be just as active as me",
      },
    ],
  },
  {
    id: 3,
    question: "How trainable should your dog be?",
    topic: "trainability",
    answers: [
      {
        answer: "He does not need to do any tricks",
      },
      {
        answer: "I want to teach my dog some tricks",
      },
      {
        answer: "He should be able to learn a lot",
      },
    ],
  },
];

export default function QuizFormMultiStep() {
  const [questions, setQuestions] = useState(questionsData);
  const [formResults, setFormResults] = useState({});
  const [step, setStep] = useState(0);

  const router = useRouter();

  function handlePreviousButtonClick(topic, value) {
    if (step <= 0) return step;
    setStep(step - 1);
    setFormResults((oldFormResults) => ({ ...oldFormResults, [topic]: value }));
  }

  function handleNextButtonClick(topic, value) {
    if (step >= step.length - 1) return step;
    setStep(step + 1);
    setFormResults((oldFormResults) => ({ ...oldFormResults, [topic]: value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    const params = new URLSearchParams(formResults);
    router.push(`/quiz-results?${params}`);
    console.log("formResults to give to URLSearchParams", formResults);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      {/* Here we show the submit button if we have reached the end of the questions */}
      {step === questionsData.length ? (
        <LinkButton>Submit</LinkButton>
      ) : (
        <QuizFormQuestion
          step={step}
          questionsDataLength={questionsData.length}
          questionData={questionsData[step]}
          handleNextButtonClick={handleNextButtonClick}
          handlePreviousButtonClick={handlePreviousButtonClick}
        />
      )}
    </StyledForm>
  );
}
const StyledForm = styled.form`
  margin: var(--basicmargin);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1rem 0.5em;
  cursor: pointer;
  background-color: var(--soft-background);
  color: var(--font-color);
  font-size: 0.7rem;
  border-radius: var(--borderradius-small);
  border: 2px solid var(--soft-background);
  &:hover {
    border: 2px solid var(--primary-color);
    background-color: var(--primary-color);
    color: var(--background-color);
  }
  min-width: 4.8rem;
`;

const StyledNavigation = styled.nav`
  margin: var(--basicmargin);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
