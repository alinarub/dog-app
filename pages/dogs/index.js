import useSWR from "swr";
import { useRouter } from "next/router";
import LoadingSpinner from "@/components/LoadingSpinner";
import AllDogsCard from "@/components/AllDogsCard";
import styled from "styled-components";
import Headline from "@/components/Headline";

export default function Dogs() {
  // get route from URL
  const router = useRouter();

  const { data: dogs, isLoading } = useSWR(
    router.isReady ? `/api/dogs?` : null
  );

  if (!dogs || isLoading) {
    return <LoadingSpinner />;
  }
  const alphabeticallySortedDogs = dogs.sort(function (a, b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });
  return (
    <>
      <StyleHeadlineWrapper>
        <Headline>All dogs</Headline>
      </StyleHeadlineWrapper>
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
const StyleHeadlineWrapper = styled.div`
  margin-top: 11rem;
`;
