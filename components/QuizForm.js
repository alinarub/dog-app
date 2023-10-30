import styled from "styled-components";

export default function QuizForm({ onSubmit }) {
  return (
    <StyledForm onSubmit={onSubmit}>
      {/* Question #1 barking */}
      <fieldset>
        <legend>How much barking is ok for you?</legend>

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
      </fieldset>
      {/* Question #2 energy */}
      <fieldset>
        <legend>How much energy do you have for your dog?</legend>

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
      </fieldset>
      {/* Question #3 trainability */}
      <fieldset>
        <legend>How trainable should your dog be?</legend>

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
      </fieldset>
      {/* Question #4 children */}
      <fieldset>
        <legend>
          How important is it that your dog gets along with children?
        </legend>

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
      </fieldset>
      {/* Question #5 otherdogs */}
      <fieldset>
        <legend>How easily should your dog get along with other dogs?</legend>

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
      </fieldset>
      {/* Question #6 protectiveness */}
      <fieldset>
        <legend>How protective do you want your dog to be?</legend>

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
      </fieldset>
      {/* Question #7 shedding */}
      <fieldset>
        <legend>Does it bother you if your dog sheds?</legend>

        <div>
          <StyledInput
            type="radio"
            id="shedding2"
            name="shedding"
            value="2"
            required
          />
          <StyledLabel htmlFor="shedding2">It bothers me a lot</StyledLabel>
        </div>

        <StyledInput type="radio" id="shedding3" name="shedding" value="3" />
        <StyledLabel htmlFor="shedding3">
          I do not mind if my dog sheds a little
        </StyledLabel>

        <StyledInput type="radio" id="shedding4" name="shedding" value="4" />
        <StyledLabel htmlFor="shedding4">I do not mind at all</StyledLabel>
      </fieldset>
      {/* Submit Button */}
      <StyledButton type="submit">Submit</StyledButton>
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
  width: var(--mobilewidth);
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  padding: 0.7rem 1em;
  text-align: center;
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
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  padding: 0.7rem 1.6em;
  text-align: center;
  cursor: pointer;
  background-color: var(--soft-background);
  color: var(--font-color);
  border-radius: var(--borderradius-small);
  border: 2px solid var(--soft-background);
  &:hover {
    border: 2px solid var(--primary-color);
    background-color: var(--primary-color);
    color: var(--background-color);
  }
`;
