import http from "node:http";
import { getDataFromDB } from "./database.js";
import { sendJSON } from "./utils/sendJSON.js";
import { getData } from "./utils/getDataByPathParams.js";

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB();

  if (req.url === "/api" && req.method === "GET") {
    sendJSON(res, 200, destinations);
  } else if (req.url.startsWith("/api/continent") && req.method == "GET") {
    const continent = req.url.split("/").pop();

    const filteredData = getData(destinations, "continent", continent);

    sendJSON(res, 200, filteredData);
  } else if (req.url.startsWith("/api/country") && req.method == "GET") {
    const country = req.url.split("/").pop();

    const filteredData = getData(destinations, "country", country);

    sendJSON(res, 200, filteredData);
  } else {
    sendJSON(res, 404, {
      error: "not found",
      message: "the requested route does not exist",
    });
  }
});

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
