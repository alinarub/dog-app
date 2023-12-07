import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import Confetti from "react-confetti";
import styled from "styled-components";
import LoadingSpinner from "@/components/LoadingSpinner";
import ImageTextModule from "@/components/ImageTextModule";
import Headline from "@/components/Headline";
import ResultsDogsCard from "@/components/ResultsDogsCard";

export default function QuizResults() {
  const router = useRouter();
  // Get user choices from form
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
        <StyledSimpleLink href="/quiz-page">Restart the quiz!</StyledSimpleLink>
      </ImageTextModule>
      <Confetti recycle={false} />
      <Headline>Your best matches</Headline>

      <StyledList>
        {dogs.slice(0, 5).map((dog) => (
          <ResultsDogsCard dog={dog} key={dog.name} />
        ))}
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
  display: inline-block;
  text-decoration: underline;
  text-decoration-color: var(--accent-color);
  text-decoration-thickness: 0.125rem;
  text-underline-offset: 0.2rem;
  color: var(--font-color);
  margin-top: 0.8rem;
  &:hover {
    text-decoration-color: var(--primary-color);
  }
`;
