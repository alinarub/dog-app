import Header from "./Header";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <StyledContainer>
      <Header />
      <main>{children}</main>
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
