import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Logo from "./Logo";
import Navigation from "./Navigation";
import DarkmodeButton from "@/components/DarkmodeButton";

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

        <StyledWrapper>
          <DarkmodeButton />
          <StyledHamburgerButton type="button" onClick={handleNavigation}>
            <StyledHamburgerIcon
              src="/hamburger-icon.svg"
              alt="Icon of a hamburger menu"
              width={35}
              height={35}
            />
          </StyledHamburgerButton>
        </StyledWrapper>
      </StyledSection>
    </StyledHeader>
  );
}

const StyledHeadline = styled.h1`
  font-size: 2rem;
  line-height: 1;
  text-align: center;
  font-weight: 400;
  letter-spacing: 0.07rem;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
`;

const StyledSection = styled.section`
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr 7rem 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 15rem 1fr;
  }
  align-items: center;
  position: fixed;
  width: 100%;
  background-color: var(--soft-background);
  padding: 0 1rem;
  @media (min-width: 768px) {
    padding: 0 5rem;
  }
`;

const StyledHamburgerIcon = styled(Image)`
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: rotate(90deg);
  }
  background-color: var(--accent-color);
  border-radius: 50%;
  padding: 0.2rem;
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
