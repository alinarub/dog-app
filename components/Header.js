import Logo from "./Logo";
import Image from "next/image";
import styled from "styled-components";
import Navigation from "./Navigation";
import { useState } from "react";

export default function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  function handleNavigation() {
    setHamburgerOpen(!hamburgerOpen);
  }
  return (
    <StyledSection>
      <Navigation
        handleNavigation={handleNavigation}
        $hamburgerOpen={hamburgerOpen}
      />

      <StyledHeader>
        <StyledWrapper>
          <Logo />
          <StyledHeadline>Dog Genie</StyledHeadline>
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
        </StyledWrapper>
      </StyledHeader>
    </StyledSection>
  );
}

const StyledHeadline = styled.h2`
  font-size: 2rem;
`;

const StyledHeader = styled.header`
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
const StyledHamburgerIcon = styled(Image)`
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: rotate(90deg);
  }
`;

const StyledSection = styled.section`
  position: relative;
  width: 100%;
`;
const StyledHamburgerButton = styled.button`
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  border: none;
  background-color: transparent;
  &:hover {
    transform: rotate(90deg);
  }
`;
