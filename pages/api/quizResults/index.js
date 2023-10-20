export default async function handler(request, response) {
  if (request.method === "GET") {
    const barking = request.query.barking;
    const trainability = request.query.trainability;
    const energy = request.query.energy;

    const barkingURL = `https://api.api-ninjas.com/v1/dogs?barking=${barking}`;
    const trainabilityURL = `https://api.api-ninjas.com/v1/dogs?trainability=${trainability}`;
    const energyURL = `https://api.api-ninjas.com/v1/dogs?energy=${energy}`;

    // Backend makes request to external API
    const dogResponses = await Promise.all([
      fetch(barkingURL, {
        headers: {
          "X-Api-Key": process.env.DOG_API_KEY,
        },
      }),
      fetch(trainabilityURL, {
        headers: {
          "X-Api-Key": process.env.DOG_API_KEY,
        },
      }),
      fetch(energyURL, {
        headers: {
          "X-Api-Key": process.env.DOG_API_KEY,
        },
      }),
    ]);

    const dataBarking = await dogResponses[0].json();
    const dataTrainability = await dogResponses[1].json();
    const dataEnergy = await dogResponses[2].json();

    // Backend sends response from external API back to the client
    response.status(200).json([dataBarking, dataEnergy, dataTrainability]);
    return;
  }

  response.status(405).json({ message: "Method not allowed" });
}
