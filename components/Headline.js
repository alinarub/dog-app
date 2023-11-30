import styled from "styled-components";

export default function Headline({ children, $marginTop }) {
  return <StyledH1 $marginTop={$marginTop}>{children}</StyledH1>;
}

const StyledH1 = styled.h1`
  border-bottom: 2px solid var(--accent-color);
  padding-bottom: 0.8rem;
  font-size: 2rem;
  font-weight: 200;
  margin: auto;
  margin-top: ${(props) => props.$marginTop || "2rem"};
  width: var(--mobilewidth);
`;
