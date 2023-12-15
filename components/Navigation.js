import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Logo from "./Logo";
import AppInfo from "./AppInfo";

export default function Navigation({ handleNavigation, $hamburgerOpen }) {
  return (
    <StyledNavigation $hamburgerOpen={$hamburgerOpen} $delay="400ms">
      <StyledTopBar>
        <Logo handleNavigation={handleNavigation} />
        <StyledHeadline>Dog Genie</StyledHeadline>
        <StyledHamburgerButton type="button" onClick={handleNavigation}>
          <Image
            src="/close-icon.svg"
            alt="close icon"
            width={35}
            height={35}
            blurDataURL="data:..."
            placeholder="blur" // Optional blur-up while loading
          />
        </StyledHamburgerButton>
      </StyledTopBar>
      <StyledNavigationList>
        <StyledNavigationListItem
          $hamburgerOpen={$hamburgerOpen}
          $delay="300ms"
        >
          <StyledLink href="/" onClick={handleNavigation}>
            Home
          </StyledLink>
        </StyledNavigationListItem>
        <StyledNavigationListItem
          $hamburgerOpen={$hamburgerOpen}
          $delay="400ms"
        >
          <StyledLink href="/quiz-page" onClick={handleNavigation}>
            Quiz page
          </StyledLink>
        </StyledNavigationListItem>
        <StyledNavigationListItem
          $hamburgerOpen={$hamburgerOpen}
          $delay="500ms"
        >
          <StyledLink href="/dogs" onClick={handleNavigation}>
            All dogs
          </StyledLink>
        </StyledNavigationListItem>
        <StyledNavigationListItem
          $hamburgerOpen={$hamburgerOpen}
          $delay="600ms"
        >
          <StyledLink href="/favorite-dogs" onClick={handleNavigation}>
            Favorite dogs
          </StyledLink>
        </StyledNavigationListItem>
        <StyledNavigationListItem
          $hamburgerOpen={$hamburgerOpen}
          $delay="700ms"
        >
          <StyledLink href="/statistics" onClick={handleNavigation}>
            Statistics
          </StyledLink>
        </StyledNavigationListItem>
        <StyledNavigationListItem
          $hamburgerOpen={$hamburgerOpen}
          $delay="800ms"
        >
          <StyledLink href="/faq" onClick={handleNavigation}>
            FAQ
          </StyledLink>
        </StyledNavigationListItem>
      </StyledNavigationList>
      <AppInfo $hamburgerOpen={$hamburgerOpen} $delay="900ms" />
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  display: flex;
  overflow: hidden;
  visibility: ${(props) => (props.$hamburgerOpen ? "visible" : "hidden")};
  transition: visibility ${(props) => props.$delay} linear,
    opacity ${(props) => props.$delay} linear;
  opacity: ${(props) => (props.$hamburgerOpen ? 1 : 0)};
  flex-direction: column;
  justify-content: start;
  align-items: center;
  z-index: 20;
  top: 6.2rem;
  left: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: var(--soft-background);
`;

const StyledTopBar = styled.div`
  top: 0;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr 10rem 1fr;
  align-items: center;
  position: fixed;
  width: 100%;
  background-color: var(--soft-background);
  padding: 0 1rem;
`;

const StyledHamburgerButton = styled.button`
  justify-self: end;
  border: none;
  background-color: transparent;
  cursor: pointer;
  background-color: var(--accent-color);
  border-radius: 50%;
`;

const StyledHeadline = styled.h2`
  justify-self: center;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.05rem;
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
  padding: 0.2rem 1em;
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
`;
const StyledNavigationListItem = styled.li`
  visibility: ${(props) => (props.$hamburgerOpen ? "visible" : "hidden")};
  transition: visibility ${(props) => props.$delay} linear,
    opacity ${(props) => props.$delay} linear;
  opacity: ${(props) => (props.$hamburgerOpen ? 1 : 0)};
  &:not(:last-child) {
    border-bottom: 2px solid var(--accent-color);
  }
  &:first-child {
    transition-delay: 300ms;
  }
  &:nth-child(2) {
    transition-delay: 400ms;
  }
  &:nth-child(3) {
    transition-delay: 500ms;
  }
  &:nth-child(4) {
    transition-delay: 600ms;
  }
  &:nth-child(5) {
    transition-delay: 700ms;
  }
  &:nth-child(6) {
    transition-delay: 800ms;
  }
`;
