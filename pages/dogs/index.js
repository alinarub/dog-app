import useSWR from "swr";
import LoadingSpinner from "@/components/LoadingSpinner";
import AllDogsCard from "@/components/AllDogsCard";
import styled from "styled-components";
import Headline from "@/components/Headline";

export default function Dogs() {
  const { data: dogs, isLoading } = useSWR(`/api/dogs`);
  if (!dogs || isLoading) {
    return <LoadingSpinner />;
  }
  const alphabeticallySortedDogs = dogs.sort(function (a, b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });
  return (
    <>
      <Headline marginTop="11rem">All dogs</Headline>

      <StyledList>
        {alphabeticallySortedDogs.map((dog) => {
          return <AllDogsCard key={dog.name} dog={dog} />;
        })}
      </StyledList>
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
