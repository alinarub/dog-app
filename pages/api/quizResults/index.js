export default async function handler(request, response) {
  // step 2: backend makes request to external API
  console.log("request.query:", request.query);
  if (request.method === "GET") {
    // make request to API. then send back response.
    // this example does not use any API KEYS.
    // If you need to keep something secret you could do the following. {process.env.YOUR_NAME_OF_THE_ENV_VARIABLE}

    const dogResponse = await fetch(
      `https://api.api-ninjas.com/v1/dogs?barking=${request.query.barking}`,
      {
        headers: {
          "X-Api-Key": process.env.DOG_API_KEY,
        },
      }
    );
    const data = await dogResponse.json();

    // step 3: backend sends response from external API back to the client
    response.status(200).json(data);
    return;
  }

  response.status(405).json({ message: "Method not allowed" });
}
