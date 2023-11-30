import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function ResultsDogsCard({ dog }) {
  const { image_link, name, points } = dog;
  return (
    <StyledLink href={`dogs/${name}`}>
      <StyledListItem>
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
  width: 10rem;
  height: auto;

  border-top-right-radius: var(--borderradius-small);
  border-bottom-right-radius: var(--borderradius-small);
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--font-color);
`;
const StyledPoints = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 3.1rem;
  top: 4.1rem;
  background-color: var(--accent-color);
  padding: 0.4rem;
  height: 25px;
  width: 25px;
  border-radius: 100%;
`;
