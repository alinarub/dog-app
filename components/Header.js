import Logo from "./Logo";
import Image from "next/image";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledNav>
      <StyledWrapper>
        <Logo />
        <StyledHeadline>Dog Genie</StyledHeadline>
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

const StyledWrapper = styled.div`
  width: var(--mobilewidth);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
