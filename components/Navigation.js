import styled from "styled-components";
import Image from "next/image";
import Logo from "./Logo";

export default function Navigation({ handleNavigation }) {
  return (
    <StyledNavigation>
      <StyledHeader>
        <StyledWrapper>
          <Logo />

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
    </StyledNavigation>
  );
}
const StyledNavigation = styled.nav`
  z-index: 20;
  top: 0;
  left: 0;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: var(--soft-background);
`;
const StyledHeadline = styled.h2`
  font-size: 2rem;
`;

const StyledHeader = styled.nav`
  z-index: 10;
  display: flex;
  justify-content: center;
  top: 0;
  position: fixed;
  height: 8rem;
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
