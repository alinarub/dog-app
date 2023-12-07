import styled from "styled-components";

export default function Headline({ children, $marginTop }) {
  return <StyledHeadline $marginTop={$marginTop}>{children}</StyledHeadline>;
}

const StyledHeadline = styled.h2`
  border-bottom: 2px solid var(--accent-color);
  padding-bottom: 0.8rem;
  font-size: 2rem;
  font-weight: 200;
  margin: auto;
  margin-top: ${(props) => props.$marginTop || "2rem"};
  width: var(--mobilewidth);
`;
