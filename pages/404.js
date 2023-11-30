import Image from "next/image";
import styled from "styled-components";
import image404 from "@/public/404.png";
import LinkButton from "@/components/LinkButton";

export default function Custom404() {
  return (
    <StyledWrapper>
      <StyledHeadline>404 </StyledHeadline>

      <StyledImage
        src={image404}
        alt="Logo of a Genie with a Lamp"
        width={1920}
        height={1920}
        blurDataURL="data:..."
        placeholder="blur" // Optional blur-up while loading
      />
      <LinkButton href={"/"}>Go back home </LinkButton>
    </StyledWrapper>
  );
}

const StyledImage = styled(Image)`
  width: auto;
  height: auto;
  border-radius: var(--borderradius-small);
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const StyledHeadline = styled.h1`
  color: var(--background-color);
`;
