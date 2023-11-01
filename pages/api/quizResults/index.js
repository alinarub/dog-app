import data from "@/data.json";

// Combine Api Data with what the user wants as characteristics
function processData(entries, query = {}) {
  const queryArray = Object.entries(query);
  return entries
    .map((entry) => {
      let points = 0;
      queryArray.forEach(([key, value]) => {
        if (+entry[key] === +value) {
          points++;
        }
      });
      return { ...entry, points };
    })
    .sort((a, b) => Math.sign(b.points - a.points));
}

export default async function handler(request, response) {
  if (request.method === "GET") {
    // Old Code ----------------
    // Arrays for all seven Questions
    // const dogPromisesBarking = [];

    // Loop for all 9 offsets and all 7 questions
    // for (let offset = 0; offset < 200; offset += 20) {
    //   for (let barking = 1; barking < 6; barking++) {
    //     // for barking value 1-5

    //     dogPromisesBarking.push(
    //       fetch(
    //         `https://api.api-ninjas.com/v1/dogs?barking=${barking}&offset=${offset}`,
    //         {
    //           headers: {
    //             "X-Api-Key": process.env.DOG_API_KEY,
    //           },
    //         }
    //       )
    //     );
    //   }
    // }

    // Backend makes request to external API for all 7x9 fetches
    // const dogResponses = await Promise.all([...dogPromisesBarking]);
    // All 7 characteristics summarized
    // const dataCharacteristicsArray = await Promise.all(
    //   dogResponses.map((response) => response.json())
    // );
    // Flatten the array (reduce nesting from two levels to one level)
    // const dataCharacteristicsArrayFlat = dataCharacteristicsArray.flat();

    // Backend sends response from external API back to the client
    response.status(200).json(processData(data, request.query));
    return;
  }

  response.status(405).json({ message: "Method not allowed" });
}
