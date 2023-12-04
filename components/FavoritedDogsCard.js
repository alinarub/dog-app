import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function ResultsDogsCard({ dog }) {
  const { image_link, name } = dog;
  return (
    <StyledLink href={`dogs/${name}`}>
      <StyledListItem>
        <StyledParagraph>{name}</StyledParagraph>

        <StyledImage
          src={image_link}
          alt="Image of the dog"
          width={512}
          height={342}
          blurDataURL="data:..."
          placeholder="blur" // Optional blur-up while loading
        />
      </StyledListItem>
    </StyledLink>
  );
}
const StyledListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--soft-background);
  border-radius: var(--borderradius-medium);
  width: 100%;
  &:hover {
    background-color: var(--accent-color);
    cursor: pointer;
  }
`;
const StyledParagraph = styled.p`
  width: 100%;
  text-align: left;
  font-size: 0.9rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const StyledImage = styled(Image)`
  width: 10rem;
  height: auto;

  border-top-right-radius: var(--borderradius-medium);
  border-bottom-right-radius: var(--borderradius-medium);
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--font-color);
`;
