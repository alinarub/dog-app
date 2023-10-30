import ImageTextModule from "@/components/ImageTextModule";

export default function QuizResults({ assignedPoints }) {
  if (assignedPoints.length === 0) {
    return null;
  }

  // Sort by points descending
  const sortedAssignedPoints = assignedPoints.toSorted(
    (a, b) => b.points - a.points
  );

  return (
    <div>
      <ImageTextModule showimage={true}>
        Here we meet again. The dog results are shown in descending order,
        according to their points.
      </ImageTextModule>
      <ul>
        {sortedAssignedPoints.map((dog) => {
          return (
            <li key={dog.name}>
              {dog.name}
              <span>{dog.points}</span>
            </li>
          );
        })}
      </ul>
      <p>Total dogs: {assignedPoints.length}</p>
    </div>
  );
}
