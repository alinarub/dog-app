import styled from "styled-components";

export default function Headline({ name }) {
  return (
    <StyledHeadline>
      <StyledH1>{name}</StyledH1>
    </StyledHeadline>
  );
}

const StyledHeadline = styled.div`
  margin: 0 var(--basicmargin);
`;
const StyledH1 = styled.div`
  border-bottom: 2px solid var(--yellow);
  padding-bottom: 0.8rem;
  font-size: 2rem;
  font-weight: 200;
`;
