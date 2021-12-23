import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as cors from "cors";
import postRoutes from "./routes/postRoutes"
// import BodyParser = require("body-parser");
import * as BodyParser from "body-parser";


createConnection().then(async connection => {
    const app = express();
    app.use(cors());
    app.use(BodyParser.json());
    app.use("/",postRoutes);

    app.listen(8081,()=>console.log("App is running at port 8081."));

}).catch(error => console.log(error));
