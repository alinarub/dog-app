import { useState } from "react";
import styled from "styled-components";

export default function QuizFormQuestion({
  questionsDataLength,
  questionData,
  handlePreviousButtonClick,
  handleNextButtonClick,
  step,
}) {
  // Keep track of the value of radio button in state and via the onChange event
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <div>
      <StyledLegend>{questionData.question}</StyledLegend>
      {/* Here we generate an array with 5 items in it, so we can generate 5 radio buttons */}
      {Array.from({ length: 3 }).map((_, i) => (
        <StyledFieldset key={`${questionData.topic}${i + 2}`}>
          <StyledInput
            type="radio"
            name={questionData.topic}
            id={`${questionData.topic}${i + 2}`}
            value={i + 2}
            onChange={(event) => setSelectedValue(Number(event.target.value))}
          />
          <StyledLabel htmlFor={`${questionData.topic}${i + 2}`}>
            {`${questionData.answers[i].answer}`}
          </StyledLabel>
        </StyledFieldset>
      ))}
      <StyledNavigation>
        {step != 0 && (
          <StyledButton
            type="button"
            onClick={() =>
              handlePreviousButtonClick(questionData.topic, selectedValue)
            }
          >
            previous
          </StyledButton>
        )}
        {console.log("questuondsDatalength", questionsDataLength)}

        <StyledButton
          type="button"
          onClick={() =>
            handleNextButtonClick(questionData.topic, selectedValue)
          }
        >
          next
        </StyledButton>
      </StyledNavigation>
    </div>
  );
}

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0;
  width: var(--mobilewidth);
  padding-bottom: 1.5;
  margin: 0rem 0;
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
