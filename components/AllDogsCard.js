import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function AllDogsCard({ dog }) {
  const { image_link, name } = dog;
  return (
    <StyledLink href={`dogs/${name}`}>
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
  border-radius: var(--borderradius-small);
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
`;

const StyledImage = styled(Image)`
  width: 6rem;
  height: auto;

  border-top-right-radius: var(--borderradius-small);
  border-bottom-right-radius: var(--borderradius-small);
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--font-color);
`;
