import path from "node:path";
import fs from "node:fs/promises";
import { sendResponse } from "./sendResponse.js";

export const serverStatic = async (req, res, dir) => {
  const filepath = path.join(dir, "public", "index.html");

  try {
    const content = await fs.readFile(filepath);
    sendResponse(res, 200, "text/html", content);
  } catch (err) {
    console.log(err);
  }
};
