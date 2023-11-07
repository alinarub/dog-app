import Image from "next/image";
import styled, { keyframes } from "styled-components";

export default function LoadingSpinner() {
  return (
    <StyledWrapper>
      <StyledImage
        src="/lamp-icon.png"
        alt="Icon of a lamp"
        width={120}
        height={120}
        blurDataURL="data:..."
      />
    </StyledWrapper>
  );
}

const customAnimation = keyframes`
    0% {
      transform: rotate(0turn);
      opacity: 0;
    }
    25% {
      transform: rotate(0.08turn);
    }
    50% {
      transform: rotate(0turn);
     
    }
    75% {
      transform: rotate(-0.08turn);
      opacity: 1;
    }
    100% {
      transform: rotate(0turn);
      opacity: 0;
    }
`;

const StyledWrapper = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  animation: ${customAnimation} 2500ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

const StyledImage = styled(Image)`
  margin-top: -1rem;
`;
