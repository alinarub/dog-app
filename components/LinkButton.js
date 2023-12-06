import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function LinkButton({ href, children, $fullWidth }) {
  return (
    <>
      {href && (
        <StyledLink $fullWidth={$fullWidth} href={href}>
          {children}{" "}
          <StyledImage
            src="/arrow-right.svg"
            alt="Icon of an arrow"
            width={29}
            height={29}
            blurDataURL="data:..."
          />
        </StyledLink>
      )}
      {!href && (
        <StyledButton $fullWidth={$fullWidth} type="submit">
          {children}
          <StyledImage
            src="/arrow-right.svg"
            alt="Icon of an arrow"
            width={29}
            height={29}
            blurDataURL="data:..."
          />
        </StyledButton>
      )}
    </>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  width: ${({ $fullWidth }) =>
    $fullWidth ? `var(--mobilewidth)` : "max-content"};
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  background-color: var(--soft-background);
  color: var(--font-color);
  text-decoration: none;
  font-size: 1rem;
  text-align: center;
  margin: auto;
  margin-top: 1.3rem;
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
const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 1.6em;
  margin-top: 1.5rem;

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

const StyledImage = styled(Image)`
  margin-left: 0.3rem;
  transition: all 0.25s;
  ${StyledButton}:hover & {
    margin-left: 1rem;
  }
  ${StyledLink}:hover & {
    margin-left: 1rem;
  }
`;
