const BASE_URL = "http://localhost:3000/timeboxes"

const FetchTimeboxesAPI = {
  getAllTimeboxes: async function() {
    const response = await makeRequest(`${BASE_URL}`, "GET")
    const timeboxes = await response.json();
    return timeboxes;
  },
  addTimebox: async function(timeboxToAdd) {
    const response = await makeRequest(`${BASE_URL}`, "POST", timeboxToAdd)
    const addedTimebox = await response.json();
    return addedTimebox;
  },
  deleteTimebox: async function(timeboxToDelete) {
    if (!timeboxToDelete.id) {
      throw new Error("Nie udało się skasować timeboxa :(")
    }
    await makeRequest(`${BASE_URL}/${timeboxToDelete.id}`, "DELETE")
  }
}
export default FetchTimeboxesAPI;

async function makeRequest(url, method, body) {
  const jsonBody = body ? JSON.stringify(body) : undefined;
  const response = await window.fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: jsonBody,
  })
  if (!response.ok) {
    throw new Error("Ups, coś poszło nie tak... :(")
  }
  return response;
}