export default function QuizResults({ assignedPoints }) {
  // Sort by points descending
  const sortedAssignedPoints = assignedPoints.toSorted(
    (a, b) => b.points - a.points
  );

  return (
    <div>
      <h2>List of dogs with their points</h2>
      <ul>
        {sortedAssignedPoints.map((dog) => {
          return (
            <li key={dog.name}>
              {dog.name} -- {dog.points}
            </li>
          );
        })}
      </ul>
      <p>Total dogs: {assignedPoints.length}</p>
    </div>
  );
}
