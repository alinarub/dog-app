import styled from "styled-components";

export default function Headline({ children }) {
  return <StyledH1>{children}</StyledH1>;
}

const StyledH1 = styled.h1`
  border-bottom: 2px solid var(--accent-color);
  padding-bottom: 0.8rem;
  font-size: 2rem;
  font-weight: 200;
  margin: 0 var(--basicmargin);
`;
