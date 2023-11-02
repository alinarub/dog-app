import Image from "next/image";
import styled from "styled-components";

export default function DogCard({ dogs, showPoints }) {
  return (
    <StyledList>
      {dogs.map(({ name, points, image_link }, index) => {
        if (index < 5) {
          return (
            <StyledListItem key={name}>
              {showPoints && <StyledPoints>{points}</StyledPoints>}
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
      })}
    </StyledList>
  );
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: var(--mobilewidth);
  margin: var(--basicmargin);
  gap: 1rem;
`;
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
