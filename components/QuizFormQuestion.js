import { useState } from "react";
import styled from "styled-components";
import useTheme from "@/contexts/theme";

export default function QuizFormQuestion({ questionData, onNextButtonClick }) {
  const [selectedValue, setSelectedValue] = useState(null);
  const { themeMode } = useTheme();

  return (
    <>
      <StyledLegend>{questionData.question}</StyledLegend>

      {Array.from({ length: 3 }).map((_, index) => (
        <StyledFieldset key={`${questionData.topic}${index + 2}`}>
          <StyledInput
            $themeMode={themeMode}
            type="radio"
            name={questionData.topic}
            id={`${questionData.topic}${index + 2}`}
            value={index + 2}
            onChange={(event) => setSelectedValue(Number(event.target.value))}
          />
          <StyledLabel htmlFor={`${questionData.topic}${index + 2}`}>
            {`${questionData.answers[index].answer}`}
          </StyledLabel>
        </StyledFieldset>
      ))}
      <StyledNavigation>
        <StyledButton
          $themeMode={themeMode}
          type="button"
          disabled={selectedValue ? false : true}
          onClick={() => {
            onNextButtonClick(questionData.topic, selectedValue);
            setSelectedValue(null);
          }}
        >
          next
        </StyledButton>
      </StyledNavigation>
    </>
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
  max-width: var(--mobilewidth);
`;

const StyledInput = styled.input`
  visibility: hidden;
  height: 0;
  width: 0;

  &:checked + label {
    border: 2px solid var(--primary-color);
    background-color: var(--accent-color);
    border: 2px solid var(--accent-color);
    color: ${({ $themeMode }) =>
      $themeMode === "light"
        ? `var(--font-color)`
        : `var(--almost-black-color)`};
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
  padding: 0 0.5rem;
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
  padding: 0.3rem 0.5em;
  cursor: pointer;
  background-color: var(--accent-color);
  border: 2px solid var(--accent-color);
  min-width: 4.8rem;
  color: var(--font-color);
  font-size: 1rem;
  border-radius: var(--borderradius-small);
  margin-top: -0.7rem;
  color: ${({ $themeMode }) =>
    $themeMode === "light" ? `var(--font-color)` : `var(--almost-black-color)`};

  &:hover {
    border: 2px solid var(--primary-color);
    background-color: var(--primary-color);

    color: ${({ $themeMode }) =>
      $themeMode === "light" ? `var(--background-color)` : `var(--font-color)`};
  }
  &:disabled:hover {
    color: var(--font-color);
    color: ${({ $themeMode }) =>
      $themeMode === "light" ? `var(--font-color)` : `var(--background-color)`};
  }
  &:disabled {
    background-color: var(--soft-background);
    border: 2px solid var(--soft-background);
    opacity: 0.6;
  }
`;

const StyledNavigation = styled.nav`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;
