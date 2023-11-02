import Logo from "./Logo";
import Image from "next/image";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledNav>
      <StyledWrapper>
        <Logo />
        <StyledHeadline>Dog Genie</StyledHeadline>

        <StyledHamburger
          src="/hamburger-icon.svg"
          alt="Icon of a hamburger menu"
          width={40}
          height={40}
          blurDataURL="data:..."
          placeholder="blur" // Optional blur-up while loading
        />
      </StyledWrapper>
    </StyledNav>
  );
}

const StyledHeadline = styled.h2`
  font-size: 2rem;
`;

const StyledNav = styled.nav`
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

const StyledHamburger = styled(Image)`
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: rotate(90deg);
  }
`;
const StyledWrapper = styled.div`
  width: var(--mobilewidth);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
