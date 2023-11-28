import Header from "./Header";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <StyledContainer>
      <Header />
      <StyledMain>{children}</StyledMain>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledMain = styled.main`
  margin: auto;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  margin-top: 6.2rem;
`;
