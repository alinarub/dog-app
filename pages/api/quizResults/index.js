export default async function handler(request, response) {
  if (request.method === "GET") {
    const barking = request.query.barking;
    const trainability = request.query.trainability;
    const energy = request.query.energy;

    // const offset = 116;

    // We have to fetch 9 times
    // const offset0 = 0-20;
    // const offset20 = 21-40;
    // const offset40 = 41-60;

    // const barkingURL = `https://api.api-ninjas.com/v1/dogs?barking=${barking}&offset=${offset}`;
    // const trainabilityURL = `https://api.api-ninjas.com/v1/dogs?trainability=${trainability}&offset=${offset}`;
    // const energyURL = `https://api.api-ninjas.com/v1/dogs?energy=${energy}&offset=${offset}`;

    let dogPromises = [];
    for (let offset = 0; offset < 200; offset += 20) {
      dogPromises.push(
        `https://api.api-ninjas.com/v1/dogs?barking=${barking}&offset=${offset}`,
        {
          headers: {
            "X-Api-Key": process.env.DOG_API_KEY,
          },
        }
      );
    }
    console.log("offset Sprünge", dogPromises);

    // Promise.all(dogPromises)
    //   .then(function handleData(data) {
    //     return fetch("example.api") // should be returned 1 time
    //       .then((response) => {
    //         if (response.ok) return response.json();
    //         throw new Error(response.statusText);
    //       });
    //   })
    //   .catch(function handleError(error) {
    //     console.log("Error" + error);
    //   });

    // Backup Code
    // Promise.all(dogPromises)
    //   .then(function handleData(data) {
    //     return fetch("example.api") // should be returned 1 time
    //       .then(response => {
    //         if (response.ok) return response.json();
    //         throw new Error(response.statusText);
    //       });
    //   })
    //   .catch(function handleError(error) {
    //     console.log("Error" + error);
    //   });

    // ------------------------------------------------------
    // Backend makes request to external API
    // const dogResponses = await Promise.all([
    //   fetch(barkingURL, {
    //     headers: {
    //       "X-Api-Key": process.env.DOG_API_KEY,
    //     },
    //   }),

    // fetch(trainabilityURL, {
    //   headers: {
    //     "X-Api-Key": process.env.DOG_API_KEY,
    //   },
    // }),

    // fetch(energyURL, {
    //   headers: {
    //     "X-Api-Key": process.env.DOG_API_KEY,
    //   },
    // }),
    // ]);
    // ------------------------------------------------------
    // Backend makes request to external API
    const dogResponses = await Promise.all(dogPromises);
    const dataBarking = await dogResponses.json();

    // const dataTrainability = await dogResponses[1].json();
    // const dataEnergy = await dogResponses[2].json();

    // Backend sends response from external API back to the client
    response.status(200).json([...dataBarking]);
    return;
  }

  response.status(405).json({ message: "Method not allowed" });
}
