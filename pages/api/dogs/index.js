import data from "@/lib/data.json";

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
    // Backend sends response from external API back to the client
    response.status(200).json(processData(data, request.query));
    return;
  }

  response.status(405).json({ message: "Method not allowed" });
}
