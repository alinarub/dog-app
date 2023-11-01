import ImageTextModule from "@/components/ImageTextModule";
import useSWR from "swr";
import Image from "next/image";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function QuizResults() {
  const router = useRouter();
  const { data: dogs, isLoading } = useSWR(
    router.isReady
      ? `/api/quizResults?${new URLSearchParams(router.query)}`
      : null,
    fetcher
  );

  if (!dogs || isLoading) {
    return "Loading...";
  }
  // if (assignedPoints.length === 0) {
  //   return null;
  // }

  // Sort by points descending
  // const sortedAssignedPoints = assignedPoints.toSorted(
  //   (a, b) => b.points - a.points
  // );

  return (
    <div>
      <ImageTextModule showImage>
        Here we meet again. The dog results are shown in descending order,
        according to their points.
      </ImageTextModule>
      <ul>
        {dogs.map(({ name, points, image_link }) => (
          <li key={name}>
            {name} <span>{points}</span>
            <Image
              src={image_link}
              alt="Logo of the dog"
              width={256 / 2}
              height={171 / 2}
              blurDataURL="data:..."
              placeholder="blur" // Optional blur-up while loading
            />
          </li>
        ))}
      </ul>
      <p>Total dogs: {dogs.length}</p>
    </div>
  );
}
