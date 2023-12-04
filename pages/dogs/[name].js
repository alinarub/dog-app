import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import styled from "styled-components";
import Headline from "@/components/Headline";
import RatingLine from "@/components/RatingLine";
import LoadingSpinner from "@/components/LoadingSpinner";
import MoreDogInformation from "@/components/MoreDogInformation";
import useLocalStorageState from "use-local-storage-state";

export default function Name() {
  const [toggleInformation, setToggleInformation] = useState(false);
  const [toggleFavorite, setToggleFavorite] = useState(false);
  const [favoriteDogs, setFavoriteDogs] = useLocalStorageState("favoriteDogs", {
    defaultValue: [],
  });

  // get route from URL
  const router = useRouter();

  const { data: dogs, isLoading } = useSWR(
    router.isReady ? `/api/dogs?` : null
  );
  const routerName = router.query.name;

  if (!dogs || isLoading) {
    return <LoadingSpinner />;
  }

  // find dog according to URL
  const dog = dogs.find((findDog) => findDog.name === routerName);

  function toggleMoreDogInformation() {
    setToggleInformation(!toggleInformation);
  }

  const localDog = favoriteDogs.find((findDog) => findDog.name === dog.name);

  // click favorite button
  function handleAddFavorite() {
    setToggleFavorite(!toggleFavorite);
    const localDog = favoriteDogs.find((findDog) => findDog.name === dog.name);
    if (localDog) {
      setFavoriteDogs(
        favoriteDogs.map((favoriteDog) =>
          favoriteDog.name === dog.name
            ? { ...favoriteDog, isFavorited: !favoriteDog.isFavorited }
            : favoriteDog
        )
      );
    } else {
      setFavoriteDogs([{ name: dog.name, isFavorited: true }, ...favoriteDogs]);
    }
  }

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
      {toggleInformation && <MoreDogInformation dog={dog} />}
      <StyledNavigation>
        <StyledButton type="button" onClick={() => router.back()}>
          <StyledIconLeft
            src="/arrow-left.svg"
            alt="Icon of an arrow"
            width={29}
            height={29}
            blurDataURL="data:..."
          />
          back
        </StyledButton>
        <StyledButton type="button" onClick={handleAddFavorite}>
          {localDog?.isFavorited ? (
            <Image
              src="/heart-icon-filled.svg"
              alt="Icon of a filled heart"
              width={30}
              height={30}
              blurDataURL="data:..."
            />
          ) : (
            <Image
              src="/heart-icon-unfilled.svg"
              alt="Icon of an unfilled heart"
              width={30}
              height={30}
              blurDataURL="data:..."
            />
          )}
        </StyledButton>
        <StyledButton type="button" onClick={toggleMoreDogInformation}>
          {toggleInformation ? "less" : "more"}
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
  margin-top: 8rem;
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
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1rem 0.5em;
  cursor: pointer;
  background-color: var(--soft-background);
  color: var(--font-color);
  font-size: 0.7rem;
  border-radius: var(--borderradius-small);
  border: 2px solid var(--soft-background);
  &:hover {
    border: 2px solid var(--primary-color);
    background-color: var(--primary-color);
    color: var(--background-color);
  }
  min-width: 4.8rem;
`;

const StyledIconLeft = styled(Image)`
  margin-right: 0.3rem;
  transition: all 0.25s;
  ${StyledButton}:hover & {
    margin-right: 1rem;
  }
`;
