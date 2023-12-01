import ImageTextModule from "@/components/ImageTextModule";
import Headline from "@/components/Headline";
import useSWR from "swr";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useRouter } from "next/router";
import styled from "styled-components";
import FavoriteDogsCard from "@/components/ResultsDogsCard";
import Link from "next/link";

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
        <br />
        <br />
        <StyledSimpleLink href="/quiz-page">Restart the quiz!</StyledSimpleLink>
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
  margin-bottom: 2rem;
  gap: 1rem;
`;

const StyledSimpleLink = styled(Link)`
  text-decoration: underline;
  text-decoration-color: var(--accent-color);
  text-decoration-thickness: 0.125rem;
  text-underline-offset: 0.2rem;
  color: var(--font-color);
  &:hover {
    text-decoration-color: var(--primary-color);
  }
`;
