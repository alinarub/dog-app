import styled from "styled-components";

export default function MoreDogInformation({ dog }) {
  return (
    <div>
      <StyledList>
        <StyledListItem>
          <p>
            Life span <StyledUnit>years </StyledUnit>
          </p>
          <StyledParagraph>
            {dog.min_life_expectancy} - {dog.max_life_expectancy}
          </StyledParagraph>
        </StyledListItem>
        <StyledListItem>
          <p>
            Male height
            <StyledUnit>⌀ cm</StyledUnit>
          </p>
          <StyledParagraph>
            {(((dog.max_height_male + dog.min_height_male) / 2) * 2.54).toFixed(
              0
            )}
          </StyledParagraph>
        </StyledListItem>
        <StyledListItem>
          <p>
            Female height
            <StyledUnit>⌀ cm</StyledUnit>
          </p>
          <StyledParagraph>
            {(
              ((dog.max_height_female + dog.min_height_female) / 2) *
              2.54
            ).toFixed(0)}
          </StyledParagraph>
        </StyledListItem>
        <StyledListItem>
          <p>
            Male weight <StyledUnit>⌀ kg</StyledUnit>
          </p>
          <StyledParagraph>
            {(
              ((dog.max_weight_male + dog.min_weight_male) / 2) *
              0.4536
            ).toFixed(1)}
          </StyledParagraph>
        </StyledListItem>
        <StyledListItem>
          <p>
            Female weight <StyledUnit>⌀ kg</StyledUnit>
          </p>
          <StyledParagraph>
            {(
              ((dog.max_weight_female + dog.min_weight_female) / 2) *
              0.4536
            ).toFixed(1)}
          </StyledParagraph>
        </StyledListItem>
      </StyledList>
    </div>
  );
}

const StyledList = styled.ul`
  list-style: none;
  margin-left: -0.6rem;
  margin: var(--basicmargin) 0;
`;

const StyledListItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledUnit = styled.span`
  color: black;
  background-color: #bebfc5;
  opacity: 0.5;
  border-radius: var(--borderradius-small);
  font-size: 0.7rem;
  padding: 0 0.2rem;
  margin-left: 0.3rem;
`;

const StyledParagraph = styled.p`
  color: var(--accent-color);
  font-weight: 500;
  font-size: 1rem;
`;
