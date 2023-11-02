import styled from "styled-components";
import LinkButton from "./LinkButton";
import { useRouter } from "next/router";

export default function QuizForm() {
  const router = useRouter();

  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const params = new URLSearchParams(data);
    router.push(`/quiz-results?${params}`);
  }
  return (
    <StyledForm onSubmit={onSubmit}>
      {/* Question #1 barking */}
      <StyledFieldset>
        <StyledLegend>How much barking is ok for you?</StyledLegend>

        <StyledInput
          type="radio"
          id="barking2"
          name="barking"
          value="2"
          required
        />
        <StyledLabel htmlFor="barking2">I do not want any barking</StyledLabel>

        <StyledInput type="radio" id="barking3" name="barking" value="3" />
        <StyledLabel htmlFor="barking3">
          A little bit of barking is ok
        </StyledLabel>

        <StyledInput type="radio" id="barking4" name="barking" value="4" />
        <StyledLabel htmlFor="barking4">I am deaf anyway</StyledLabel>
      </StyledFieldset>
      {/* Question #2 energy */}
      <StyledFieldset>
        <StyledLegend>How much energy do you have for your dog?</StyledLegend>

        <StyledInput
          type="radio"
          id="energy2"
          name="energy"
          value="2"
          required
        />
        <StyledLabel htmlFor="energy2">I like to stay on the couch</StyledLabel>

        <StyledInput type="radio" id="energy3" name="energy" value="3" />
        <StyledLabel htmlFor="energy3">
          A little exercise is welcome
        </StyledLabel>

        <StyledInput type="radio" id="energy4" name="energy" value="4" />
        <StyledLabel htmlFor="energy4">
          I want my dog to be just as active as me
        </StyledLabel>
      </StyledFieldset>
      {/* Question #3 trainability */}
      <StyledFieldset>
        <StyledLegend>How trainable should your dog be?</StyledLegend>

        <StyledInput
          type="radio"
          id="trainability2"
          name="trainability"
          value="2"
          required
        />
        <StyledLabel htmlFor="trainability2">
          He does not need to do any tricks
        </StyledLabel>

        <StyledInput
          type="radio"
          id="trainability3"
          name="trainability"
          value="3"
        />
        <StyledLabel htmlFor="trainability3">
          I want to teach my dog some tricks
        </StyledLabel>

        <StyledInput
          type="radio"
          id="trainability4"
          name="trainability"
          value="4"
        />
        <StyledLabel htmlFor="trainability4">
          He should be able to learn a lot
        </StyledLabel>
      </StyledFieldset>
      {/* Question #4 children */}
      <StyledFieldset>
        <StyledLegend>
          How important is it that your dog gets along with children?
        </StyledLegend>

        <StyledInput
          type="radio"
          id="children2"
          name="good_with_children"
          value="2"
          required
        />
        <StyledLabel htmlFor="children2">
          It is not important, my dog won&apos;t get in touch with children
        </StyledLabel>

        <StyledInput
          type="radio"
          id="children3"
          name="good_with_children"
          value="3"
        />
        <StyledLabel htmlFor="children3">
          It would be good, but it&apos;s not crucial
        </StyledLabel>

        <StyledInput
          type="radio"
          id="children4"
          name="good_with_children"
          value="4"
        />
        <StyledLabel htmlFor="children4">
          It is very important, I want a friendly dog
        </StyledLabel>
      </StyledFieldset>
      {/* Question #5 otherdogs */}
      <StyledFieldset>
        <StyledLegend>
          How easily should your dog get along with other dogs?
        </StyledLegend>

        <StyledInput
          type="radio"
          id="otherdogs2"
          name="good_with_other_dogs"
          value="2"
          required
        />
        <StyledLabel htmlFor="otherdogs2">
          I want my dog to only care about his home
        </StyledLabel>

        <StyledInput
          type="radio"
          id="otherdogs3"
          name="good_with_other_dogs"
          value="3"
        />
        <StyledLabel htmlFor="otherdogs3">
          My dog should be neutral with other dogs
        </StyledLabel>

        <StyledInput
          type="radio"
          id="otherdogs4"
          name="good_with_other_dogs"
          value="4"
        />
        <StyledLabel htmlFor="otherdogs4">I want a sociable dog</StyledLabel>
      </StyledFieldset>
      {/* Question #6 protectiveness */}
      <StyledFieldset>
        <StyledLegend>How protective do you want your dog to be?</StyledLegend>

        <StyledInput
          type="radio"
          id="protectiveness2"
          name="protectiveness"
          value="2"
          required
        />
        <StyledLabel htmlFor="protectiveness2">
          I do not want a protective dog
        </StyledLabel>

        <StyledInput
          type="radio"
          id="protectiveness3"
          name="protectiveness"
          value="3"
        />
        <StyledLabel htmlFor="protectiveness3">
          A little protectiveness is good
        </StyledLabel>

        <StyledInput
          type="radio"
          id="protectiveness4"
          name="protectiveness"
          value="4"
        />
        <StyledLabel htmlFor="protectiveness4">
          I want an alert and protective dog
        </StyledLabel>
      </StyledFieldset>
      {/* Question #7 shedding */}
      <StyledFieldset>
        <StyledLegend>Does it bother you if your dog sheds?</StyledLegend>

        <StyledInput
          type="radio"
          id="shedding2"
          name="shedding"
          value="2"
          required
        />
        <StyledLabel htmlFor="shedding2">It bothers me a lot</StyledLabel>

        <StyledInput type="radio" id="shedding3" name="shedding" value="3" />
        <StyledLabel htmlFor="shedding3">
          I do not mind if my dog sheds a little
        </StyledLabel>

        <StyledInput type="radio" id="shedding4" name="shedding" value="4" />
        <StyledLabel htmlFor="shedding4">I do not mind at all</StyledLabel>
      </StyledFieldset>
      {/* Submit Button */}
      <LinkButton>Submit</LinkButton>
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
