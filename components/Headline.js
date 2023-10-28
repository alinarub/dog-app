import styled from "styled-components";

export default function Headline({ children }) {
  return (
    <StyledHeadlineWrapper>
      <StyledH1>{children}</StyledH1>
    </StyledHeadlineWrapper>
  );
}

const StyledHeadlineWrapper = styled.div`
  margin: 0 var(--basicmargin);
`;
const StyledH1 = styled.h1`
  border-bottom: 2px solid var(--yellow);
  padding-bottom: 0.8rem;
  font-size: 2rem;
  font-weight: 200;
`;
