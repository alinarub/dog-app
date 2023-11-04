import styled from "styled-components";
import Image from "next/image";

export default function RatingLine({ characteristic, rating }) {
  let stars = [];
  for (let i = 1; i < 6; ++i) {
    if (i <= +rating) {
      stars.push(
        <StyledImage
          src="/paw-icon-yellow.svg"
          alt="Icon of a paw"
          width={15}
          height={15}
          blurDataURL="data:..."
        />
      );
    } else {
      stars.push(
        <StyledImage
          src="/paw-icon-gray.svg"
          alt="Icon of a paw"
          width={15}
          height={15}
          blurDataURL="data:..."
        />
      );
    }
  }

  return (
    <StyledSection>
      <p>{characteristic}</p>
      <StyledWrapper>{stars}</StyledWrapper>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
`;
const StyledImage = styled(Image)`
  display: flex;
  justify-content: space-between;
`;
const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
