import useSWR from "swr";
import { useState } from "react";
import { useEffect } from "react";
import Fuse from "fuse.js";
import styled from "styled-components";
import LoadingSpinner from "@/components/LoadingSpinner";
import AllDogsCard from "@/components/AllDogsCard";
import Headline from "@/components/Headline";
import SearchBar from "@/components/SearchBar";

const fuseOptions = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  threshold: 0.3,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: ["name"],
};

export default function Dogs() {
  const [results, setResults] = useState([]);
  const [fuse, setFuse] = useState(null);
  const [isFuseActive, setIsFuseActive] = useState(false);
  useEffect(() => {
    async function getDogs() {
      const response = await fetch(`/api/dogs`);
      const fetchedDogs = await response.json();
      setFuse(new Fuse(fetchedDogs, fuseOptions));
    }

    getDogs();
  }, []);

  // Search logic START
  function handleSearch(event) {
    event.preventDefault();
    if (!fuse) {
      return;
    }
    const searchPattern = event.target.value;
    const searchResult = fuse.search(searchPattern);
    setResults(searchResult);
    searchPattern.length === 0 ? setIsFuseActive(false) : setIsFuseActive(true);
  }
  // Search logic END

  // Get dogs from Backend at the beginning of page load
  const { data: dogs, isLoading } = useSWR(`/api/dogs`);
  if (!dogs || isLoading) {
    return <LoadingSpinner />;
  }
  const alphabeticallySortedDogs = dogs.sort(function (a, b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });
  return (
    <>
      <Headline $marginTop="2rem">All dogs</Headline>
      <SearchBar handleSearch={handleSearch} dogsLength={dogs.length} />
      <StyledList>
        {!isFuseActive &&
          alphabeticallySortedDogs.map((dog) => {
            return <AllDogsCard key={dog.name} dog={dog} />;
          })}
        {results.map((dog) => {
          return <AllDogsCard key={dog.item.name} dog={dog.item} />;
        })}
      </StyledList>
      {isFuseActive && results.length === 0 && (
        <StyledParagraph>No matching dogs. 🐶🥺</StyledParagraph>
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
  margin-top: 1.5rem;
  gap: 1rem;
`;
const StyledParagraph = styled.p`
  text-align: center;
`;
