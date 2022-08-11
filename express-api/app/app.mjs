import express from "express";
import bodyParser from "body-parser";
import router from "./routes/v1/index.mjs";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.use("/api/v1/", router);

app.listen(port);
console.log(`listen on port ${port}`);
