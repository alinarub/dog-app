import styled from "styled-components";
import Image from "next/image";

export default function AllDogsCard({ dog }) {
  const { image_link, name } = dog;
  return (
    <StyledListItem>
      <StyledParagraph>{name}</StyledParagraph>

      <StyledImage
        src={image_link}
        alt="Image of the dog"
        width={256}
        height={171}
        blurDataURL="data:..."
        placeholder="blur" // Optional blur-up while loading
      />
    </StyledListItem>
  );
}
const StyledListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--accent-color);
  border-radius: var(--borderradius-medium);
  width: 100%;
  &:hover {
    border: 2px solid var(--primary-color);
    cursor: pointer;
  }
`;
const StyledParagraph = styled.p`
  width: 100%;
  text-align: center;
  margin-top: 1rem;
`;

const StyledImage = styled(Image)`
  border-radius: var(--borderradius-small);
  margin: 1rem;
  margin-bottom: 3.1rem;
`;
