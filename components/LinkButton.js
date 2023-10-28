import Link from "next/link";
import styled from "styled-components";

export default function LinkButton({ href, children, fullwidth }) {
  return (
    <StyledLink fullwidth={fullwidth} href={href}>
      {children}
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  display: ${(props) => (props.fullwidth ? "block" : "inline-block")};
  background-color: var(--lightgray);
  color: var(--almostblack);
  text-decoration: none;
  font-size: 1rem;
  text-align: center;
  margin: 2.4rem;
  padding: 0.7rem 1em;
  border: 2px solid var(--lightgray);
  border-radius: var(--borderradius-small);
  &:hover {
    border: 2px solid var(--blue);
  }
  &:active {
    border: 2px solid var(--blue);
  }
`;
