import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
import FavoritedDogsCard from "@/components/FavoritedDogsCard";
import Headline from "@/components/Headline";
import ImageTextModule from "@/components/ImageTextModule";
import Link from "next/link";
import useSWR from "swr";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function FavoriteDogs() {
  const [favoriteDogs, setFavoriteDogs] = useLocalStorageState("favoriteDogs", {
    defaultValue: [],
  });

  const { data, error, isLoading } = useSWR(`/api/dogs`);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <LoadingSpinner />;

  const filteredDogs = data.filter((fetchedDog) => {
    const dog = favoriteDogs.find(
      (findDog) => fetchedDog.name === findDog.name
    );

    return dog?.isFavorited === true;
  });

  return (
    <>
      <ImageTextModule $showImage>
        Here you can gather all of your favorite dogs that you stumble upon.
      </ImageTextModule>
      <Headline>Favorites</Headline>

      {filteredDogs.length === 0 ? (
        <StyledParagraph>
          Start favoriting dogs. ❤️ Visit the All dogs page.
        </StyledParagraph>
      ) : (
        <StyledList>
          {filteredDogs.map((dog) => {
            return <FavoritedDogsCard dog={dog} key={dog.name} />;
          })}
        </StyledList>
      )}
    </>
  );
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: var(--mobilewidth);
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 2rem;
  gap: 1rem;
`;

const StyledParagraph = styled.p`
  margin-top: 1.5rem;
  text-align: center;
`;
