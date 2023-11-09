import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";
import ImageTextModule from "./ImageTextModule";
import styled, { keyframes } from "styled-components";

export default function Navigation({ handleNavigation }) {
  return (
    <StyledNavigation>
      <StyledHeader>
        <StyledWrapper>
          <Logo handleNavigation={handleNavigation} />
          <StyledHeadline>Dog Genie</StyledHeadline>
          <StyledHamburgerButton type="button" onClick={handleNavigation}>
            <Image
              src="/close-icon.svg"
              alt="close icon"
              width={40}
              height={40}
              blurDataURL="data:..."
              placeholder="blur" // Optional blur-up while loading
            />
          </StyledHamburgerButton>
        </StyledWrapper>
      </StyledHeader>
      <StyledNavigationList>
        <StyledNavigationListItem>
          <StyledLink href="/" onClick={handleNavigation}>
            Home
          </StyledLink>
        </StyledNavigationListItem>
        <StyledNavigationListItem>
          <StyledLink href="/quiz-page" onClick={handleNavigation}>
            Quiz page
          </StyledLink>
        </StyledNavigationListItem>
        <StyledNavigationListItem>
          <StyledLink href="/dogs" onClick={handleNavigation}>
            All dogs
          </StyledLink>
        </StyledNavigationListItem>
      </StyledNavigationList>
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
          <StyledSimpleLink
            href="https://github.com/gregorsart"
            target="_blank"
          >
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
    </StyledNavigation>
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
const StyledNavigation = styled.nav`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 20;
  top: 0;
  left: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: var(--soft-background);
  animation: ${customAnimation} 100ms ease-in-out forwards;
`;

const StyledHeader = styled.nav`
  z-index: 10;
  display: flex;
  justify-content: center;
  top: 0;
  position: fixed;
  height: 6.2rem;
  width: 100%;
  background-color: var(--soft-background);
  padding: var(--basicmargin) 0;
`;

const StyledWrapper = styled.div`
  width: var(--mobilewidth);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledHamburgerButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const StyledHeadline = styled.h2`
  font-size: 2rem;
`;

const StyledSimpleLink = styled(Link)`
  text-decoration: none;
  color: var(--font-color);
  border-bottom: 2px solid var(--accent-color);
  &:hover {
    border-bottom: 2px solid var(--primary-color);
  }
`;
const StyledLink = styled(Link)`
  display: flex;
  min-width: 8rem;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  background-color: var(--soft-background);
  color: var(--font-color);
  text-decoration: none;
  font-size: 1rem;
  text-align: center;
  margin: 0.4rem;
  padding: 0.7rem 1em;
  border: 2px solid var(--soft-background);
  border-radius: var(--borderradius-small);
  &:hover {
    background-color: var(--accent-color);
  }
  &:active {
    border: 2px solid var(--primary-color);
  }
`;
const StyledNavigationList = styled.ul`
  z-index: 50;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -8rem;
`;
const StyledNavigationListItem = styled.li`
  opacity: 0;
  &:not(:last-child) {
    border-bottom: 2px solid var(--accent-color);
  }
  &:first-child {
    animation: ${customAnimation} 0.6s 0.2s ease-in-out forwards;
  }
  &:nth-child(2) {
    animation: ${customAnimation} 0.6s 0.3s ease-in-out forwards;
  }
  &:nth-child(3) {
    animation: ${customAnimation} 0.6s 0.4s ease-in-out forwards;
  }
`;
const StyledImageTextModuleWrapper = styled.div`
  opacity: 0;
  animation: ${customAnimation} 0.6s 0.8s ease-in-out forwards;
`;
