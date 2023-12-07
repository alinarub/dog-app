import ImageTextModule from "@/components/ImageTextModule";
import Headline from "@/components/Headline";
import useSWR from "swr";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useRouter } from "next/router";
import DogCard from "@/components/DogCard";

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
      </ImageTextModule>
      <Headline>Your best matches</Headline>
      <DogCard dogs={dogs} showPoints />
    </>
  );
}
