import Link from "next/link";
import styled from "styled-components";
import ImageTextModule from "./ImageTextModule";

export default function AppInfo({ $hamburgerOpen, $delay }) {
  return (
    <StyledImageTextModuleWrapper
      $hamburgerOpen={$hamburgerOpen}
      $delay={$delay}
    >
      <ImageTextModule $makeGray>
        This little helper was brought to you by{" "}
        <StyledSimpleLink
          href="https://www.github.com/alinarub"
          target="_blank"
        >
          Alina
        </StyledSimpleLink>
        ,{" "}
        <StyledSimpleLink
          href="https://github.com/AchimBartscht"
          target="_blank"
        >
          Achim
        </StyledSimpleLink>{" "}
        and{" "}
        <StyledSimpleLink href="https://github.com/gregorsart" target="_blank">
          Gregor
        </StyledSimpleLink>
        . The website was created in 2023 as a capstone project within our web
        dev bootcamp at{" "}
        <StyledSimpleLink href="https://www.neuefische.de/en" target="_blank">
          neue fische
        </StyledSimpleLink>
        .
      </ImageTextModule>
    </StyledImageTextModuleWrapper>
  );
}

const StyledSimpleLink = styled(Link)`
  text-decoration: underline;
  text-decoration-color: var(--accent-color);
  text-decoration-thickness: 0.125rem;
  text-underline-offset: 0.2rem;
  color: var(--font-color);
  &:hover {
    text-decoration-color: var(--primary-color);
  }
`;

const StyledImageTextModuleWrapper = styled.div`
  visibility: ${(props) => (props.$hamburgerOpen ? "visible" : "hidden")};
  transition: visibility ${(props) => props.$delay} linear,
    opacity ${(props) => props.$delay} linear;
  opacity: ${(props) => (props.$hamburgerOpen ? 1 : 0)};
  transition-delay: 600ms;
  margin: auto;
  margin-top: -1rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;
