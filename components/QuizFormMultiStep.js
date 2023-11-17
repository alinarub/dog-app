import styled from "styled-components";
import LinkButton from "./LinkButton";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const questionsData = [
  {
    id: 1,
    question: "How much barking is ok for you?",
    answers: [
      {
        answer: "I do not want any barking",
        id: "barking2",
        name: "barking",
        value: "2",
      },
      {
        answer: "A little bit of barking is ok",
        id: "barking3",
        name: "barking",
        value: "3",
      },
      {
        answer: "I am deaf anyway",
        id: "barking4",
        name: "barking",
        value: "4",
      },
    ],
  },
  {
    id: 2,
    question: "How much energy do you have for your dog?",
    answers: [
      {
        answer: "energy 2",
        id: "energy2",
        name: "energy",
        value: "2",
      },
      {
        answer: "energy 3",
        id: "energy3",
        name: "energy",
        value: "3",
      },
      {
        answer: "energy 4",
        id: "energy4",
        name: "energy",
        value: "4",
      },
    ],
  },
];

export default function QuizFormMultiStep() {
  const [currentStepIndex, setCurrentStepIndex] = useState(1);
  const [questions, setQuestions] = useState(questionsData);
  const [formDataMulti, setFormDataMulti] = useState([
    {
      id: 1,
      characteristic: "barking",
      value: "0",
    },
    {
      id: 2,
      characteristic: "energy",
      value: "0",
    },
    {
      id: 3,
      characteristic: "trainability",
      value: "0",
    },
    {
      id: 4,
      characteristic: "good_with_children",
      value: "0",
    },
    {
      id: 5,
      characteristic: "good_with_other_dogs",
      value: "0",
    },
    {
      id: 6,
      characteristic: "protectiveness",
      value: "0",
    },
    {
      id: 7,
      characteristic: "shedding",
      value: "0",
    },
  ]);
  const [multiStepFormData, setMultiStepFormData] = useState([]);
  const currentQuestion = questions.filter((question) => {
    return currentStepIndex === question.id;
  });

  function nextQuestion() {
    setCurrentStepIndex((currentStepIndex) => {
      // if (currentStepIndex >= steps.length - 1) return currentStepIndex;
      return currentStepIndex + 1;
    });
  }

  function previousQuestion() {
    setCurrentStepIndex((currentStepIndex) => {
      // if (currentStepIndex <= 0) return currentStepIndex;
      return currentStepIndex - 1;
    });
  }

  function goTo(index) {
    setCurrentStepIndex(index);
  }

  const router = useRouter();
  // Form Submission for one question at a time
  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // setAccordionData((accordionItems) => {
    //   const info = accordionItems.find((info) => info.id === id);
    //   return accordionItems.map((info) => {
    //     if (info.id === id) return { ...info, isOpen: !info.isOpen };
    //     else return { ...info, isOpen: false };
    //   });
    // });

    setFormDataMulti((questions) => {
      questions.map((info) => {
        // for (let property in data) {
        //   return {
        //     ...info,
        //     characteristic: property,
        //     value: data.barking,
        //   };
        // }
        return "0";
      });
    });
    nextQuestion();

    console.log("data", data);
    console.log("multi step form data", formDataMulti);
  }

  useEffect(() => {
    // const params = new URLSearchParams(
    //   `${multiStepFormData.characteristic}=${multiStepFormData.value}`
    // );
    console.log("multi step form data use effect", formDataMulti);
    // if (multiStepFormData)
    //   router.push(
    //     `/quiz-results?${multiStepFormData.characteristic}=${multiStepFormData.value}`
    //   );
  }, [currentStepIndex]);

  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        {currentQuestion.map((questionItem) => {
          const { id, question, answers } = questionItem;
          return (
            <StyledFieldset key={id}>
              <StyledLegend>{question}</StyledLegend>
              {answers.map((answerItem) => {
                const { id, name, value } = answerItem;
                return (
                  <>
                    <StyledInput
                      type="radio"
                      id={id}
                      name={name}
                      value={value}
                    />
                    <StyledLabel htmlFor={id}>{answerItem.answer}</StyledLabel>
                  </>
                );
              })}
            </StyledFieldset>
          );
        })}
        <LinkButton>next</LinkButton>
      </StyledForm>
      <StyledNavigation>
        <StyledButton type="button" onClick={previousQuestion}>
          previous
        </StyledButton>
      </StyledNavigation>
    </>
  );
}

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

const StyledForm = styled.form`
  margin: var(--basicmargin);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0;
  width: var(--mobilewidth);
  padding-bottom: 1.5;
  margin: 2rem 0;
`;

const StyledLegend = styled.legend`
  font-size: 1.5rem;
`;

const StyledInput = styled.input`
  visibility: hidden;
  height: 0;
  width: 0;

  &:checked + label {
    border: 2px solid var(--primary-color);
    background-color: var(--accent-color);
    border: 2px solid var(--accent-color);
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  margin: 0.7rem;
  height: 4.3rem;
  cursor: pointer;
  background-color: var(--soft-background);
  color: var(--font-color);
  border-radius: var(--borderradius-small);
  border: 2px solid var(--soft-background);
  &:hover {
    border: 2px solid var(--primary-color);
  }
`;
