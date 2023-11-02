import styled from "styled-components";
import Image from "next/image";
import genieLogo from "../public/genie-logo.png";
import lampIcon from "../public/lamp-icon.png";

export default function ImageTextModule({ children, $showImage }) {
  return (
    <StyledSection>
      {!$showImage && (
        <StyledIcon
          src={lampIcon}
          alt="Icon of a lamp"
          width={80}
          height={80}
          blurDataURL="data:..."
          placeholder="blur" // Optional blur-up while loading
        />
      )}
      {$showImage && (
        <StyledImage
          src={genieLogo}
          alt="Logo of a Genie with a Lamp"
          width={1004 / 2}
          height={1396 / 2}
          blurDataURL="data:..."
          placeholder="blur" // Optional blur-up while loading
        />
      )}
      <StyledP $showImage={$showImage}>{children}</StyledP>
    </StyledSection>
  );
}

const StyledSection = styled.div`
  position: relative;
  width: var(--mobilewidth);
  margin: 2rem var(--basicmargin);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid var(--primary-color);
  border-radius: var(--borderradius-medium);
`;
const StyledImage = styled(Image)`
  width: 10rem;
  height: auto;
`;
const StyledP = styled.p`
  font-size: 1.1rem;
  padding: ${({ $showImage }) => ($showImage ? "0" : "2rem 2.5rem")};
  padding-right: ${({ $showImage }) => ($showImage ? "1rem" : "2.5rem")};
`;
const StyledIcon = styled(Image)`
  position: absolute;
  bottom: -2.5rem;
  left: 39%;
  background: var(--background-color);
  border-radius: 100%;
`;
