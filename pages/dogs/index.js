import useSWR from "swr";
import { useState } from "react";
import { useEffect } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import AllDogsCard from "@/components/AllDogsCard";
import styled from "styled-components";
import Headline from "@/components/Headline";
import SearchBar from "@/components/SearchBar";
import Fuse from "fuse.js";

/*
This example uses Fuse.js as a fuzzy search
See the docs for more information: https://www.fusejs.io/
*/

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
    async function getPokemon() {
      const response = await fetch(`/api/dogs`);
      const fetchedPokemon = await response.json();
      console.log("fetchedPokemon", fetchedPokemon);
      setFuse(new Fuse(fetchedPokemon, fuseOptions));
      console.log("fuse", fuse);
    }

    getPokemon();
    console.log("results", results);
  }, []);
  console.log("fuse", fuse);
  // Search logic START
  function handleSearch(event) {
    if (!fuse) {
      return;
    }
    const searchPattern = event.target.value;
    console.log("search pattern", searchPattern);
    const searchResult = fuse.search(searchPattern).slice(0, 15);
    // .slice(0, 10) will ensure there will never be more than 10 results
    console.log("search results", searchResult);
    setResults(searchResult);
    searchPattern.length === 0 ? setIsFuseActive(false) : setIsFuseActive(true);
  }
  // Search logic END
  console.log("results after remder", results);

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
      {" "}
      <Headline $marginTop="8rem">All dogs</Headline>
      <SearchBar handleSearch={handleSearch} />
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
  margin: var(--basicmargin);
  gap: 1rem;
`;
const StyledParagraph = styled.p`
  text-align: center;
`;
