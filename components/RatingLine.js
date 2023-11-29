import styled from "styled-components";
import Image from "next/image";

export default function RatingLine({ characteristic, rating }) {
  let stars = [];

  for (let index = 1; index < 6; ++index) {
    stars.push(
      <StyledImage
        key={index}
        src={index <= +rating ? "/paw-icon-yellow.svg" : "/paw-icon-gray.svg"}
        alt="Icon of a paw"
        width={15}
        height={15}
        blurDataURL="data:..."
      />
    );
  }

  return (
    <StyledSection>
      <p>{characteristic}</p>
      <StyledWrapper>{stars}</StyledWrapper>
    </StyledSection>
  );
}

const StyledSection = styled.article`
  display: flex;
  justify-content: space-between;
`;
const StyledImage = styled(Image)`
  display: flex;
  justify-content: space-between;
`;
const StyledWrapper = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
