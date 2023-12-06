import LoadingSpinner from "@/components/LoadingSpinner";
import useSWR from "swr";
export default function Statistics() {
  const { data, error, isLoading } = useSWR("/api/statistics");

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (!data) {
    return;
  }
  if (error) {
    return <h2>An error occured...</h2>;
  }

  console.log("data---", data);
  return <div>Statistics</div>;
}
