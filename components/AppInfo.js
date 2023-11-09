import Link from "next/link";
import ImageTextModule from "./ImageTextModule";
import styled, { keyframes } from "styled-components";

export default function AppInfo() {
  return (
    <StyledImageTextModuleWrapper>
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

const customAnimation = keyframes`
    0% {     
      opacity: 0;
    }
    30% {    
      opacity: 0.5;
    }
    60% {
      opacity: 0.8;
    }
    100% {   
      opacity: 1;
    }
`;

const StyledSimpleLink = styled(Link)`
  text-decoration: none;
  color: var(--font-color);
  border-bottom: 2px solid var(--accent-color);
  &:hover {
    border-bottom: 2px solid var(--primary-color);
  }
`;

const StyledImageTextModuleWrapper = styled.div`
  opacity: 0;
  animation: ${customAnimation} 0.6s 0.8s ease-in-out forwards;
`;
