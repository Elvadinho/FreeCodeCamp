import http from "node:http";
import { getDataFromDB } from "./database.js";
import { sendJSON } from "./utils/sendJSON.js";

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB();

  if (req.url === "/api" && req.method === "GET") {
    sendJSON(res, 200, destinations);
  } else if (req.url.startsWith("/api/continent") && req.method == "GET") {
    const continent = req.url.split("/").pop();

    let location = destinations.filter(
      (e) => e.continent.toLowerCase() === `${continent.toLowerCase()}`
    );

    sendJSON(res, 200, location);
  } else if (req.url.startsWith("/api/country") && req.method == "GET") {
    const country = req.url.split("/").pop();

    let location = destinations.filter(
      (e) => e.country.toLowerCase() === `${country.toLowerCase()}`
    );

    sendJSON(res, 200, location);
  } else {
    sendJSON(res, 404, {
      error: "not found",
      message: "the requested route does not exist",
    });
  }
});

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
