import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ClassOperations from "./routes/class.routes.js";
dotenv.config();


const app = express();


app.use(cors("http://localhost:5173/"));
app.use(express.json());
app.use("/api", ClassOperations);

export default app;