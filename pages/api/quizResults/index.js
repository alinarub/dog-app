export default async function handler(request, response) {
  if (request.method === "GET") {
    // Destructuring Assignment
    const { barking, energy, trainability, protectiveness, shedding } =
      request.query;

    // Arrays for all seven Questions
    let dogPromisesBarking = [];
    let dogPromisesEnergy = [];
    let dogPromisesTrainability = [];
    let dogPromisesProtectiveness = [];
    let dogPromisesShedding = [];

    // Loop for all 9 offsets and all 7 questions
    for (let offset = 0; offset < 200; offset += 20) {
      // barking
      dogPromisesBarking.push(
        fetch(
          `https://api.api-ninjas.com/v1/dogs?barking=${barking}&offset=${offset}`,
          {
            headers: {
              "X-Api-Key": process.env.DOG_API_KEY,
            },
          }
        )
      );
      // energy
      dogPromisesEnergy.push(
        fetch(
          `https://api.api-ninjas.com/v1/dogs?energy=${energy}&offset=${offset}`,
          {
            headers: {
              "X-Api-Key": process.env.DOG_API_KEY,
            },
          }
        )
      );
      // trainability
      dogPromisesTrainability.push(
        fetch(
          `https://api.api-ninjas.com/v1/dogs?trainability=${trainability}&offset=${offset}`,
          {
            headers: {
              "X-Api-Key": process.env.DOG_API_KEY,
            },
          }
        )
      );
      // protectiveness
      dogPromisesProtectiveness.push(
        fetch(
          `https://api.api-ninjas.com/v1/dogs?protectiveness=${protectiveness}&offset=${offset}`,
          {
            headers: {
              "X-Api-Key": process.env.DOG_API_KEY,
            },
          }
        )
      );
      // shedding
      dogPromisesShedding.push(
        fetch(
          `https://api.api-ninjas.com/v1/dogs?shedding=${shedding}&offset=${offset}`,
          {
            headers: {
              "X-Api-Key": process.env.DOG_API_KEY,
            },
          }
        )
      );
    }

    // Backend makes request to external API for all 7x9 fetches
    const dogResponses = await Promise.all([
      ...dogPromisesBarking,
      ...dogPromisesEnergy,
      ...dogPromisesTrainability,
      ...dogPromisesProtectiveness,
      ...dogPromisesShedding,
    ]);
    // All 7 characteristics summarized
    const dataCharacteristicsArray = await Promise.all(
      dogResponses.map((response) => response.json())
    );
    // Flatten the array (reduce nesting from two levels to one level)
    const dataCharacteristicsArrayFlat = dataCharacteristicsArray.flat();

    // Backend sends response from external API back to the client
    response.status(200).json([...dataCharacteristicsArrayFlat]);
    return;
  }

  response.status(405).json({ message: "Method not allowed" });
}
