export default function QuizResults({ assignedPoints }) {
  const filteredAssignedPoints = assignedPoints;
  filteredAssignedPoints.sort((a, b) => b.points - a.points);
  return (
    <div>
      <h2>List of dogs with their points</h2>
      {/* <ul>
        {filteredAssignedPoints.map((dog) => {
          return (
            <li key={dog.name}>
              {dog.name} -- {dog.points}
            </li>
          );
        })}
      </ul> */}
      <p>Total dogs: {assignedPoints.length}</p>
    </div>
  );
}
