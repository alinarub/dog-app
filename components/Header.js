import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Logo from "./Logo";
import Navigation from "./Navigation";
import ThemeButton from "./ThemeButton";

export default function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  function handleNavigation() {
    setHamburgerOpen(!hamburgerOpen);
  }
  return (
    <StyledHeader>
      <Navigation
        handleNavigation={handleNavigation}
        $hamburgerOpen={hamburgerOpen}
      />

      <StyledSection>
        <Logo />
        <StyledHeadline>Dog Genie</StyledHeadline>
        <div>
          <ThemeButton />
          <StyledHamburgerButton type="button" onClick={handleNavigation}>
            <StyledHamburgerIcon
              src="/hamburger-icon.svg"
              alt="Icon of a hamburger menu"
              width={40}
              height={40}
              blurDataURL="data:..."
              placeholder="blur" // Optional blur-up while loading
            />
          </StyledHamburgerButton>
        </div>
      </StyledSection>
    </StyledHeader>
  );
}

const StyledHeadline = styled.h1`
  justify-self: center;
  font-size: 2rem;
`;

const StyledSection = styled.section`
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr 10rem 1fr;
  align-items: center;
  position: fixed;
  width: 100%;
  background-color: var(--soft-background);
  padding: 0 var(--basicmargin);
`;

const StyledHamburgerIcon = styled(Image)`
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: rotate(90deg);
  }
`;

const StyledHeader = styled.header`
  position: relative;
  width: 100%;
`;
const StyledHamburgerButton = styled.button`
  justify-self: end;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  border: none;
  background-color: transparent;
  &:hover {
    transform: rotate(90deg);
  }
`;
