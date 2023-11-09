import useSWR from "swr";
import { useRouter } from "next/router";
import LoadingSpinner from "@/components/LoadingSpinner";
import AllDogsCard from "@/components/AllDogsCard";
import styled from "styled-components";

export default function Dogs() {
  // get route from URL
  const router = useRouter();

  const { data: dogs, isLoading } = useSWR(
    router.isReady ? `/api/dogs?` : null
  );

  if (!dogs || isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <StyledList>
      {dogs.map((dog, index) => {
        if (index < 5) {
          return <AllDogsCard key={dog.name} dog={dog} />;
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
