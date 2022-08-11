import express from "express";
import bodyParser from "body-parser";
import router from "./routes/v1/index.mjs";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(`mongodb://0.0.0.0:${process.env.MONGO_PORT}`, {
    user: process.env.MONGO_INITDB_ROOT_USERNAME,
    pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
    dbName: process.env.MONGO_INITDB_DATABASE,
  })
  .then(() => {
    console.log(`MongoDB connection success`);
  })
  .catch((err) => {
    console.log(`MongoDB connection error: ${err}`);
    process.exit(-1);
  });

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.use("/api/v1/", router);

app.listen(port);
console.log(`listen on port ${port}`);
