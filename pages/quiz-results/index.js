export default function QuizResults({ assignedPoints }) {
  console.log("neue API Berechnung", assignedPoints);
  const sortedAssignedPoints = assignedPoints.toSorted(
    (a, b) => b.points - a.points
  );

  // let dogPromises = [];
  // for (let offset = 0; offset < 200; offset += 20) {
  //   // dogPromises.push(fetch(`example.api/incomes/${offset}`));
  //   dogPromises.push(`hier kommt später die api hin/${offset}`);
  // }
  // console.log("offset Sprünge", dogPromises);

  return (
    <div>
      <h2>List of dogs with their points</h2>
      <ul>
        {assignedPoints.map((dog) => {
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
