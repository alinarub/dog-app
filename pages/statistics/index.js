import useSWR from "swr";
import LoadingSpinner from "@/components/LoadingSpinner";

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
  return <div>Statistics</div>;
}
