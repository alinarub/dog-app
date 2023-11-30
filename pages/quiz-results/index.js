import ImageTextModule from "@/components/ImageTextModule";
import Headline from "@/components/Headline";
import useSWR from "swr";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useRouter } from "next/router";
import styled from "styled-components";
import FavoriteDogsCard from "@/components/ResultsDogsCard";

export default function QuizResults() {
  const router = useRouter();
  const { data: dogs, isLoading } = useSWR(
    router.isReady ? `/api/dogs?${new URLSearchParams(router.query)}` : null
  );

  if (!dogs || isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <ImageTextModule $showImage>
        Here we meet again. The dog results are shown in descending order,
        according to their points.
      </ImageTextModule>
      <Headline>Your best matches</Headline>

      <StyledList>
        {dogs.map((dog, index) => {
          if (index < 5) {
            return <FavoriteDogsCard dog={dog} key={dog.name} />;
          }
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
  margin: auto;
  margin-top: 1rem;
  gap: 1rem;
`;
