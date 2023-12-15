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
        <StyledWrapper>
          <Logo />
          <StyledHeadline>
            Dog
            <br /> Genie
          </StyledHeadline>
        </StyledWrapper>
        <StyledWrapper>
          <DarkmodeButton />
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
      </StyledSection>
    </StyledHeader>
  );
}

const StyledHeadline = styled.h1`
  font-size: 2rem;
  line-height: 1;
  text-align: left;
  font-weight: 400;
  letter-spacing: 0.05rem;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
`;

const StyledSection = styled.section`
  z-index: 10;
  display: flex;
  justify-content: space-between;
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
  background-color: var(--primary-color);
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
