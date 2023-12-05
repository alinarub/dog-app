import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function ResultsDogsCard({ dog }) {
  const { image_link, name, points } = dog;
  return (
    <StyledListItem>
      <StyledLink href={`dogs/${name}`}>
        <StyledPoints>{points}</StyledPoints>
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
const StyledListItem = styled.li`
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
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--font-color);
`;
const StyledPoints = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0.6rem;
  top: 0.6rem;
  background-color: var(--accent-color);
  padding: 0.4rem;
  height: 25px;
  width: 25px;
  border-radius: 100%;
`;
