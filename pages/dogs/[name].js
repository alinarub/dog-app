import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";
import styled from "styled-components";
import Headline from "@/components/Headline";
import RatingLine from "@/components/RatingLine";

export default function Name() {
  // get route from URL
  const router = useRouter();

  const { data: dogs, isLoading } = useSWR(
    router.isReady ? `/api/dogs?` : null
  );
  const routerName = router.query.name;

  if (!dogs || isLoading) {
    return "Loading...";
  }

  // find dog according to URL
  const dog = dogs.find((arrayItem) => arrayItem.name === routerName);

  return (
    <>
      <StyledImage
        src={dog.image_link}
        alt={`Image of ${dog.name}`}
        width={256}
        height={171}
        blurDataURL="data:..."
        placeholder="blur" // Optional blur-up while loading
      />

      <Headline> {dog.name}</Headline>
      <StyledList>
        <StyledListItem>
          <RatingLine
            rating={dog.good_with_children}
            characteristic="Good with children"
          />
        </StyledListItem>
        <StyledListItem>
          <RatingLine
            rating={dog.good_with_other_dogs}
            characteristic="Good with other dogs"
          />
        </StyledListItem>
        <StyledListItem>
          <RatingLine
            rating={dog.protectiveness}
            characteristic="Protectiveness"
          />
        </StyledListItem>
        <StyledListItem>
          <RatingLine rating={dog.shedding} characteristic="Shedding" />
        </StyledListItem>
        <StyledListItem>
          <RatingLine rating={dog.energy} characteristic="Energy" />
        </StyledListItem>
        <StyledListItem>
          <RatingLine rating={dog.barking} characteristic="Barking" />
        </StyledListItem>
        <StyledListItem>
          <RatingLine rating={dog.trainability} characteristic="Trainability" />
        </StyledListItem>
      </StyledList>
      <StyledNavigation>
        <StyledButton>
          <StyledImage
            type="button"
            onClick={() => router.back()}
            src="/arrow-left.svg"
            alt="Icon of an arrow"
            width={29}
            height={29}
            blurDataURL="data:..."
          />
        </StyledButton>
      </StyledNavigation>
    </>
  );
}

const StyledImage = styled(Image)`
  border-radius: var(--borderradius-medium);
  outline: 2px solid var(--primary-color);
  outline-offset: 0.5rem;
  margin: auto;
`;

const StyledList = styled.ul`
  list-style: none;
  margin-left: -0.6rem;
  margin: var(--basicmargin) 0;
`;
const StyledListItem = styled.li`
  margin: 0.2rem 0;
`;
const StyledNavigation = styled.nav`
  margin: 2rem 0;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 1.6em;

  cursor: pointer;
  background-color: var(--soft-background);
  color: var(--font-color);
  border-radius: var(--borderradius-small);
  border: 2px solid var(--soft-background);
  &:hover {
    border: 2px solid var(--primary-color);
    background-color: var(--primary-color);
    color: var(--background-color);
  }
`;
