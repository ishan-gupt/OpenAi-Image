import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import aiRoutes from "./routes/aiRoute.js";

//Configure environment
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/image", aiRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to API, Visit /image for results");
});

// Start server
const startServer = async () => {
  try {
    app.listen(4090, () => console.log("Server has started"));
  } catch (err) {
    console.log(err);
  }
};

startServer();
