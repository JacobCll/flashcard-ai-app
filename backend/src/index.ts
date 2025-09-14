import { StatusCodes } from "http-status-codes";
import express from "express";
import "dotenv/config";

const app = express();

app.get("/", (req, res) => {
  res.send({
    code: StatusCodes.OK,
    message: "Test endpoint",
  });
});

export default app;
