import styled from "styled-components";
import Image from "next/image";
import genieLogo from "../public/genie-logo.png";

export default function ImageTextModule() {
  return (
    <StyledSection>
      <StyledImage
        src={genieLogo}
        alt="Logo of a Genie with a Lamp"
        width={1004 / 2}
        height={1396 / 2}
        blurDataURL="data:..."
        placeholder="blur" // Optional blur-up while loading
      />
      <p>
        I am the dog genie and I will help you to find the right dog for you.
        <br />
        <br />
        First let us take a short quiz!
      </p>
    </StyledSection>
  );
}

const StyledSection = styled.div`
  margin: 0 var(--basicmargin);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledImage = styled(Image)`
  width: 10rem;
  height: auto;
`;
