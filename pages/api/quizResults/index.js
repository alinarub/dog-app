export default async function handler(request, response) {
  if (request.method === "GET") {
    // Arrays for all seven Questions
    let dogPromisesBarking = [];

    // Loop for all 9 offsets and all 7 questions
    for (let offset = 0; offset < 200; offset += 20) {
      for (let barking = 1; barking < 6; barking++) {
        // for barking value 1-5

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
      }
    }

    // Backend makes request to external API for all 7x9 fetches
    const dogResponses = await Promise.all([...dogPromisesBarking]);
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
