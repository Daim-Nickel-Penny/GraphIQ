import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "@dotenvx/dotenvx";
import router from "./router";

dotenv.config({
  path: path.join(__dirname, "../../../.env"),
});

console.log("Resolved Path:", path.join(__dirname, "../../../.env"));

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/api", (req, res) => {
  res.send("Hello, World!" + process.env.NODE_ENV);
});

app.get("/api/health", (req, res) => {
  res.send("OK");
});

app.use("/api/", router);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
