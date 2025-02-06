import express from "express";
import morgan from "morgan";
import cors from "cors";
import { PORT } from "../src/config.js";
import { connectDB } from "../database/database.js";
import { router } from "./Routes/index.js";
connectDB();

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application" });
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
