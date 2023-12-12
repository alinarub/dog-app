async function request({ data, url, method }) {
  const options = data
    ? {
        method,
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    : { method };
  const response = await fetch(url, options);
  const json = await response.json();
  return json;
}

export async function createStatistic({ ...data }) {
  return request({ url: `/api/statistics`, method: "POST", data });
}

export async function createFavorite({ ...data }) {
  return request({ url: `/api/favorites`, method: "POST", data });
}
