import Link from "next/link";
import styled from "styled-components";

export default function LinkButton({ href, children, $fullWidth }) {
  return (
    <StyledLink $fullWidth={$fullWidth} href={href}>
      {children}
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  display: ${(props) => (props.$fullWidth ? "block" : "inline-block")};
  background-color: var(--soft-background);
  color: var(--font-color);
  text-decoration: none;
  font-size: 1rem;
  text-align: center;
  margin: 2.4rem;
  padding: 0.7rem 1em;
  border: 2px solid var(--soft-background);
  border-radius: var(--borderradius-small);
  &:hover {
    border: 2px solid var(--primary-color);
  }
  &:active {
    border: 2px solid var(--primary-color);
  }
`;
