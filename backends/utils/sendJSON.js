export const sendJSON = (res, statusCode, payload) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "application/json");
  res.statusCode = statusCode;
  res.end(JSON.stringify(payload));
};
