import Image from "next/image";
import styled from "styled-components";
import image404 from "@/public/404.png";

export default function Custom404() {
  return (
    <StyledWrapper>
      <StyledImage
        src={image404}
        alt="Logo of a Genie with a Lamp"
        width={1920}
        height={1920}
        blurDataURL="data:..."
        placeholder="blur" // Optional blur-up while loading
      />
      <h2>404</h2>
    </StyledWrapper>
  );
}

const StyledImage = styled(Image)`
  width: auto;
  height: auto;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  background-color: var(--primary-color);
`;
