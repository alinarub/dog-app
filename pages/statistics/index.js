import useSWR from "swr";
import LoadingSpinner from "@/components/LoadingSpinner";
import Headline from "@/components/Headline";

export default function Statistics() {
  const { data, error, isLoading } = useSWR("/api/statistics");

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (!data) {
    return;
  }
  if (error) {
    return <h2>An error occurred...</h2>;
  }

  console.log("data---", data);
  return (
    <>
      <Headline>Statistics</Headline>
      <p>{data.length} people have already taken the quiz before you!</p>
    </>
  );
}
