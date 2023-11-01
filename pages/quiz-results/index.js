import ImageTextModule from "@/components/ImageTextModule";
import Headline from "@/components/Headline";
import useSWR from "swr";

import { useRouter } from "next/router";
import DogCard from "@/components/DogCard";

// const fetcher = (url) => fetch(url).then((response) => response.json());

export default function QuizResults() {
  const router = useRouter();
  const { data: dogs, isLoading } = useSWR(
    router.isReady
      ? `/api/quizResults?${new URLSearchParams(router.query)}`
      : null
  );

  if (!dogs || isLoading) {
    return "Loading...";
  }

  return (
    <>
      <ImageTextModule $showImage>
        Here we meet again. The dog results are shown in descending order,
        according to their points.
      </ImageTextModule>
      <Headline>Your best matches</Headline>
      <DogCard dogs={dogs} />
      <p>Total dogs: {dogs.length}</p>
    </>
  );
}
