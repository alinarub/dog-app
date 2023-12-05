import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function FavoritedDogsCard({ dog }) {
  const { image_link, name } = dog;
  return (
    <StyledListItem>
      <StyledLink href={`dogs/${name}`}>
        <StyledParagraph>{name}</StyledParagraph>

        <StyledImage
          src={image_link}
          alt="Image of the dog"
          width={512}
          height={342}
          blurDataURL="data:..."
          placeholder="blur" // Optional blur-up while loading
        />
      </StyledLink>
    </StyledListItem>
  );
}
const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;

  width: 100%;
  text-decoration: none;
  color: var(--font-color);
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
const StyledListItem = styled.li`
  background-color: var(--soft-background);
  border-radius: var(--borderradius-medium);
  &:hover {
    background-color: var(--accent-color);
    cursor: pointer;
  }
`;
