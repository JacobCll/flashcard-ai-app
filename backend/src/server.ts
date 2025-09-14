import app from "./index.js";
import "dotenv/config";

const PORT = parseInt(process.env.SERVER_PORT || "5666", 10);
let URL = process.env.SERVER_PROD_URL;

if (process.env.NODE_ENV === "development") {
  URL = `http://localhost:${PORT}`;
}

app.listen(PORT, () => {
  console.log(`Server is running on ${URL}`);
});
