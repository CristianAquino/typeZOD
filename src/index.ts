import express from "express";
import authRouter from "./routes/auth.routes";

const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/api/v1", authRouter);

app.listen(3000, () => {
  console.log("run for 3000");
});
